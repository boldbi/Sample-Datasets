using System;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using BoldBI.Embed.Sample.Models;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.IO;

namespace BoldBI.Embed.Sample.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            try
            {
                string basePath = AppDomain.CurrentDomain.BaseDirectory;
                string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
                GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);

                // Pass specific properties to the view using ViewBag
                ViewBag.DashboardId = GlobalAppSettings.EmbedDetails.DashboardId;
                ViewBag.ServerUrl = GlobalAppSettings.EmbedDetails.ServerUrl;
                ViewBag.EmbedType = GlobalAppSettings.EmbedDetails.EmbedType;
                ViewBag.Environment = GlobalAppSettings.EmbedDetails.Environment;
                ViewBag.SiteIdentifier = GlobalAppSettings.EmbedDetails.SiteIdentifier;

                return View();
            }
            catch
            {
                return View("EmbedConfigErrorLog");
            }
        }

        [HttpGet]
        [Route("DashboardListing")]
        public IActionResult DashboardListing()
        {
            // Pass specific properties to the view using ViewBag
            ViewBag.DashboardId = GlobalAppSettings.EmbedDetails.DashboardId;
            ViewBag.ServerUrl = GlobalAppSettings.EmbedDetails.ServerUrl;
            ViewBag.EmbedType = GlobalAppSettings.EmbedDetails.EmbedType;
            ViewBag.Environment = GlobalAppSettings.EmbedDetails.Environment;
            ViewBag.SiteIdentifier = GlobalAppSettings.EmbedDetails.SiteIdentifier;

            return View();
        }

        [HttpGet]
        [Route("GetDashboards")]
        public string GetDashboards()
        {
            var token = GetToken();

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(GlobalAppSettings.EmbedDetails.ServerUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Add("Authorization", token.TokenType + " " + token.AccessToken);
                var result = client.GetAsync(GlobalAppSettings.EmbedDetails.ServerUrl + "/api/" + GlobalAppSettings.EmbedDetails.SiteIdentifier + "/v2.0/items?ItemType=2").Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                return resultContent;
            }
        }

        public Token GetToken()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(GlobalAppSettings.EmbedDetails.ServerUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("grant_type", "embed_secret"),
                    new KeyValuePair<string, string>("Username", GlobalAppSettings.EmbedDetails.UserEmail),
                    new KeyValuePair<string, string>("embed_secret", GlobalAppSettings.EmbedDetails.EmbedSecret)
                });
                var result = client.PostAsync(GlobalAppSettings.EmbedDetails.ServerUrl + "/api/" + GlobalAppSettings.EmbedDetails.SiteIdentifier + "/token", content).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                var response = JsonConvert.DeserializeObject<Token>(resultContent);
                return response;
            }
        }

        [HttpPost]
        [Route("AuthorizationServer")]
        public string AuthorizationServer([FromBody] object embedQuerString)
        {
            var embedClass = Newtonsoft.Json.JsonConvert.DeserializeObject<EmbedClass>(embedQuerString.ToString());

            var embedQuery = embedClass.embedQuerString;
            // User your user-email as embed_user_email
            embedQuery += "&embed_user_email=" + GlobalAppSettings.EmbedDetails.UserEmail;
            //To set embed_server_timestamp to overcome the EmbedCodeValidation failing while different timezone using at client application.
            double timeStamp = (int)DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
            embedQuery += "&embed_server_timestamp=" + timeStamp;
            //Set another user mail as embed_ipersonate_email this will override the embed_user_email 
            embedQuery += "&embed_impersonate_email=" + "demo@boldbi.com";
            var embedDetailsUrl = "/embed/authorize?" + embedQuery + "&embed_signature=" + GetSignatureUrl(embedQuery);

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(embedClass.dashboardServerApiUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var result = client.GetAsync(embedClass.dashboardServerApiUrl + embedDetailsUrl).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                return resultContent;
            }

        }

        public string GetSignatureUrl(string queryString)
        {
            if (queryString != null)
            {
                var encoding = new System.Text.UTF8Encoding();
                var keyBytes = encoding.GetBytes(GlobalAppSettings.EmbedDetails.EmbedSecret);
                var messageBytes = encoding.GetBytes(queryString);
                using (var hmacsha1 = new HMACSHA256(keyBytes))
                {
                    var hashMessage = hmacsha1.ComputeHash(messageBytes);
                    return Convert.ToBase64String(hashMessage);
                }
            }
            return string.Empty;
        }
    }
}

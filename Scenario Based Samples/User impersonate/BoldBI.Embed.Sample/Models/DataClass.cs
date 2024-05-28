using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace BoldBI.Embed.Sample.Models
{
    [DataContract]
    public class EmbedClass
    {
        [DataMember]
        public string embedQuerString { get; set; }
        [DataMember]
        public string dashboardServerApiUrl { get; set; }
    }

    public class TokenObject
    {
        public string Message { get; set; }

        public string Status { get; set; }

        public string Token { get; set; }
    }

    public class Token
    {
        [JsonProperty("access_token")]
        public string AccessToken { get; set; }

        [JsonProperty("token_type")]
        public string TokenType { get; set; }

        [JsonProperty("expires_in")]
        public string ExpiresIn { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }

        public string LoginResult { get; set; }

        public string LoginStatusInfo { get; set; }

        [JsonProperty(".issued")]
        public string Issued { get; set; }

        [JsonProperty(".expires")]
        public string Expires { get; set; }
    }
    public class EmbedDetails
    {
        public string Environment { get; set; }

        public string SiteIdentifier { get; set; }

        public string ServerUrl { get; set; }

        public string EmbedSecret { get; set; }

        public string UserEmail { get; set; }

        public string EmbedType { get; set; }

        public string DashboardId { get; set; }
    }
}

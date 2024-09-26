using System;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.IO;
using System.Xml.Linq;

namespace BoldBI.Embed.Sample.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {        
            return View("Index");
        }

        public class Employee
        {
            public string name { get; set; }
            public int Empid { get; set; }
            public string Department { get; set; }
            public string Designation { get; set; }
        }

        [HttpGet]
        [Route("GetJsonData")]
        public IActionResult GetJsonData()
        {
            string department = Request.Headers["x-api-key"];

            var mockData = new List<Employee>
            {
                  new Employee { name = "Delta", Empid = 02, Department = "Sales", Designation = "Team Lead"},
                  new Employee{ name = "Brad", Empid = 03, Department = "HR",Designation = "Manager" },
                  new Employee{ name = "Harry", Empid = 04, Department = "Marketing", Designation = "Analyst"  },
                  new Employee{ name = "Atos", Empid = 05, Department = "HR",Designation = "Team Lead" },
                  new Employee{ name = "Jane", Empid = 06, Department = "Marketing",Designation = "Team Lead" },
                  new Employee{ name = "Rachel", Empid = 07, Department = "Operations",Designation = "Manager" },
                  new Employee{ name = "Tom", Empid = 08, Department = "Marketing",Designation = "Senior Analyst" },
                  new Employee{ name = "Dory", Empid = 09, Department = "Marketing",Designation = "Junior Analyst" },
                  new Employee{ name = "Destiny", Empid = 10, Department = "Marketing",Designation = "Manager" },
                  new Employee{ name = "Smith", Empid = 11, Department = "Sales",Designation = "Analyst" },
                  new Employee{ name = "Philips", Empid = 12, Department = "Sales",Designation = "Analyst" },
                  new Employee{ name = "Kate", Empid = 13, Department = "Sales",Designation = "Senior Analyst" },
                  new Employee{ name = "Ferick", Empid = 14, Department = "Operations",Designation = "Executive" },
                  new Employee{ name = "Ferb", Empid = 15, Department = "Operations",Designation = "Executive" },
                  new Employee{ name = "Jill", Empid = 16, Department = "Operations",Designation = "Executive" },
                  new Employee{ name = "Jack", Empid = 17, Department = "HR",Designation = "Executive" },
                  new Employee{ name = "Nemo", Empid = 18, Department = "HR",Designation = "Executive" },
                  new Employee{ name = "Dory", Empid = 19, Department = "Sales",Designation = "Analyst" }

            };

            if (!string.IsNullOrEmpty(department))
            {
                // Perform filtering based on the department
                mockData = mockData.FindAll(item => item.Department == department);
            }

            // Return JSON data
            return new JsonResult(mockData);
        }
    }
}

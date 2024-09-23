using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoldBI.Embed.Sample.Models
{
    public class EmbedProperties
    {
        //BoldBI server URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)
        public static string RootUrl = "http://localhost:54879/bi";

        //For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.
        public static string SiteIdentifier = "site/site1";

        //Your Bold BI application environment. (If Cloud, you should use `cloud`, if Enterprise, you should use `enterprise`)
        public static string Environment = "enterprise";

        //Enter dashboard ID which you want to embed
        public static string dashboardId = "d64dc9ca-0f96-464d-a117-da3ba0bf161e";

        //Enter your BoldBI credentials here.
        public static string UserEmail = "abcd@gmail.com";

        // Get the embedSecret key from Bold BI, please check this link(https://help.syncfusion.com/bold-bi/on-premise/site-settings/embed-settings)
        public static string EmbedSecret = "gds8hsgdfhsuhfhsdbY48zSN3qse7";
    }
}

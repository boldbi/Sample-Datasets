function Init() {
    var http = new XMLHttpRequest();
    http.open("GET", getDashboardsUrl, true);
    http.responseType = 'json';
    http.setRequestHeader("Content-type", "application/json");
    renderDashboard("d64dc9ca-0f96-464d-a117-da3ba0bf161e"); //f3968817-f3e0-4747-9d7a-d89a6098bb12 
};


function renderDashboard(dashboardId) {
    var dashboard = BoldBI.create({
        serverUrl: rootUrl + "/" + siteIdentifier,
        dashboardId: "d64dc9ca-0f96-464d-a117-da3ba0bf161e",
        //datasourceId: "8ea28161-8b11-46e1-9340-aa1dda122b5e",
        //pinboardName:"Pinboard",
        embedContainerId: "dashboard",
        embedType: BoldBI.EmbedType.Component,
        environment: environment == "enterprise" ? BoldBI.Environment.Enterprise : BoldBI.Environment.Cloud,
        width: "100%",
        height: "100%",
        //width: window.innerWidth + "px",
        /*  height: window.innerHeight+1+ "px",*/
        mode: BoldBI.Mode.View,
        expirationTime: 100000,
        authorizationServer: {
            url: authorizationServerUrl
        },
        dashboardSettings: {
            enableComment: true,
            getDashboardComment: "dashboardGetcomment",

        },
        widgetSettings: {
            enableComment: true,
            getWidgetComment: "widgetGetComments",
        },
         
    });

    dashboard.loadDashboard();
    //dashboard.loadDesigner();
    //dashboard.loadDatasource();
    //dashboard.loadPinboard();
    //dashboard.loadDashboardWidget("Sales By Country");
};

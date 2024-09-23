function Init() {
    var http = new XMLHttpRequest();
    http.open("GET", getDashboardsUrl, true);
    http.responseType = 'json';
    http.setRequestHeader("Content-type", "application/json");
    renderDashboard(dashboardId);
};


function renderDashboard(dashboardId) {
    var dashboard = BoldBI.create({
        serverUrl: rootUrl + "/" + siteIdentifier,
        dashboardId: dashboardId,
        embedContainerId: "dashboard",
        embedType: BoldBI.EmbedType.Component,
        environment: environment == "enterprise" ? BoldBI.Environment.Enterprise : BoldBI.Environment.Cloud,
        width: "100%",
        height: "100%",
        mode: BoldBI.Mode.View,
        expirationTime: 100000,
        authorizationServer: {
            url: authorizationServerUrl
        },
        dashboardSettings: {
            beforeIconRender: "CommentIconCreation",
            onIconClick: "response",
        },
        widgetSettings: {
            beforeIconRender: "CommentWidgetIconCreation",
            onIconClick: "widgetResponse",
        }
    });

    dashboard.loadDashboard();
};

function response(arg) {
    if (arg.name == "comment") {
        this.commentsArgs = arg;
        var obj = { 'dashboardId': arg.model.itemId, 'multitabDashboardId': null };
        var instance = BoldBI.getInstance("dashboard");
        instance.getComments("dashboard", obj, "dashboardGetcomment");
    }
}
function widgetResponse(arg) {
    if (arg.name == "comment") {
        this.commentsArgs = arg;
        var obj = { 'widgetId': arg.widgetId, 'dashboardId': arg.model.itemId, 'multitabDashboardId': null };
        var instance = BoldBI.getInstance("dashboard");
        instance.getComments("widget", obj, "widgetGetComments");
    }
}
function CommentIconCreation(args) {

    var instance = BoldBI.getInstance("dashboard");
    var icon = $("<div/>", {
        "class": "server-banner-icon e-dashboard-banner-icon bbi-dbrd-designer-hoverable su su-without-comment",
        "data-tooltip": "Comment",
        "data-name": "comment",
        "data-event": true,
        css: { "font-size": "15px" }
    });
    args.iconsinformation[0].items.push(icon);

}
function CommentWidgetIconCreation(args) {

    args.iconsinformation.push({
        "class": "su-without-comment su-icon",
        "name": "comment",
        "tooltip": "Comment"
    });

}


﻿function Init() {
    this.dashboard = BoldBI.create({
        serverUrl: rootUrl + "/" + siteIdentifier,
        dashboardId: dashboardId,
        embedContainerId: "dashboard",
        embedType: embedType.toLowerCase() == "component" ? BoldBI.EmbedType.Component : BoldBI.EmbedType.IFrame,
        environment: environment.toLowerCase() == "cloud" ? BoldBI.Environment.Cloud : BoldBI.Environment.Enterprise,
        width: "100%",
        height: "100%",
        expirationTime: 100000,
        authorizationServer: {
            url: authorizationServerUrl
        }
    });
    this.dashboard.loadDashboard();
};

function ListDashboards(data) {
    if (typeof (data) != "undefined" && data != null) {
        renderDashboard(data[0].Id);
        data.forEach(function (element) {
            var divTag = document.createElement("div");
            divTag.innerHTML = element.Name;
            divTag.className = "dashboard-item";
            divTag.setAttribute("onclick", "renderDashboard('" + element.Id + "')");
            divTag.setAttribute("name", element.Name);
            divTag.setAttribute("itemid", element.Id);
            divTag.setAttribute("version", element.Version);
            divTag.setAttribute("ispublic", element.IsPublic);
            document.getElementById("panel").appendChild(divTag);
        });
    }
}

function renderDashboard() {
    this.dashboard = BoldBI.create({
        serverUrl: rootUrl + "/" + siteIdentifier,
        dashboardId: dashboardId,
        embedContainerId: "dashboard",
        embedType: embedType,
        environment: environment,
        width: "100%",
        height: "100%",
        expirationTime: 100000,
        authorizationServer: {
            url: authorizationServerUrl
        }
    });
    this.dashboard.loadDashboard();
};

function embedConfigErrorDialog(){
    var targetContainer = $('<div id="custom_dialog"></div>');
    var dlgDiv = $('<div id="sample_dialog" ></div>');
    targetContainer.append(dlgDiv);
    $('body').append(targetContainer);
    var dialog = new window.ejs.popups.Dialog({
        header: 'Error Message',
        width: '500px',
        isModal: true,
        showCloseIcon: true,
        target: document.getElementById('custom_dialog'),
        content: '<div>To compile and run the project, an embed config file needs to be required. Please use the <a href="https://help.boldbi.com/cloud-bi/site-administration/embed-settings/" target="_blank">URL</a> to obtain the JSON file from the Bold BI server.</div>'
    });
    dialog.appendTo('#sample_dialog');
    var dialogFooter = $('<div id="sample_dialog_footer"><button id="custom_ok_button"onclick="Cancel()">OK</button></div>')
    $('#sample_dialog').append(dialogFooter);
    $('.e-dlg-overlay').css('position', 'fixed');
};

function Cancel() {
    $("#custom_dialog").html('');
}
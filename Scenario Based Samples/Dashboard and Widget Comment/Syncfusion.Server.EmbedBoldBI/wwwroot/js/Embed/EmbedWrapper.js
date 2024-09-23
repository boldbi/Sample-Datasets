/*!
*  filename: embed-js.js
*  version : 5.2.48
*  Copyright Syncfusion Inc. 2001 - 2022. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws.
*/

var bbEmbed = $;
var tabInstance;

if (typeof bb$ !== 'undefined') {
    bbEmbed = bb$;
}

class BoldBI {
    constructor() {
        this.IsDependencyLoaded = false;

        this.rootUrl = "";
        this.baseUrl = "";
        this.siteIdentifier = "";
        this.dashboardServerApiUrl = "";
        this.designerRootUrl = "";
        this.scheduleEndpointUrl = "";
        this.childContainer = "";
        this.cdnLink = "";
        this.onSaveFilterFn = "saveFilter";
        this.onSaveAsFilterFn = "saveAsFilter";
        this.onViewSavedFiltersFn = "openViewSection";
        this.onBannerIconClickFn = "onBannerIconClick";
        this.beforeWidgetIconRenderedFn = "beforeWidgetIconRendered";
        this.onWidgetIconClickFn = "onWidgetIconClick";
        this.actionBeginFn = "onActionBeginOfNewDashboardViewer";
        this.actionCompleteFn = "onActionCompleteOfNewDashboardViewer";
        this.beforeBannerIconRenderFn = "beforeBannerIconRender";
        this.beforeOtherRenderFn = "beforeOtherOptionContextMenuRender";
        this.isWidgetMode = false;
        this.widgetName = "";
        this.isDashboardViewMode = false;
        this.dashboardViewName = "";
        this.errorImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExNzgwNzk4MzhBOTExRTQ4MDMxRTZEMkIzQUQzNjdCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExNzgwNzk5MzhBOTExRTQ4MDMxRTZEMkIzQUQzNjdCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE3ODA3OTYzOEE5MTFFNDgwMzFFNkQyQjNBRDM2N0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3ODA3OTczOEE5MTFFNDgwMzFFNkQyQjNBRDM2N0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4RB5yjAAABXklEQVR42rRUsU7DQAzNRWxESMydK2XsAhtiQGHo1LmsZYCBMSNDx3wASJQ1zN0rJjZYOlbqDCsSPxCeq5f0anwtSMHSk52L/c4++85VVRW1KXu14ZwLOn2enK1+Hr48B3evE3ONoQhBcgw1AjKgw+V3YAY8gvz1V4QgOoC6B4b0nQML2inQo/0EXIH4K0hIMslAspsCOQKWKvMuVAEMAMkyE9KmF2LUH3AugQoYK5IbgVob07f0eWJ1ZlLmFDveqjM/JRqhj1QxZOxKYs9nRJ0bTdwHEmM9V7EbhNLNuT4zSkLSSGW5ZNMyi7DjddMiTAL/Ft5YrQd7h3z8+aZwaFPLCaX1t3CkjP1Rssxfj3Omb825wFjvctBnFuGEujCyeCC0FCp2TYiy3qBkSAd6sCF9YmOweVtKxv7P1Qs9DnfAxY7HQaq53vo4qEyOoC4Dz9fEL9MkbEviqGX5FmAA1Vq0VgBUvekAAAAASUVORK5CYII=";
        this.pinBoardRendered = true;
        this.pinboardIds = [];
        this.fromColumn, this.toColumn, this.fromPosition, this.toPosition, this.column, this.position = null;
        this.isMultiTab = false;
        this.parentDbrdId = "";
        this.isNewConnection = false;
        this.multiTabTheme = "";
        this.dashboardDetails = {};
        this.pinboardDetails = {};
        this.accessToken = "";
        this.homepageItemId = "";
        this.isVirtualHomepage = false;

        this.viewerScriptFiles = [
            "ej1.web.all.min.js",
            "ej2.web.all.min.js",
            "designerlocalization.js",
        ];

        this.pinBoardScriptFiles = [
            "bootstrap.min.js"
        ];

        this.pinboardCssFiles = [
            "pinboard-embed.min.css"
        ];

        this.ejViewerDependentFiles = [
            "ej.dashboarddesigner.min.js"
        ];

        this.ejDesignerDependentFiles = [
            "codemirror.min.js"
        ];

        this.designerScriptFiles = [
            "ej1.web.all.min.js",
            "ej2.web.all.min.js",
            "designerlocalization.js",
            "signalr.min.js"
        ];

        this.cssFiles = [
            "font-server.min.css",
            "ej1.web.all.min.css",
            "ej2.partone.web.all.min.css",
            "ej2.parttwo.web.all.min.css",
            "ej.designerwidgets.all.min.css",
            "ej.dashboarddesigner.min.css"
        ];

        this.designerCssFiles = [
            "ej.codemirror.min.css"
        ]

        this.embedOptions = {
            serverUrl: "",
            dashboardId: "",
            dashboardPath: "",
            datasourceId: "",
            datasourceName: "",
            embedContainerId: "",
            embedType: BoldBI.EmbedType.Component,
            environment: BoldBI.Environment.Enterprise,
            mode: BoldBI.Mode.View,
            dashboardSettings: {
                showHeader: true,
                showExport: true,
                showRefresh: true,
                showMoreOption: true,
                onFavoriteIconClick: "",
                beforeIconRender: "",
                onIconClick: "",
                onInteraction: "",
                enableTheme: true,
                enableFilterOverview: true,
                enableFullScreen: false,
                showDashboardParameter: true,
                dashboardName: "",
                beforePublishAs: "",
                beforeDesignerToolbarButtons: "",
                widgetsPanel: {
                    hideDefaultWidgets: false,
                    hideExistingWidgets: false,
                    defaultPanelDisplayText: "",
                    existingPanelDisplayText: "",
                    defaultPanelSearchPlaceholder: "",
                    existingPanelSearchPlaceholder: "",
                    existingDashboards: [],
                    dragAndDropSettings: {
                        rowSpan: null,
                        columnSpan: null,
                        isWidgetMode: false
                    }
                },
                dataSourceConfig: {
                    hideDataSourceConfig: false
                },
                viewDataSettings: {
                    showAllColumns: false
                },
                showPreviewAs: true
            },
            widgetSettings: {
                showExport: true,
                showMaximize: true,
                showMoreOption: true,
                showFilter: true,
                beforeIconRender: "",
                onIconClick: "",
                beforeWidgetControlMenuOpen: "",
                onWidgetControlMenuClick: "",
            },
            filterParameters: "",
            dynamicConnection: {
                isEnabled: false,
                identity: "",
            },
            exportSettings: {
                showExcel: true,
                showPDF: true,
                showImage: true,
                showCSV: true,
            },
            height: "768px",
            width: "1024px",
            theme: BoldBI.Theme.Light,
            authorizationServer: {
                url: "",
                data: "",
                headers: {

                },
                authorizionComplete: ""
            },
            expirationTime: 86400,
            autoRefreshSettings: {
                enabled: false,
                hourlySchedule: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }

            },
            isRemoveStyle: false,
            scalingFactor: 1,
            localeSettings: {
                culture: "en-US",
            },
            actionBegin: "",
            actionComplete: "",
            beforeContextMenuRender: "",
            beforeNavigateUrlLinking: "",
            beforeNavigateToDashboard: "",
            beforeDashboardMobileMenuOpen: "",
            beforeFilterApply: "",
            afterFilterApply: "",
            toolbarSettings: {
                showToolbar: true
            },
            pinboardName: "",
            pinboardSettings: {
                enablePinboardHeader: true,
                enableUnpinWidget: true
            },
            onUnpin: "",
            onDrag: "",
            onDrop: "",
            onLayoutChange: "",
            onResize: "",
            datasources: [],
            designCanvasSettings: {
                margin: null
            },
            widgetContainerSettings: {
                margin: null,
                boxShadow: null
            },
            beforeDatasourceSave: "",
            afterDatasourceSave: "",
            preConfiguredWidgets: {
                dashboardId: "",
                categoryName: ""
            },
            disableAutoRecover: false,
            ajaxBeforeLoad: ""
        };
    }


    // Customer exposed functions
    static create(options) {
        var boldBIObj = new BoldBI();
        boldBIObj.isMultiTab = false;
        boldBIObj.parentDbrdId = "";
        boldBIObj.pinboardIds = [];
        delete window["multiTabFilterParameter"];
        if (document.addEventListener) {
            document.addEventListener('webkitfullscreenchange', function () { boldBIObj._fullscreenExitHandler(boldBIObj) }, false);
            document.addEventListener('mozfullscreenchange', function () { boldBIObj._fullscreenExitHandler(boldBIObj) }, false);
            document.addEventListener('fullscreenchange', function () { boldBIObj._fullscreenExitHandler(boldBIObj) }, false);
            document.addEventListener('MSFullscreenChange', function () { boldBIObj._fullscreenExitHandler(boldBIObj) }, false);
            window.addEventListener('resize', function (event) {
                if (boldBIObj.isMultiTab) {
                    boldBIObj.resizeDashboard()
                } else if (!boldBIObj._isEmptyOrSpaces(boldBIObj.embedOptions.pinboardName) || !boldBIObj._isNullOrUndefined(boldBIObj.embedOptions.pinboardName)) {
                    boldBIObj.setListMinimumHeight();
                }
            });
        }
        if (boldBIObj._validateOptions(options)) {
            boldBIObj._initializeEmbedOptions(options);
            if (boldBIObj.embedOptions.embedType == BoldBI.EmbedType.Component) {
                try {
                    boldBIObj.childContainer = document.createElement("div");
                    boldBIObj.childContainer.id = boldBIObj.embedOptions.embedContainerId + "_embeddedbi";
                    var _biInstance = BoldBI._instance.get(document.getElementById(boldBIObj.embedOptions.embedContainerId), "embeddedBoldBI");
                    if (_biInstance != null || _biInstance != undefined) {
                        _biInstance.destroy();
                    }
                    bbEmbed(document.getElementById(boldBIObj.embedOptions.embedContainerId)).html('');
                    document.getElementById(boldBIObj.embedOptions.embedContainerId).append(boldBIObj.childContainer);
                    boldBIObj._initializeUrls();
                    if (!boldBIObj.IsDependencyLoaded) {
                        if (boldBIObj.embedOptions.environment === BoldBI.Environment.Cloud) {
                            if (boldBIObj._isEmptyOrSpaces(boldBIObj.cdnLink) || boldBIObj._isEmptyOrSpaces(boldBIObj.designerRootUrl)) {
                                boldBIObj._getCloudLinks();
                            }
                        } else {
                            boldBIObj._loadDepedentFiles();
                        }
                    }
                } catch (ex) {
                    if (ex.message === "Cannot read property 'append' of null") {
                        alert("Invalid Embed Container Id");
                        return false;
                    } else {
                        boldBIObj._throwError(ex.message, boldBIObj.embedOptions.embedContainerId);
                    }
                }
            } else {
                boldBIObj._throwError("Invalid Embed type", boldBIObj.embedOptions.embedContainerId);
            }
            var ele = document.getElementById(boldBIObj.embedOptions.embedContainerId);
            if (BoldBI._instance.has(ele, "embeddedBoldBI")) {
                BoldBI._instance.remove(ele, "embeddedBoldBI");
            }

            var retObj = Object.assign(boldBIObj)
            BoldBI._instance.put(ele, "embeddedBoldBI", retObj);
            return retObj;
        }
    };

    static getInstance(eleID) {
        BoldBI._instance.widgetValue = [];
        return BoldBI._instance.get(document.getElementById(eleID), "embeddedBoldBI");
    };

    destroy() {
        var that = this;
        if (this.isMultiTab) {
            var dashboardContainer = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (var i = 0; i < dashboardContainer.length; i++) {
                var embedId = bbEmbed(dashboardContainer[i]).attr('id');
                var existingDashboardInstance = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.destroy();
                }
            }
            BoldBI._instance.remove(document.getElementById(this.embedOptions.embedContainerId), "embeddedBoldBI");
            document.getElementById(this.embedOptions.embedContainerId).innerHTML = "";
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function () {
                var existingDashboardInstance = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.destroy();
                }
            });
            BoldBI._instance.remove(document.getElementById(this.embedOptions.embedContainerId), "embeddedBoldBI");
            document.getElementById(this.embedOptions.embedContainerId).innerHTML = "";
        } else {
            var embedContainerId = this.embedOptions.embedContainerId;
            var existingDashboardInstance = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                existingDashboardInstance.destroy();
            }
            BoldBI._instance.remove(document.getElementById(embedContainerId), "embeddedBoldBI");
            document.getElementById(embedContainerId).innerHTML = "";
        }
        if (this.embedOptions.isRemoveStyle == true) {
            document.querySelectorAll('link').forEach(function (node) {
                that.cssFiles.forEach(function (file) {
                    if (node.href.toLowerCase().indexOf(file.toLowerCase()) !== -1) {
                        node.parentNode.removeChild(node);
                    }
                });
            });
        }
    };

    loadDashboard(dashboardId) {
        if (this.embedOptions.mode !== BoldBI.Mode.View) {
            this._throwError("Invalid embed mode");
        }
        if (this.embedOptions.pinboardName !== '') {
            this._throwError("Invalid embed pinboard");
        }
        if (dashboardId != undefined) {
            this.embedOptions.dashboardId = dashboardId;
        }
        if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
            this.isWidgetMode = false;
            this.widgetName = "";
            this.isDashboardViewMode = false;
            this.dashboardViewName = "";
            this._showLoader();
            this._isDependencyLoaded(this);
        } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
            var iframe = document.createElement('iframe');
            iframe.frameBorder = 0;
            iframe.width = this.embedOptions.width;
            iframe.height = this.embedOptions.height;
            iframe.id = this.embedOptions.embedContainerId + "_" + this.embedOptions.dashboardId;
            iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
            iframe.setAttribute("src", this.embedOptions.serverUrl + "/dashboards/" + this.embedOptions.dashboardId + "?isembed=true");

            document.getElementById(this.embedOptions.embedContainerId).appendChild(iframe);
        }
    };

    loadPinboard() {
        if (this.embedOptions.pinboardName === '') {
            this._throwError("Invalid embed pinboard");
        }
        if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
            this.isWidgetMode = false;
            this.widgetName = "";
            this.isDashboardViewMode = false;
            this.dashboardViewName = "";
            this._showLoader();
            this._isDependencyLoaded(this);
        } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
            var iframe = document.createElement('iframe');
            iframe.frameBorder = 0;
            iframe.width = this.embedOptions.width;
            iframe.height = this.embedOptions.height;
            iframe.id = this.embedOptions.embedContainerId + "_" + this.embedOptions.dashboardId;
            iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
            iframe.setAttribute("src", this.embedOptions.serverUrl + "/dashboards/" + this.embedOptions.dashboardId + "?isembed=true");

            document.getElementById(this.embedOptions.embedContainerId).appendChild(iframe);
        }
    }

    loadDashboardView(name) {
        this._throwError("loadDashboardView not implemented");
    };

    loadDashboardWidget(name, dashboardId) {
        if (this._isEmptyOrSpaces(name)) {
            this._throwError("Widget name should be empty");
        }
        if (this.embedOptions.pinboardName !== '' && this.pinBoardRendered) {
            this._throwError("Invalid embed pinboard");
        }
        if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
            this.isWidgetMode = true;
            this.widgetName = name;
            this.isDashboardViewMode = false;
            this.dashboardViewName = "";
            this._showLoader();
            this._isDependencyLoaded(this, dashboardId);
        } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
            var iframe = document.createElement('iframe');
            iframe.frameBorder = 0;
            iframe.width = this.embedOptions.width;
            iframe.height = this.embedOptions.height;
            iframe.id = this.embedOptions.embedContainerId + "_" + this.embedOptions.dashboardId;
            iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
            iframe.setAttribute("src", this.embedOptions.serverUrl + "/dashboards/" + this.embedOptions.dashboardId + "?isembed=true");

            document.getElementById(this.embedOptions.embedContainerId).appendChild(iframe);
        }
    };

    loadDesigner(dashboardId) {
        if (this.embedOptions.mode === BoldBI.Mode.View) {
            this._throwError("Invalid embed mode");
        }
        if (this.embedOptions.pinboardName !== '') {
            this._throwError("Invalid embed pinboard");
        }
        if (dashboardId != undefined) {
            this.embedOptions.dashboardId = dashboardId;
        }
        if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
            this.isWidgetMode = false;
            this.widgetName = "";
            this.isDashboardViewMode = false;
            this.dashboardViewName = "";
            this._showLoader();
            this._isDependencyLoaded(this);
        } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
            var iframe = document.createElement('iframe');
            iframe.frameBorder = 0;
            iframe.width = this.embedOptions.width;
            iframe.height = this.embedOptions.height;
            iframe.id = this.embedOptions.embedContainerId + "_" + this.embedOptions.dashboardId;
            iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
            iframe.setAttribute("src", this.embedOptions.serverUrl + "/dashboard-designer/" + this.embedOptions.dashboardId + "?isembed=true");

            document.getElementById(this.embedOptions.embedContainerId).appendChild(iframe);
        }
    };

    loadDatasource() {
        if (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) {
            if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                this.isWidgetMode = false;
                this.widgetName = "";
                this.isDashboardViewMode = false;
                this.dashboardViewName = "";
                this._showLoader();
                this._isDependencyLoaded(this);
            } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
                var iframe = document.createElement('iframe');
                iframe.frameBorder = 0;
                iframe.width = this.embedOptions.width;
                iframe.height = this.embedOptions.height;
                iframe.id = this.embedOptions.embedContainerId + "_" + this.embedOptions.datasourceId;
                iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
                iframe.setAttribute("src", this.embedOptions.serverUrl + "/datasource-designer/" + this.embedOptions.datasourceId + "?isembed=true");

                document.getElementById(this.embedOptions.embedContainerId).appendChild(iframe);
            }
        } else {
            this._throwError("Invalid Embed mode");
        }
        if (this.embedOptions.mode == BoldBI.Mode.Connection) {
            bbEmbed("<style type='text/css'> .e-dashboarddesigner .bbi-dbrd-connection-mode-dlg .bbi-dbrd-connection-mode-header .bbi-dbrd-icon-container .bbi-dbrd-close-icon{ display: none !important} </style>").appendTo("head");
        }
    }
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
    * @param {string} fileName - Define the name of the file to be exported
    *  @param {string} pageSize - Define the size of the page('A3','A4','A5','Letter').
    *  @param {string} pageOrientation - Define the page orientation('Landscape','Portrait').
    *  @param {boolean} showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
    */
    exportDashboardAsPdf(exportInformation) {
        if (this.isMultiTab) {
            var dashboardId = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            var MultitabDashboardId = 'multi_' + dashboardId + '_embeddedbi';
            var dbrdInstance = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportAsPdf(exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
            }
        }
        else {
            var dbrdInstance = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                if (exportInformation) {
                    dbrdInstance.exportAsPdf(exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
                }
                else {
                    dbrdInstance.exportAsPdf();
                }
            }
        }

    }
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
    * @param {string} fileName - Define the name of the file to be exported
    *  @param {string} exportImageFormat - Define the format of the image to be exported('jpg','png'and'bmp').
    *  @param {number} resolutionDpi - Define the resolution of the image (Integer value above 96).
    *  @param {boolean} showAppliedFilters - Define whether we need to export the dashboard with or without a filter
    */
    exportDashboardAsImage(exportInformation) {
        if (this.isMultiTab) {
            var dashboardId = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            var MultitabDashboardId = 'multi_' + dashboardId + '_embeddedbi';
            var dbrdInstance = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportAsImage(exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
            }
        }
        else {
            var dbrdInstance = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                if (exportInformation) {
                    dbrdInstance.exportAsImage(exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
                }
                else {
                    dbrdInstance.exportAsImage();
                }
            }
        }
    }
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
    * @param {string} fileName - Define the name of the file to be exported
    *  @param {string} fileType - Define the type of file to be exported ('xlsx','xls').
    */
    exportDashboardAsExcel(exportInformation) {
        if (this.isMultiTab) {
            var dashboardId = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            var MultitabDashboardId = 'multi_' + dashboardId + '_embeddedbi';
            var dbrdInstance = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportAsExcel(exportInformation.fileName, exportInformation.fileType);
            }
        }
        else {
            var dbrdInstance = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                if (exportInformation) {
                    dbrdInstance.exportAsExcel(exportInformation.fileName, exportInformation.fileType);
                }
                else {
                    dbrdInstance.exportAsExcel();
                }
            }
        }

    }
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
    * @param {string} widgetName - Define the name of the widget to be exported
    * @param {string} fileName - Define the name of the file to be exported
    *  @param {string} pageSize - Define the size of the page('A3','A4','A5','Letter').
    *  @param {string} pageOrientation - Define the page orientation('Landscape','Portrait').
    *  @param {boolean} showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
    */
    exportWidgetAsPdf(exportInformation) {
        var that = this;
        if (this.isMultiTab) {
            var dashboardId = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            var MultitabDashboardId = 'multi_' + dashboardId + '_embeddedbi';
            var dbrdInstance = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsPdf(exportInformation.widgetName, exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
            }
        }
        else if (bbEmbed('.pinBoardDbrd').length > 0) {
            var length = bbEmbed('.pinBoardDbrd').length;
            for (var i = 0; i < length; i++) {
                if (that.pinboardIds[i].widgetId == exportInformation.dashboardId) {
                    var pinboardId = that.pinboardIds[i].pinboardContainerId;
                    var dbrdInstance = that._getDashboardInstance(pinboardId + '_embeddedbi');
                    if (dbrdInstance != undefined) {
                        dbrdInstance.exportWidgetAsPdf(exportInformation.widgetName, exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
                    }
                }
            }
        }
        else {
            var dbrdInstance = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsPdf(exportInformation.widgetName, exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
            }
        }
    }
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
     * @param {string} widgetName - Define the name of the widget to be exported
     * @param {string} fileName - Define the name of the file to be exported
     *  @param {string} exportImageFormat - Define the format of the image to be exported('jpg','png'and'bmp').
     *  @param {number} resolutionDpi - Define the resolution of the image (Integer value above 96).
     *  @param {boolean} showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
    */
    exportWidgetAsImage(exportInformation) {
        var that = this;
        if (this.isMultiTab) {
            var dashboardId = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            var MultitabDashboardId = 'multi_' + dashboardId + '_embeddedbi';
            var dbrdInstance = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsImage(exportInformation.widgetName, exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
            }
        }
        else if (bbEmbed('.pinBoardDbrd').length > 0) {
            var length = bbEmbed('.pinBoardDbrd').length;
            for (var i = 0; i < length; i++) {
                if (that.pinboardIds[i].widgetId == exportInformation.dashboardId) {
                    var pinboardId = that.pinboardIds[i].pinboardContainerId;
                    var dbrdInstance = that._getDashboardInstance(pinboardId + '_embeddedbi');
                    if (dbrdInstance != undefined) {
                        dbrdInstance.exportWidgetAsImage(exportInformation.widgetName, exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
                    }
                }
            }
        }
        else {
            var dbrdInstance = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsImage(exportInformation.widgetName, exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
            }
        }
    }
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
    * @param {string} widgetName - Define the name of the widget to be exported
    * @param {string} fileName - Define the name of the file to be exported
    *  @param {string} fileType - Define the type of file to be exported ('xlsx','xls').
    */
    exportWidgetAsExcel(exportInformation) {
        var that = this;
        if (this.isMultiTab) {
            var dashboardId = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            var MultitabDashboardId = 'multi_' + dashboardId + '_embeddedbi';
            var dbrdInstance = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsExcel(exportInformation.widgetName, exportInformation.fileName, exportInformation.fileType);
            }
        }
        else if (bbEmbed('.pinBoardDbrd').length > 0) {
            var length = bbEmbed('.pinBoardDbrd').length;
            for (var i = 0; i < length; i++) {
                if (that.pinboardIds[i].widgetId == exportInformation.dashboardId) {
                    var pinboardId = that.pinboardIds[i].pinboardContainerId;
                    var dbrdInstance = that._getDashboardInstance(pinboardId + '_embeddedbi');
                    if (dbrdInstance != undefined) {
                        dbrdInstance.exportWidgetAsExcel(exportInformation.widgetName, exportInformation.fileName, exportInformation.fileType);
                    }
                }
            }
        }
        else {
            var dbrdInstance = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsExcel(exportInformation.widgetName, exportInformation.fileName, exportInformation.fileType);
            }
        }
    }
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
    * @param {string} widgetName - Define the name of the widget to be exported
    * @param {string} fileName - Define the name of the file to be exported
    */
    exportWidgetAsCsv(exportInformation) {
        var that = this;
        if (this.isMultiTab) {
            var dashboardId = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            var MultitabDashboardId = 'multi_' + dashboardId + '_embeddedbi';
            var dbrdInstance = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsCsv(exportInformation.widgetName, exportInformation.fileName);
            }
        }
        else if (bbEmbed('.pinBoardDbrd').length > 0) {
            var length = bbEmbed('.pinBoardDbrd').length;
            for (var i = 0; i < length; i++) {
                if (that.pinboardIds[i].widgetId == exportInformation.dashboardId) {
                    var pinboardId = that.pinboardIds[i].pinboardContainerId;
                    var dbrdInstance = that._getDashboardInstance(pinboardId + '_embeddedbi');
                    if (dbrdInstance != undefined) {
                        dbrdInstance.exportWidgetAsCsv(exportInformation.widgetName, exportInformation.fileName);
                    }
                }
            }
        }
        else {
            var dbrdInstance = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsCsv(exportInformation.widgetName, exportInformation.fileName);
            }
        }
    }

    updateDatasource() {
        var dbrdInstance = this._getDashboardInstance();
        if (dbrdInstance != undefined) {
            dbrdInstance.modules.queryDesigner.saveQueryInfo();
        }
    }

    updateFilters(filterParameters) {
        var that = this;
        if (this.isMultiTab) {
            window['multiTabFilterParameter'] = filterParameters;
            var dashboardContainer = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (var i = 0; i < dashboardContainer.length; i++) {
                var embedId = bbEmbed(dashboardContainer[i]).attr('id');
                var existingDashboardInstance = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.option("filterParameters", filterParameters);
                }
            }
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function () {
                var existingDashboardInstance = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.option("filterParameters", filterParameters);
                }
            });
        } else {
            var existingDashboardInstance = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                existingDashboardInstance.option("filterParameters", filterParameters);
            }
        }
    };

    resizeDashboard(filterParameters) {
        var that = this;
        if (this.isMultiTab) {
            bbEmbed("#" + that.embedOptions.embedContainerId + "_multi_tab_dashboard").css("width", bbEmbed("#" + that.embedOptions.embedContainerId).width());
            window['multiTabFilterParameter'] = filterParameters;
            var dashboardContainer = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (var i = 0; i < dashboardContainer.length; i++) {
                var embedId = bbEmbed(dashboardContainer[i]).attr('id');
                var existingDashboardInstance = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    var clientFnc = window[that.embedOptions.onResize];
                    if (clientFnc instanceof Function) {
                        clientFnc.call(this, existingDashboardInstance);
                    }
                    if (this.embedOptions.onResize instanceof Function) {
                        this.embedOptions.onResize.call(this, existingDashboardInstance);
                    }
                    existingDashboardInstance.resizeDashboard();
                }
            }
            this._tabSelected();
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function () {
                var existingDashboardInstance = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    var clientFnc = window[that.embedOptions.onResize];
                    if (clientFnc instanceof Function) {
                        clientFnc.call(that, existingDashboardInstance);
                    }
                    if (that.embedOptions.onResize instanceof Function) {
                        that.embedOptions.onResize.call(that, existingDashboardInstance);
                    }
                    existingDashboardInstance.resizeDashboard();
                }
            });
        } else {
            var existingDashboardInstance = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                var clientFnc = window[that.embedOptions.onResize];
                if (clientFnc instanceof Function) {
                    clientFnc.call(this, existingDashboardInstance);
                }
                if (this.embedOptions.onResize instanceof Function) {
                    this.embedOptions.onResize.call(this, existingDashboardInstance);
                }
                existingDashboardInstance.resizeDashboard();
            }
        }
    };

    refreshDashboard() {
        var that = this;
        if (this.isMultiTab) {
            var dashboardContainer = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (var i = 0; i < dashboardContainer.length; i++) {
                var embedId = bbEmbed(dashboardContainer[i]).attr('id');
                var existingDashboardInstance = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.updateDashboard();
                }
            }
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function () {
                var existingDashboardInstance = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.updateDashboard();
                }
            });
        } else {
            var existingDashboardInstance = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                existingDashboardInstance.updateDashboard();
            }
        }
    };

    hidePopup(embedId) {
        if (this.isMultiTab) {
            var dashboardContainer = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (var i = 0; i < dashboardContainer.length; i++) {
                var embedId = bbEmbed(dashboardContainer[i]).attr('id');
                var existingDashboardInstance = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.hideAllPopupsForDashboard();
                }
            }
        } else {
            var dbrdInstance = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.hideAllPopupsForDashboard();
            }
        }
    }

    /**
      * @param {string} widgetNames - Define the name of the widget to be Refresh.
      * @param {boolean} hideLoader - Define whether to show or hide loading indicator while processing.
      * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard.
      */
    refreshWidgetData(widgetNames, hideLoader, dashboardId) {
        var that = this;
        if (Array.isArray(widgetNames) == true) {
            if (this.isMultiTab) {
                var dashboardContainer = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
                for (var i = 0; i < dashboardContainer.length; i++) {
                    if (bbEmbed(dashboardContainer[i]).attr('id').includes(dashboardId.toString().replaceAll("-", "")) > 0) {
                        var embedId = bbEmbed(dashboardContainer[i]).attr('id');
                        var dbrdInstance = this._getDashboardInstance(embedId);
                        if (dbrdInstance != undefined) {
                            dbrdInstance.refreshWidget(widgetNames, hideLoader);
                        }
                        break;
                    }
                }
            } else {
                var dbrdInstance = this._getDashboardInstance();
                if (dbrdInstance != undefined) {
                    dbrdInstance.refreshWidget(widgetNames, hideLoader);
                }
            }
        }
        else {
            that._throwError("Cannot able to refresh the widget the WigetName should be in array");
        }
    };

    getWidgetData(widgetName, clientFnc, dashboardId) {
        var widgetValue;
        if (this.isMultiTab) {
            var dashboardContainer = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (var i = 0; i < dashboardContainer.length; i++) {
                if (bbEmbed(dashboardContainer[i]).attr('id').includes(dashboardId.toString().replaceAll("-", "")) > 0) {
                    var embedId = bbEmbed(dashboardContainer[i]).attr('id');
                    var dbrdInstance = this._getDashboardInstance(embedId);
                    if (dbrdInstance != undefined) {
                        widgetValue = dbrdInstance.getWidgetData(widgetName, clientFnc);
                        if (widgetValue.toLowerCase().includes('widget') > 0) {
                            if (window[clientFnc] instanceof Function) {
                                window[clientFnc].call(this, widgetValue);
                            } else {
                                clientFnc.call(this, widgetValue);
                            }
                        }
                    }
                    break;
                }
            }
        } else {
            var dbrdInstance = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                widgetValue = dbrdInstance.getWidgetData(widgetName, clientFnc);
                if (widgetValue.toLowerCase().includes('widget') > 0) {
                    if (window[clientFnc] instanceof Function) {
                        window[clientFnc].call(this, widgetValue);
                    } else {
                        clientFnc.call(this, widgetValue);
                    }
                }
            }
        }
    }

    /**
      * @param {string} clientFnc - It denotes the method name to be defined 
      * @param {string} ContainerId - This should be the container id where you want to embed the dashboard
    */
    getDashboardCategories(clientFnc, containerId) {
        var dbrdInstance = (this._isNullOrUndefined(containerId) || this._isEmptyOrSpaces(containerId)) ? this._getDashboardInstance() : this._getDashboardInstance(containerId + "_embeddedbi");
        if (dbrdInstance != undefined) {
            var widgetValue = dbrdInstance.GetDashboardCategories(clientFnc);
            if (window[clientFnc] instanceof Function) {
                window[clientFnc].call(this, widgetValue);
            } else {
                clientFnc.call(this, widgetValue);
            }
        }
    }

    /**
      * @param {string} categoryName - Define new category name want to create .
      * @param {string} categoryDescription - Define the description of new category name .
      * @param {string} clientFnc - It denotes the method name to be defined 
      * @param {string} ContainerId - This should be the container id where you want to embed the dashboard
    */
    createDashboardCategory(categoryName, categoryDescription, clientFnc, containerId) {
        var dbrdInstance = (this._isNullOrUndefined(containerId) || this._isEmptyOrSpaces(containerId)) ? this._getDashboardInstance() : this._getDashboardInstance(containerId + "_embeddedbi");
        if (dbrdInstance != undefined) {
            var widgetValue = dbrdInstance.CreateDashboardCategory(categoryName, categoryDescription, clientFnc);
            if (window[clientFnc] instanceof Function) {
                window[clientFnc].call(this, widgetValue);
            } else {
                clientFnc.call(this, widgetValue);
            }
        }
    }

    /**
      * @param {string} publishModel - Define the information about publish dashboard
      * @param {string} ContainerId - This should be the container id where you want to embed the dashboard
    */
    saveDashboard(publishModel, containerId) {
        var dbrdInstance = (this._isNullOrUndefined(containerId) || this._isEmptyOrSpaces(containerId)) ? this._getDashboardInstance() : this._getDashboardInstance(containerId + "_embeddedbi");
        if (dbrdInstance != undefined) {
            dbrdInstance.saveDashboardToServer(publishModel);
        }
    }

    getWidgetInstance(eleID) {
        var widgetBIObjvalue = new widgetBI();
        widgetBIObjvalue.containerID = this.embedOptions.embedContainerId;
        BoldBI._instance.widgetValue[BoldBI._instance.widgetValue.length] = eleID;
        var returnValue = Object.assign(widgetBIObjvalue);
        if (!BoldBI._instance.has(document.getElementById(this.embedOptions.embedContainerId), "embeddedBoldBIWidget_" + eleID)) {
            BoldBI._instance.put(document.getElementById(this.embedOptions.embedContainerId), "embeddedBoldBIWidget_" + eleID, returnValue);
        }
        return returnValue;
    };

    /**
      * @param {string} ContainerId - This should be the container id where you want to embed the dashboard
    */
    updateWidgetFilters(containerId) {
        var that = this;
        var filters = this._getWidgetFilterInfo();
        if (this.isMultiTab) {
            var dashboardContainer = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (var i = 0; i < dashboardContainer.length; i++) {
                var embedId = bbEmbed(dashboardContainer[i]).attr('id');
                var existingDashboardInstance = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.updateWidgetFilterValues(filters);
                }
            }
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function () {
                var existingDashboardInstance = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.updateWidgetFilterValues(filters);
                }
            });
        } else {
            var dbrdInstance = (this._isNullOrUndefined(containerId) || this._isEmptyOrSpaces(containerId)) ? this._getDashboardInstance() : this._getDashboardInstance(containerId + "_embeddedbi");
            if (dbrdInstance != undefined) {
                dbrdInstance.updateWidgetFilterValues(filters);
            }
        }
    }

    // Internal functions. Will not be accessible outside of this scope.
    _initializeEmbedOptions(options) {
        this.embedOptions = Object.assign(this.embedOptions, options);
    };

    _initializeUrls() {
        if (this.embedOptions.environment == BoldBI.Environment.Enterprise) {
            this.rootUrl = this.embedOptions.serverUrl.substr(0, (this.embedOptions.serverUrl.indexOf("/bi/") >= 0 ? (this.embedOptions.serverUrl.indexOf("/bi/") + 3) : (this.embedOptions.serverUrl.indexOf("/bi") + 3)));
            this.baseUrl = this.embedOptions.serverUrl;
            this.siteIdentifier = this.embedOptions.serverUrl.indexOf("/site/") >= 0 ? this.embedOptions.serverUrl.substr(this.embedOptions.serverUrl.indexOf("/site/") + 1) : '';
            this.dashboardServerApiUrl = this.rootUrl + "/api" + (this._isEmptyOrSpaces(this.siteIdentifier) ? '' : ('/' + this.siteIdentifier));
            this.designerRootUrl = this.rootUrl + "/designer";
        } else {
            this.rootUrl = this.embedOptions.serverUrl;
            this.baseUrl = this.embedOptions.serverUrl;
            this.siteIdentifier = "";
            this.dashboardServerApiUrl = this.rootUrl + "/api/";
        }
        this.scheduleEndpointUrl = this.baseUrl + "/datasources/recurrence-type-page";
    };

    _loadCloudDepedentFiles(responseInfo) {
        var responseData = responseInfo.Data;
        this.cdnLink = responseData.CdnUrl;
        this.designerRootUrl = responseData.DesignerServerUrl;
        this._loadDepedentFiles();
    };

    _getCloudLinks() {
        this._xhrRequestHelper("Get", this.dashboardServerApiUrl + "/system-settings/get-url", {}, {}, this._loadCloudDepedentFiles)
    };

    _loadDepedentFiles() {
        if (this.embedOptions.mode === BoldBI.Mode.Design || this.embedOptions.mode === BoldBI.Mode.DataSource || this.embedOptions.mode === BoldBI.Mode.Connection) {
            this._addedDependentFiles(this, this.designerScriptFiles, false);
        }
        else {
            this._addedDependentFiles(this, this.viewerScriptFiles, false);
        }

        if (this.embedOptions.pinboardName !== "") {
            this._addedDependentFiles(this, this.pinBoardScriptFiles, false);
        }

        this._addedDependentFiles(this, this.cssFiles, true);
        if (this.embedOptions.pinboardName !== "") {
            this._addedDependentFiles(this, this.pinboardCssFiles, true);
        }

        if (this.embedOptions.mode === BoldBI.Mode.Design || this.embedOptions.mode === BoldBI.Mode.DataSource || this.embedOptions.mode === BoldBI.Mode.Connection) {
            this._addedDependentFiles(this, this.designerCssFiles, true);
        }

        this._loadBingmapDependentFiles(this);
        this._loadDependentDesignerFiles(this);
    };

    _loadBingmapDependentFiles(that) {
        var scriptTag = '<script type="text/javascript" src="https://www.bing.com/api/maps/mapcontrol" async></script>';
        bbEmbed(scriptTag).appendTo('head');
    }

    _loadDependentDesignerFiles(that) {
        if (window.BoldBIDashboard instanceof Object &&
            window.BoldBIDashboard.createObject instanceof Function &&
            window.Designer instanceof Object) {
            that._addedDependentFiles(that, that.ejViewerDependentFiles, false);
            if (that.embedOptions.mode === BoldBI.Mode.Design || that.embedOptions.mode === BoldBI.Mode.DataSource || that.embedOptions.mode === BoldBI.Mode.Connection) {
                that._addedDependentFiles(that, that.ejDesignerDependentFiles, false);
            }
        } else {
            setTimeout(that._loadDependentDesignerFiles, 50, that);
        }
    };

    _addedDependentFiles(that, fileUriArray, isCSS) {
        var fileUri = "";
        fileUriArray.forEach(function (file) {
            if (!that._checkDepedentFileExists(file, isCSS)) {
                if (isCSS) {
                    if (that.embedOptions.environment === BoldBI.Environment.Enterprise) {
                        if (file === "font-server.min.css")
                            fileUri = that.rootUrl + "/cdn/css/" + file;
                        else if (file === "bootstrap.min.css")
                            fileUri = that.rootUrl + "/Content/Styles/Bootstrap/" + file;
                        else if (file === "pinboard-embed.min.css")
                            fileUri = that.rootUrl + "/cdn/css/" + file;
                        else
                            fileUri = that.rootUrl + "/webdesignerservice/themes/" + file;
                    }
                    else {
                        if (file === "font-server.min.css")
                            fileUri = that.cdnLink + "/css/" + file;
                        else if (file === "bootstrap.min.css")
                            fileUri = that.cdnLink + "/css/" + file;
                        else if (file === "pinboard-embed.min.css")
                            fileUri = that.cdnLink + "/css/" + file;
                        else
                            fileUri = that.cdnLink + "/css/designer/" + file;
                    }

                    var cssTag = document.createElement("link");
                    cssTag.rel = "stylesheet";
                    cssTag.href = fileUri;
                    if (bbEmbed("link[href='" + fileUri + "']").length < 1)
                        document.head.appendChild(cssTag);
                }
                else {
                    if (that.embedOptions.environment === BoldBI.Environment.Enterprise) {
                        if (file === 'bootstrap.min.js')
                            fileUri = that.rootUrl + "/cdn/scripts/" + file;
                        else if (file === "designerlocalization.js")
                            fileUri = that.rootUrl + "/designer/localization/" + file;
                        else if (file === "signalr.min.js")
                            fileUri = that.rootUrl + "/cdn/scripts/signalr/" + file;
                        else
                            fileUri = that.rootUrl + "/cdn/scripts/designer/" + file;
                    }
                    else {
                        if (file === 'bootstrap.min.js')
                            fileUri = that.cdnLink + "/scripts/" + file;
                        else if (file === "designerlocalization.js")
                            fileUri = that.designerRootUrl + "/localization/" + file;
                        else if (file === "signalr.min.js")
                            fileUri = that.cdnLink + "/scripts/signalr/" + file;
                        else
                            fileUri = that.cdnLink + "/scripts/designer/" + file;
                    }

                    var scriptTag = document.createElement("script");
                    scriptTag.type = "text/javascript";
                    scriptTag.src = fileUri;
                    if (bbEmbed("script[src='" + fileUri + "']").length < 1)
                        document.head.appendChild(scriptTag);
                }
            }
        }.bind(that));
    };

    _checkDepedentFileExists(file, isCSS) {
        var isFileExists = false;
        var selectItem = isCSS ? "link" : "script";
        var tagList = document.head.querySelectorAll(selectItem);
        tagList.forEach(function (tag) {
            if (!isFileExists) {
                if (isCSS) {
                    isFileExists = tag.href.indexOf(file) !== -1;
                }
                else {
                    isFileExists = tag.src.indexOf(file) !== -1;
                }
            }
        });

        return isFileExists;
    };

    _renderDashboard(responseInfo) {
        var that = this;
        var parameter = "";
        if (!responseInfo.Status) {
            this._throwError(responseInfo.Message);
        } else {
            var embedResponse = responseInfo.Data;
            if (this.embedOptions.pinboardName !== "" && this.pinboardIds.length === 0) {
                this._renderPinboard(embedResponse);
            } else if (embedResponse.length) {
                this._renderMultiTabDashboard(embedResponse);
            }
            else {
                embedResponse.ItemDetail = this.embedOptions.mode != BoldBI.Mode.Connection ? JSON.parse(responseInfo.Data.ItemDetail) : null;
                var embedContainerId;
                var dashboardName = "";
                if (this.pinboardIds.length > 0) {
                    bbEmbed.map(this.pinboardIds, function (value, index) {
                        if (value['widgetId'] === embedResponse.WidgetId) {
                            var instance = that._getDashboardInstance(value['pinboardContainerId'] + '_embeddedbi');
                            if (that._isNullOrUndefined(instance)) {
                                embedContainerId = value['pinboardContainerId'];
                            }
                        }
                    });
                }
                else if (this.isMultiTab) {
                    embedContainerId = 'multi_' + embedResponse.ItemDetail.Id.toString().replaceAll("-", "");
                    if (!that._isNullOrUndefined(that.embedOptions.dashboardSettings.dashboardName) && typeof that.embedOptions.dashboardSettings.dashboardName != 'string') {
                        bbEmbed.map(that.embedOptions.dashboardSettings.dashboardName, function (val, index) {
                            if (embedResponse.ItemDetail.Id == val.dashboardId) {
                                dashboardName = val.dashboardName;
                            }
                        });
                    }
                } else {
                    embedContainerId = this.embedOptions.embedContainerId;
                    if (!that._isNullOrUndefined(that.embedOptions.dashboardSettings.dashboardName) && typeof that.embedOptions.dashboardSettings.dashboardName === 'string') {
                        dashboardName = that.embedOptions.dashboardSettings.dashboardName;
                    }
                }
                var height = this.pinboardIds.length > 0 ? bbEmbed('#' + embedContainerId).height() : this.isMultiTab ? (this.embedOptions.height.indexOf('%') > 0 ? (this.embedOptions.height.includes('calc') ? 'calc(100% - 36px)' : 'calc(' + this.embedOptions.height + ' - 36px)') : (parseInt(this.embedOptions.height) - 36 + 'px')) : this.embedOptions.height;
                if (typeof (responseInfo.Data.UserDetail) !== "undefined") {
                    embedResponse.UserDetail = JSON.parse(responseInfo.Data.UserDetail);
                }

                this._onBoldBIAuthorizionComplete(embedResponse);
                document.getElementById(embedContainerId).style.height = height;
                document.getElementById(embedContainerId).style.width = (this.embedOptions.pinboardName !== "" ? document.getElementById(embedContainerId).style.width : (!this.isMultiTab ? this.embedOptions.width : '100%'));

                var dashboardOptions = {
                    siteUrl: this.baseUrl,
                    serviceUrl: this.designerRootUrl,
                    dataServiceUrl: this.designerRootUrl,
                    serverUrl: this.dashboardServerApiUrl,
                    viewerSettings: {
                        serviceUrl: this.designerRootUrl + "/v1.0/design",
                    },
                    localeSettings: {
                        culture: this.embedOptions.localeSettings.culture
                    },
                    mode: this.embedOptions.mode,
                    environment: this.embedOptions.environment,
                    IsEmbed: true,
                    _isPublic: this.embedOptions.mode != BoldBI.Mode.Connection ? embedResponse.ItemDetail.IsPublic : '',
                    itemId: this.embedOptions.mode != BoldBI.Mode.Connection ? embedResponse.ItemDetail.Id : '',
                    dashboardPath: (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) ? '' : embedResponse.ItemDetail.ItemLocation,
                    serviceAuthorizationToken: embedResponse.access_token,
                    dashboardName: (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) ? '' : this._isEmptyOrSpaces(dashboardName) ? embedResponse.ItemDetail.Name : dashboardName,
                    dashboardDescription: (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) ? '' : embedResponse.ItemDetail.Description,
                    theme: this._isEmptyOrSpaces(this.multiTabTheme) ? this.embedOptions.theme : this.multiTabTheme,
                    enableTheme: this.embedOptions.dashboardSettings.enableTheme,
                    enableFilterOverview: this.embedOptions.dashboardSettings.enableFilterOverview,
                    isPinWidget: this.pinboardIds.length > 0,
                    export: {
                        Image: this.embedOptions.exportSettings.showImage,
                        Excel: this.embedOptions.exportSettings.showExcel,
                        Pdf: this.embedOptions.exportSettings.showPDF
                    },
                    filterParameters: parameter + (this._isEmptyOrSpaces(this.embedOptions.filterParameters) ? "" : "&") + ((this.isMultiTab && window['multiTabFilterParameter']) ? window['multiTabFilterParameter'] : this.embedOptions.filterParameters),
                    designCanvasSettings: this.embedOptions.designCanvasSettings,
                    widgetContainerSettings: this.embedOptions.widgetContainerSettings,
                    viewDataSettings: {
                        checkShowAllColumns: this._isNullOrUndefined(this.embedOptions.dashboardSettings.viewDataSettings) ? false : this.embedOptions.dashboardSettings.viewDataSettings.showAllColumns
                    },
                    widgets: this._getWidgetFilterInfo(),
                    actionBegin: function (arg) {
                        that._onBoldBIDashboardInstaceActionBegin(arg, embedContainerId);
                    },
                    actionComplete: function (arg) {
                        that._onBoldBIDashboardInstaceActionComplete(arg);
                    },
                    beforeBannerIconRender: function (arg) {
                        that._onBoldBIDashboardBeforeBannerIconRender(arg);
                    },
                    beforeOtherOptionContextMenuRender: function (arg) {
                        that._onBoldBIDashboardBeforeOtherOptionContextMenuRender(arg);
                    },
                    _onSaveFilter: function (arg) {
                        that._onBoldBIDashboardSaveFilter(arg);
                    },
                    _onSaveAsFilter: function (arg) {
                        that._onBoldBIDashboardSaveAsFilter(arg);
                    },
                    _onViewSavedFilters: function (arg) {
                        that._onBoldBIDashboardOpenViewSection(arg);
                    },
                    onBannerIconClick: function (arg) {
                        that._onBoldBIDashboardBannerIconClick(arg);
                    },
                    beforeWidgetIconRendered: function (arg) {
                        that._onBoldBIDashboardBeforeWidgetIconRendered(arg);
                    },
                    onWidgetIconClick: function (arg) {
                        that._onBoldBIDashboardWidgetIconClick(arg);
                    },
                    _onFavoriteStateChange: function (arg) {
                        that._onBoldBIDashboardUpdatefavorite(arg);
                    },
                    onExportRender: function (arg) {
                        that._onBoldBIWidgetExportRender(arg);
                    },
                    beforeNavigateUrlLinking: function (arg) {
                        that._onBoldBIBeforeNavigateUrlLinking(arg);
                    },
                    beforeControlMenuOpen: function (arg) {
                        that._onBoldBIBeforeControlMenuOpen(arg);
                    },
                    beforeDashboardMobileMenuOpen: function (arg) {
                        that._onBoldBIBeforeDashboardMobileMenuOpen(arg);
                    },
                    ajaxBeforeLoad: function (arg) {
                        that._onBoldBIAjaxBeforeLoad(arg);
                    },
                    beforeDesignerToolbarButtonsRendered: function (arg) {
                        that._onBoldBIbeforeDesignerToolbarButtonsRendered(arg);
                    },
                    onControlMenuClick: function (arg) {
                        that._onBoldBIonControlMenuClick(arg);
                    },
                };

                if (this.embedOptions.mode == BoldBI.Mode.Design) {
                    if (embedResponse.ItemDetail.IsDraft) {
                        dashboardOptions.dashboardPath = "";
                    }
                    var datasourceId = !this._isEmptyOrSpaces(embedResponse.DatasourceId) ? embedResponse.DatasourceId : "";
                    if (!this._isEmptyOrSpaces(datasourceId)) {
                        dashboardOptions.datasource = datasourceId;
                    }
                    if (this.embedOptions.datasources.length > 0) {
                        dashboardOptions.datasources = this.embedOptions.datasources;
                    }

                    dashboardOptions.disableAutoRecover = this.embedOptions.disableAutoRecover;

                    dashboardOptions.schedule = {
                        endPoint: this.scheduleEndpointUrl,
                        summaryText: ''
                    };
                    dashboardOptions.serverSettings = {
                        isAdmin: typeof (embedResponse.IsAdmin) === "undefined" ? false : embedResponse.IsAdmin,
                    };
                    dashboardOptions.intermediateDbStatus = embedResponse.IntermediateDbStatus;
                    dashboardOptions.connectionList = embedResponse.ConnectionList;
                    dashboardOptions.isAllowUserToCreateDatasource = embedResponse.CanCreateDatasource;
                    dashboardOptions.enablePublicDashboardSetting = false;
                    dashboardOptions.beforeNavigateToDashboard = function (arg) {
                        that._onBoldBIBeforeNavigateToDashboard(arg);
                    };
                    dashboardOptions.toolbarSettings = {
                        showToolbar: this.embedOptions.toolbarSettings.showToolbar,
                    };
                    dashboardOptions.predefinedWidgets = this.embedOptions.preConfiguredWidgets;
                    if (this.embedOptions.environment == BoldBI.Environment.Enterprise) {
                        dashboardOptions.configuration = this.rootUrl + "/webdesignerservice/scripts/settings/" + embedResponse.Branding + "/settings.min.js";
                    } else {
                        dashboardOptions.configuration = this.cdnLink + "/scripts/settings/" + embedResponse.Branding + "/settings.min.js";
                    }
                    dashboardOptions.designerSettings = {
                        widgetsPanel: {
                            hideExistingWidgets: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? false : this.embedOptions.dashboardSettings.widgetsPanel.hideExistingWidgets,
                            hideDefaultWidgets: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? false : this.embedOptions.dashboardSettings.widgetsPanel.hideDefaultWidgets,
                            defaultPanelDisplayText: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? "" : this.embedOptions.dashboardSettings.widgetsPanel.defaultPanelDisplayText,
                            existingPanelDisplayText: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? "" : this.embedOptions.dashboardSettings.widgetsPanel.existingPanelDisplayText,
                            defaultPanelSearchPlaceholder: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? "" : this.embedOptions.dashboardSettings.widgetsPanel.defaultPanelSearchPlaceholder,
                            existingPanelSearchPlaceholder: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? "" : this.embedOptions.dashboardSettings.widgetsPanel.existingPanelSearchPlaceholder,
                            existingDashboards: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? [] : this.embedOptions.dashboardSettings.widgetsPanel.existingDashboards,
                            dragAndDropSettings: {
                                rowSpan: (!this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) && !this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings)) ? this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings.rowSpan : null,
                                columnSpan: (!this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) && !this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings)) ? this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings.columnSpan : null,
                                isWidgetMode: (!this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) && !this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings)) ? this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings.isWidgetMode : false,
                            }
                        },
                        dataSourceConfig: {
                            hideDataSourceConfig: this._isNullOrUndefined(this.embedOptions.dashboardSettings.dataSourceConfig) ? false : this.embedOptions.dashboardSettings.dataSourceConfig.hideDataSourceConfig
                        },
                    };
                    dashboardOptions.userSettings = {
                        hidePreviewAs: this._isNullOrUndefined(this.embedOptions.dashboardSettings.showPreviewAs) ? false : !this.embedOptions.dashboardSettings.showPreviewAs
                    };
                }

                if (this.embedOptions.mode == BoldBI.Mode.DataSource) {
                    dashboardOptions.datasourceName = embedResponse.ItemDetail.Name;
                    dashboardOptions.datasource = embedResponse.ItemDetail.Id;
                }

                if (this.isWidgetMode) {
                    dashboardOptions.isPinWidget = this.isWidgetMode;
                    dashboardOptions.widgetId = embedResponse.WidgetId;
                }
                if (this.embedOptions.dashboardSettings.showHeader === false) {
                    dashboardOptions.isHideHeader = true;
                } else {
                    dashboardOptions.isHideHeader = false;
                }

                if (this.isMultiTab) {
                    dashboardOptions.dashboardSettings = {
                        parentId: this.parentDbrdId,
                        isMultiTab: true
                    };
                }

                if (this.embedOptions.dynamicConnection.isEnabled) {
                    dashboardOptions.customIdentity = this.embedOptions.dynamicConnection.identity;
                }

                if (this.embedOptions.autoRefreshSettings.enabled) {
                    dashboardOptions.enableAutoRefresh = true;
                    dashboardOptions.autoRefreshSettings = {
                        intervalSettings: {
                            mode: "Hourly",
                            hourlySchedule: {
                                hours: this.embedOptions.autoRefreshSettings.hourlySchedule.hours,
                                minutes: this.embedOptions.autoRefreshSettings.hourlySchedule.minutes,
                                seconds: this.embedOptions.autoRefreshSettings.hourlySchedule.seconds
                            }
                        }
                    };
                }

                if (window.bbEmbed instanceof Function) {
                    var embedContainer = window.bbEmbed.call(that, "#" + (that.pinboardIds.length > 0 ? (embedContainerId + '_embeddedbi') : that.childContainer.id));
                    var embedChildId;
                    if (embedContainer.length === 0) {
                        embedContainer = window.bbEmbed.call(that, "#" + embedContainerId + '_embeddedbi');
                        embedChildId = embedContainerId + '_embeddedbi';
                    }
                    if (window.BoldBIDashboardDesigner instanceof Function) {
                        var existingDashboardInstance = this._getDashboardInstance(embedChildId);
                        if (existingDashboardInstance != undefined) {
                            existingDashboardInstance.model = Object.assign(existingDashboardInstance.model, dashboardOptions);
                            existingDashboardInstance.redrawDashboard();
                        } else {
                            window.BoldBIDashboardDesigner.call(that, embedContainer, dashboardOptions);
                        }
                    } else {
                        this._throwError("BoldBIDashboardDesigner is not defined");
                    }
                } else {
                    this._throwError("bbEmbed is not defined");
                }
                this._removeElementsClass(embedContainerId, ".preloader-wrap", "viewer-blue-loader");
            }
        }
    }

    _renderPinboard(itemDetail) {
        var widgetContainer = bbEmbed('<div id="server-app-container" style="background: #f9f9f9; overflow: hidden !important;min-height: 600px; width:' + this.embedOptions.width + ';"><div id="content-area" class="clearfix col-xs-12 e-waitingpopup e-js" style="padding: 0;padding-bottom: 30px"><div id="homepage-page-container"><div id="homepage-header" style="display:' + (this.embedOptions.pinboardSettings.enablePinboardHeader ? "block" : "none") + '"><div id="element-container"><div id="homepage-menu" style="margin-top: 5px"><span id="homepage-list-container" style="font-size: 15px;width: 165px;line-height: 18px;padding: 25px;">' + this.embedOptions.pinboardName + '</span></div><div id="options-container"><div id="pinboard-fullscreen" class="server-banner-icon e-dashboard-banner-icon bbi-dbrd-designer-hoverable su su-maximize-1 e-icon-dbrd-theme" data-tooltip="Fullscreen" data-name="fullscreen" data-event="true" style="font-size: 14px;display: block;float: left;margin: 8px 15px 0 7px; cursor: pointer"></div><div id="divider"></div><div id="layout-container"><div id="layout" class="dropdown-toggle" data-toggle="dropdown">Edit Layout</div><div class="dropdown-menu" id="layout-items" role="menu"><span class="su su-single-column" id="1"></span><span class="su su-two-column" id="11"></span><span class="su su-small-big-column" id="12"></span><span class="su su-big-small-column" id="21"></span><span class="su su-three-column" id="111"></span></div></div></div></div></div><div id="widget-container" data-homepage-id="" data-current-layout="" data-virtual-homepage="" style="margin-bottom: 30px"></div></div></div></div>');
        bbEmbed('#' + this.embedOptions.embedContainerId).append(widgetContainer);
        this._createPinboardDom(itemDetail);
        this._renderItem(itemDetail);
        this._removeElementsClass(this.embedOptions.embedContainerId, ".preloader-wrap", "viewer-blue-loader");
        var that = this;
        bbEmbed(document).on("click", ".unpin-widget", function (e) {
            e.preventDefault();
            var unpinWidgetInstance = bbEmbed('#' + bbEmbed(e.target).parents('li').find('.pinWidget').attr('id') + '_embeddedbi').data('BoldBIDashboardDesigner');
            var clientFnc = window[that.embedOptions.onUnpin];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, unpinWidgetInstance);
            }
            if (that.embedOptions.onUnpin instanceof Function) {
                that.embedOptions.onUnpin.call(that, unpinWidgetInstance);
            }
            that.column = parseInt(bbEmbed(this).closest("ul").attr("data-column-id"));
            that.position = bbEmbed(this).parents('li').index() + 1;
            that._unPinItem(that.column, that.position, event);
        });

        bbEmbed(document).on("click", "#pinboard-fullscreen", function (e) {
            var embedElement = bbEmbed('#server-app-container')[0];
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                bbEmbed('#server-app-container').removeAttr('style');
                bbEmbed('#server-app-container').attr('style', 'background-color: #f9f9f9; overflow: auto !important');
                if (embedElement.requestFullscreen) {
                    embedElement.requestFullscreen();
                } else if (embedElement.msRequestFullscreen) {
                    embedElement.msRequestFullscreen();
                } else if (embedElement.mozRequestFullScreen) {
                    embedElement.mozRequestFullScreen();
                } else if (embedElement.webkitRequestFullscreen) {
                    embedElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                } else {
                    if ("ActiveXObject" in window) {
                        var wscript = new ActiveXObject("Wscript.shell");
                        wscript.SendKeys("{F11}");
                        setTimeout(function () {
                            if ((screen.availHeight || screen.height - 30) <= window.innerHeight) {
                                bbEmbed("#pinboard-fullscreen").removeClass("su-maximize-1").addClass("su-minimize").attr("data-tooltip", "Exit Fullscreen");
                            } else {
                                bbEmbed("#pinboard-fullscreen").addClass("su-maximize-1").removeClass("su-minimize").attr("data-tooltip", "Fullscreen");
                            }
                        }, 400);
                    }
                }
            } else {
                bbEmbed('#server-app-container').attr('style', 'background-color: #f9f9f9; height:' + bbEmbed("#content-area").height() + 'px;overflow: hidden !important;min-height: 600px; width:' + that.embedOptions.width + '');
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        });

        bbEmbed(document).on("click", "#layout-items span", function () {
            var clientFnc = window[that.embedOptions.onLayoutChange];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, bbEmbed("#widget-container"));
            }
            if (that.embedOptions.onLayoutChange instanceof Function) {
                that.embedOptions.onLayoutChange.call(that, bbEmbed("#widget-container"));
            }
            var currentLayout = bbEmbed("#widget-container").attr("data-current-layout");
            bbEmbed("#widget-container").attr("data-current-layout", bbEmbed(this).attr("id"));
            bbEmbed("#layout-items span").removeClass("active");
            bbEmbed(this).addClass("active");
            switch (bbEmbed(this).attr("id")) {
                case "1":
                    if (currentLayout != "1") {
                        that.changeLayout(1);
                        if (currentLayout == "111") {
                            that.appendListItem(1, 2);
                        }
                        else if (currentLayout == "11" || currentLayout == "12" || currentLayout == "21") {
                            that.appendListItem(1, 1);
                        }
                        that._setLayout(1);
                    }
                    break;
                case "11":
                    if (currentLayout != "11") {
                        that.changeLayout(11);
                        if (currentLayout == "111") {
                            that.appendListItem(2, 1);
                        }
                        else if (currentLayout == "1") {
                            that.createEmptyList(2, 2);
                        }
                        that._setLayout(11);
                    }
                    break;
                case "12":
                    if (currentLayout != "12") {
                        that.changeLayout(12);
                        if (currentLayout == "111") {
                            that.appendListItem(2, 1);
                        }
                        else if (currentLayout == "1") {
                            that.createEmptyList(2, 2);
                        }
                        that._setLayout(12);
                    }
                    break;
                case "21":
                    if (currentLayout != "21") {
                        that.changeLayout(21);
                        if (currentLayout == "111") {
                            that.appendListItem(2, 1);
                        }
                        else if (currentLayout == "1") {
                            that.createEmptyList(2, 2);
                        }
                        that._setLayout(21);
                    }
                    break;
                case "111":
                    if (currentLayout != "111") {
                        that.changeLayout(111);
                        if (currentLayout == "1") {
                            that.createEmptyList(2, 3);
                        }
                        else if (currentLayout == "11" || currentLayout == "12" || currentLayout == "21") {
                            that.createEmptyList(3, 3);
                        }
                        that._setLayout(111);
                    }
                    break;
            }
        });
        bbEmbed.map(that.pinboardDetails, function (value) {
            that.isWidgetMode = true;
            that.widgetName = value.WidgetId;
            that.isDashboardViewMode = false;
            that.dashboardViewName = "";
            var response = {
                Apistatus: true,
                Data: JSON.parse(value),
                Status: true
            }
            that._renderDashboard(response);
        });
    }

    createEmptyList(from, to) {
        for (var i = from; i <= to; i++) {
            bbEmbed("#widget-container").append("<ul id='column-" + i + "' data-column-id='" + i + "' data-child-count='0'><li class='empty click-container'><div class='empty-content empty-homepage'><span class='drag-widget'>Drag your widgets here to customize layout</span></div></li></ul>");
        }
    }

    appendListItem(appendTo, count) {
        for (var i = appendTo + 1; i <= appendTo + count; i++) {
            if (bbEmbed("#column-" + i + " li:not(.empty)").length > 0) {
                bbEmbed("#column-" + appendTo + " li.empty").remove();
            }
            bbEmbed("#column-" + appendTo).append(bbEmbed("#column-" + i + " li:not(.empty)"));
            bbEmbed("#column-" + i).remove();
        }
    }

    changeLayout(layout) {
        var that = this;
        that.homepageItemId = bbEmbed("#widget-container").attr("data-homepage-id");
        that.isVirtualHomepage = bbEmbed("#widget-container").attr("data-virtual-homepage");
        if (that.homepageItemId === "" && isVirtualHomepage === "true") {
            that.homepageItemId = saveVirtualHomepage();
            bbEmbed("#initial-message").hide();
        }
        var embedQuerString = "embed_nonce=" + this._uuidv4Generartor() +
            "&homepageId=" + that.homepageItemId +
            "&layout=" + layout +
            "&embed_mode=" + this.embedOptions.mode +
            "&embed_timestamp=" + Math.round((new Date()).getTime() / 1000) +
            "&embed_expirationtime=" + this.embedOptions.expirationTime;
        if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
            var data = {
                embedQuerString: encodeURI(embedQuerString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper("POST", this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._changeLayoutSuccess);
        }
        else {
            var data = {
                'homepageId': that.homepageItemId,
                'layout': layout
            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: that.dashboardServerApiUrl + "/embed/get-details",
                headers: {
                    'Authorization': "Bearer " + that.accessToken
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: bbEmbed.proxy(that._changeLayoutSuccess, that)
            });
        }
    }

    _changeLayoutSuccess(result) {
        if (result.Status && this.homepageItemId !== "" && this.isVirtualHomepage === "true") {
            this.afterVirtualHomepageSave(this.homepageItemId);
        }
        else if (!result.Status) {
            this._throwError("Change layout failure due to" + result.Message);
        }
    }

    _createPinboardDom(itemDetail) {
        var that = this;
        if (itemDetail.ColumnInfo) {
            bbEmbed('#widget-container').attr("data-homepage-id", itemDetail.Id).attr("data-current-layout", itemDetail.ColumnInfo.Layout).attr("data-item-type", itemDetail.ItemType).attr("data-virtual-homepage", itemDetail.IsVirtualHomepage);
            if (itemDetail.ItemType.toLowerCase() === "widget") {
                var column = itemDetail.ColumnInfo.Column;
                bbEmbed.each(column, function (i) {
                    bbEmbed('#widget-container').append('<ul id=column-' + (i + 1) + ' class="widget-list" data-column-id=' + (i + 1) + '></ul>');
                    if (column[i].Item.length > 0) {
                        bbEmbed.each(column[i].Item, function (j) {
                            var item = column[i].Item[j].Id == null ? '/bi/' + that.siteIdentifier + '/widgets/widgets' : '/bi/' + that.siteIdentifier + '/dashboards';
                            var itemName = column[i].Item[j].Name;
                            var widgetType = column[i].Item[j].WidgetType;
                            var height = 0;
                            if (widgetType != null && (widgetType.includes("Card") || widgetType.includes("Image"))) {
                                height = 250;
                            }
                            else {
                                height = 400;
                            }
                            var queryString = column[i].Item[j].QueryString != null ? column[i].Item[j].QueryString : "";
                            var href = column[i].Item[j].TabId == null ? (item + '/' + column[i].Item[j].ItemId + '/' + (column[i].Item[j].Id != null ? (column[i].Item[j].CategoryName + '/') : "") + column[i].Item[j].ItemName + (queryString != "" ? '?' + queryString : queryString)) : (item + '/' + column[i].Item[j].ItemId + '/' + (column[i].Item[j].Id != null ? (column[i].Item[j].CategoryName + '/') : "") + column[i].Item[j].ItemName + '?tab=' + column[i].Item[j].TabId + (queryString != "" ? '&' + queryString : queryString));
                            var styleAttr = j !== 0 ? 'style="width:100%;height:100%;"' : '';
                            if (column[i].Item[j].ItemExtension.toLowerCase() !== ".sydj") {
                                bbEmbed('#column-' + (i + 1)).append('<li class="list-item" ' + styleAttr + '><div class="widget" id=widget_' + (i + 1) + '_' + (j + 1) + ' data-dashboardurl="' + href + '" style="height:100%;width:100%;"></div></li>');
                            }
                            else {
                                var deleteIconDiv = that.embedOptions.pinboardSettings.enableUnpinWidget ? '<div id="widget-icons"><i class="items unpin-widget su su-delete" data-toggle="tooltip" data-original-title="Unpin Widget"  style="color: black;" /></div>' : '';
                                bbEmbed('#column-' + (i + 1)).append('<li class="list-item" ' + styleAttr + '><div class="widget" id=widget_' + (i + 1) + '_' + (j + 1) + ' data-dashboardurl="' + href + '" style="height: ' + height + 'px;width:100%;background:#fff;"><div class="widget-sortable" style="width:100%;float:left;display:block;height:0px"><div style="height:100%;width:100%;cursor:move;"><div id="item-name">' + itemName + '</div>' + deleteIconDiv + '</div></div></div></li>');
                            }

                        });
                    }
                    else {
                        bbEmbed('#column-' + (i + 1)).append("<li class='empty click-container'><div class='empty-content empty-homepage'><span class='drag-widget'>Drag your widgets here to customize layout</span></div></li>");
                    }
                });
                var listItems = bbEmbed("li.list-item a");
                for (var t = 0; t < listItems.length; t++) {
                    bbEmbed("li.list-item a").eq(t).attr("href", bbEmbed("li.list-item a").eq(t).attr("data-url"));
                }
            }
            else if (itemDetail.ItemType.toLowerCase() === "dashboard") {
                bbEmbed("#add-item, #layout-container, #divider").hide();
                bbEmbed('#widget-container').append('<ul id="column-1" class="dashboard-column col-lg-12 col-md-12 col-sm-12 col-xs-12" data-column-id="1"><li class="dashboard-list"><div class="dashboard" id="dashboard_1_1" style="height:100%;width:100%"></div></li></ul>');
            }
        } else {
            this._throwError('Pinboard Details not found', this.embedOptions.embedContainerId);
        }
    }

    _checkEmptyHomepage() {
        var length = 0;
        var isEmptyHomepage = false;
        bbEmbed("#widget-container ul").each(function (i) {
            length = bbEmbed("#column-" + (i + 1) + " li:not('.empty')").length;
            isEmptyHomepage = length > 0 ? false : true;
            return length > 0 ? false : true;
        });
        return isEmptyHomepage;
    }

    _setLayout(layout) {
        var itemType = bbEmbed("#widget-container").attr("data-item-type").toLowerCase();
        bbEmbed("#layout-items").find("span#" + layout).addClass("active");
        switch (layout) {
            case 1:
                bbEmbed("#column-1").removeClass().addClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
                break;
            case 11:
                bbEmbed("#column-1,#column-2").removeClass().addClass("col-lg-6 col-md-6 col-sm-6 col-xs-6");
                break;
            case 12:
                bbEmbed("#column-1").removeClass().addClass("col-lg-4 col-md-4 col-sm-4 col-xs-4");
                bbEmbed("#column-2").removeClass().addClass("col-lg-8 col-md-8 col-sm-8 col-xs-8");
                break;
            case 21:
                bbEmbed("#column-1").removeClass().addClass("col-lg-8 col-md-8 col-sm-8 col-xs-8");
                bbEmbed("#column-2").removeClass().addClass("col-lg-4 col-md-4 col-sm-4 col-xs-4");
                break;
            case 111:
                bbEmbed("#column-1,#column-2,#column-3").removeClass().addClass("col-lg-4 col-md-4 col-sm-4 col-xs-4");
                break;
        }
        var isEmptyHomepage = this._checkEmptyHomepage();
        if (isEmptyHomepage) {
            if (!window.IsMobile) {
                bbEmbed("#widget-container ul li.empty .empty-content").find(".drag-widget").hide();
                bbEmbed("#widget-container ul li.empty .empty-content").removeClass("non-empty-homepage").addClass("empty-homepage");
            }
            else {
                bbEmbed("#widget-container ul li.empty .empty-content").removeClass("non-empty-homepage").addClass("mobile-empty-homepage");
                bbEmbed("#widget-container ul li.empty .empty-content").find(".drag-widget").text(window.Server.App.LocalizationContent.HomepageMobileMessage).show();
                bbEmbed("#widget-container ul li.empty").css("border", "none");
            }
        }
        if (itemType != "dashboard") {
            var that = this;
            this.enableSorting();
            this.setListMinimumHeight();
            bbEmbed('.pinBoardDbrd').each(function () {
                var dbrdInstance = that._getDashboardInstance(this.id);
                var clientFnc = window[that.embedOptions.onResize];
                if (clientFnc instanceof Function) {
                    clientFnc.call(that, dbrdInstance);
                }
                if (that.embedOptions.onResize instanceof Function) {
                    that.embedOptions.onResize.call(that, dbrdInstance);
                }
                dbrdInstance.resizeDashboard();
            });
        }
    }

    setListMinimumHeight() {
        var tempArr = [];
        bbEmbed('#widget-container > ul').each(function (i) {
            var tempVar = 0;
            bbEmbed(this).find("li").each(function (j) {
                tempVar = tempVar + bbEmbed(this).innerHeight() + 20;
            });
            tempArr[i] = tempVar;
        });
        var minimumHeight = Math.max.apply(Math, tempArr) > 400 ? Math.max.apply(Math, tempArr) : 440;
        bbEmbed('#widget-container > ul').css("min-height", minimumHeight);
        bbEmbed("#server-app-container").height(bbEmbed("#content-area").height());
    }

    enableSorting() {
        var that = this;
        var isSyncfusionIdentifier = false;
        bbEmbed("#column-1, #column-2, #column-3").sortable({
            connectWith: "ul",
            placeholder: "placeholder",
            handle: ".bbi-dbrd-control-header:not(.bbi-dbrd-control-menu-icon)",
            cancel: ".empty, .bbi-dbrd-control-menu-icon",
            containment: "#" + that.embedOptions.embedContainerId,
            cursor: "move",
            tolerance: "pointer",
            scroll: true,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            update: function (event, ui) {
                that.toColumn = bbEmbed(event.target).data("column-id");
                that.toPosition = ui.item.index() + 1;
            },
            start: function (event, ui) {
                bbEmbed("li.placeholder").append("<div class='placeholder-text' style='color: dimgray; font-size: 20px;padding-top: 10px;text-align: center;'>Drag your widgets here to customize layout</div>");
                bbEmbed("li.placeholder").css({ 'height': ui.item.height().toString() + "px", 'background-color': '#eeeeee', 'border': 'dashed lightgray' });
                bbEmbed('#widget-container ul li.empty').remove();
                that.fromColumn = bbEmbed(event.target).data("column-id");
                that.fromPosition = ui.item.index() + 1;
                that.toColumn = bbEmbed(event.target).data("column-id");
                that.toPosition = ui.item.index() + 1;
                var dragPinWidgetInstance = bbEmbed('#' + ui.item.find('.pinWidget').attr('id') + '_embeddedbi').data('BoldBIDashboardDesigner');
                var clientFnc = window[that.embedOptions.onDrag];
                if (clientFnc instanceof Function) {
                    clientFnc.call(this, dragPinWidgetInstance);
                }
                if (that.embedOptions.onDrag instanceof Function) {
                    that.embedOptions.onDrag.call(that, dragPinWidgetInstance);
                }
            },
            stop: function (event, ui) {
                that.showEmptyList();
                var clientFnc = window[that.embedOptions.onDrop];
                var dropPinWidgetInstance = bbEmbed('#' + ui.item.find('.pinWidget').attr('id') + '_embeddedbi').data('BoldBIDashboardDesigner');
                if (clientFnc instanceof Function) {
                    clientFnc.call(this, dropPinWidgetInstance);
                }
                if (that.embedOptions.onDrop instanceof Function) {
                    that.embedOptions.onDrop.call(that, dropPinWidgetInstance);
                }
                if (!(that.fromColumn === that.toColumn && that.fromPosition === that.toPosition)) {
                    if (that.fromColumn !== that.toColumn) {
                        bbEmbed('#' + ui.item.find('.pinWidget').attr('id') + '_embeddedbi').data("BoldBIDashboardDesigner").resizeDashboard();
                    }
                    that.dragAndDrop(that.fromColumn, that.toColumn, that.fromPosition, that.toPosition, ui);
                }
                that.setListMinimumHeight();
            }
        });
        bbEmbed("#column-1, #column-2, #column-3").disableSelection();
    }

    showEmptyList() {
        bbEmbed("#widget-container ul").each(function (i) {
            if (bbEmbed("#column-" + (i + 1) + " li").length < 1) {
                bbEmbed('#column-' + (i + 1)).append("<li class='empty click-container'><div class='empty-content empty-homepage'><span class='drag-widget'>Drag your widgets here to customize layout</span></div></li>");
            }
        });
    }

    dragAndDrop(fromColumn, toColumn, fromPosition, toPosition, ui) {
        var that = this;
        var homepageItemId = bbEmbed("#widget-container").attr("data-homepage-id");
        var from = { Column: fromColumn, Position: fromPosition };
        var to = { Column: toColumn, Position: toPosition };
        var embedQuerString = "embed_nonce=" + this._uuidv4Generartor() +
            "&homepageId=" + homepageItemId +
            "&moveFrom=" + JSON.stringify(from) +
            "&moveTo=" + JSON.stringify(to) +
            "&embed_mode=" + this.embedOptions.mode +
            "&embed_timestamp=" + Math.round((new Date()).getTime() / 1000) +
            "&embed_expirationtime=" + this.embedOptions.expirationTime;
        if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
            var data = {
                embedQuerString: encodeURI(embedQuerString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper("POST", this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._dragAndDropSuccess);
        }
        else {
            var data = {
                'homepageId': homepageItemId,
                'moveFrom': JSON.stringify(from),
                'moveTo': JSON.stringify(to)
            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: that.dashboardServerApiUrl + "/embed/get-details",
                data: JSON.stringify(data),
                headers: {
                    'Authorization': "Bearer " + that.accessToken
                },
                contentType: 'application/json',
                success: bbEmbed.proxy(that._dragAndDropSuccess, that)
            });
        }
    }

    _unPinItem(column, position, event) {
        var that = this;
        var homepageItemId = bbEmbed("#widget-container").attr("data-homepage-id");
        var unpinPosition = { Column: column, Position: position };
        var embedQuerString = "embed_nonce=" + this._uuidv4Generartor() +
            "&homepageId=" + homepageItemId +
            "&unpinPosition=" + JSON.stringify(unpinPosition) +
            "&isUnpin=" + true +
            "&embed_mode=" + this.embedOptions.mode +
            "&embed_timestamp=" + Math.round((new Date()).getTime() / 1000) +
            "&embed_expirationtime=" + this.embedOptions.expirationTime;
        if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
            var data = {
                embedQuerString: encodeURI(embedQuerString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper("POST", this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._unPinSuccess);
        }
        else {
            var data = {
                'homepageId': homepageItemId,
                'unpinPosition': JSON.stringify(unpinPosition),
                'isUnpin': true
            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: that.dashboardServerApiUrl + "/embed/get-details",
                headers: {
                    'Authorization': "Bearer " + that.accessToken
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: bbEmbed.proxy(that._unPinSuccess, that)
            });
        }
    }

    _unPinSuccess(result) {
        if (result.Status) {
            bbEmbed("#column-" + this.column + " li:eq(" + (this.position - 1) + ")").remove();
            this.showEmptyList();
            var isEmptyHomepage = this.checkEmptyHomepage();
            if (isEmptyHomepage) {
                bbEmbed("#widget-container ul li.empty .empty-content").find(".drag-widget").hide();
                bbEmbed("#widget-container ul li.empty .empty-content").removeClass("non-empty-homepage").addClass("empty-homepage");
            }
            this.setListMinimumHeight();
        }
    }

    checkEmptyHomepage() {
        var length = 0;
        var isEmptyHomepage = false;
        bbEmbed("#widget-container ul").each(function (i) {
            length = bbEmbed("#column-" + (i + 1) + " li:not('.empty')").length;
            isEmptyHomepage = length > 0 ? false : true;
            return length > 0 ? false : true;
        });
        return isEmptyHomepage;
    }

    _dragAndDropSuccess(result) {
        if (!result.Status) {
            this._throwError("Drag and drop failure due to" + result.Message);
        }
    }

    _renderItem(itemDetail) {
        var that = this;
        var isEmptyHomepage = this._checkEmptyHomepage();
        if (isEmptyHomepage) {
            bbEmbed("#widget-container ul li.empty .empty-content").find(".drag-widget").hide();
            bbEmbed("#widget-container ul li.empty .empty-content").removeClass("non-empty-homepage").addClass("empty-homepage");
        }

        bbEmbed("#widget-container").hide();
        if (itemDetail.ItemType.toLowerCase() === "widget") {
            this._setLayout(itemDetail.ColumnInfo.Layout, true);
            var column = itemDetail.ColumnInfo.Column;
            bbEmbed.each(column, function (i) {
                if (column[i].Item.length > 0) {
                    bbEmbed.each(column[i].Item, function (j) {
                        if (column[i].Item[j].ItemExtension.toLowerCase() !== ".sydj") {
                            bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).ejDashboardViewer({
                                accessToken: accessToken,
                                serviceUrl: dashboardServiceUrl,
                                serverUrl: dashboardServerUrl,
                                _enableHyperLinkOnErrorMessage: false,
                                cdnFilePath: isUseCdn ? cdnLink + "/scripts/viewer" : "",
                                dashboardPath: column[i].Item[j].Path,
                                _itemId: column[i].Item[j].ItemId,
                                reportName: "",
                                reportDescription: "",
                                enableExport: true,
                                enablePrint: false,
                                actionBegin: function (args) {
                                    if (args.eventType === "beforeNavigate") {
                                        hasWidgetLink = true;
                                    }
                                },
                                localeSettings: {
                                    resourcePath: ""
                                },
                                enableWidgetMode: column[i].Item[j].Id == null ? false : true,
                                filterParameters: column[i].Item[j].QueryString,
                                showTab: column[i].Item[j].TabId == null ? true : false,
                                widgetModeSettings: {
                                    name: "",
                                    id: column[i].Item[j].Id == null ? "" : column[i].Item[j].Id,
                                    title: column[i].Item[j].Name
                                },
                                _selectedTabGuid: column[i].Item[j].TabId == null ? "" : column[i].Item[j].TabId,
                                afterWidgetRender: bbEmbed.proxy(function (args, param) {
                                    if (param.data.controlType.toLowerCase() == "card") {
                                        bbEmbed("#widget_" + (i + 1) + "_" + (j + 1) + " .e-control-heading span").hasClass("e-control-title") == false ? bbEmbed("#widget_" + (i + 1) + "_" + (j + 1) + " .e-control-heading").text(args[i].Item[j].Name) : "";
                                    }
                                    if (args[i].Item[j].IsActive && !args[i].Item[j].IsHavingPermission) {
                                        bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).find(".bbi-dbrd-control").remove();
                                        bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).find(".bbi-dbrd-control-container").append("<div class='no-permission'><span class='message'>" + window.Server.App.LocalizationContent.PermissionDeniedWidget + "</span></div>");
                                    }
                                    else if (!args[i].Item[j].IsActive && !args[i].Item[j].IsHavingPermission) {
                                        bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).find(".bbi-dbrd-control").remove();
                                        bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).find(".bbi-dbrd-control-container").append("<div class='no-permission'><span class='message'>" + window.Server.App.LocalizationContent.DeletedWidgetMessage + "</span></div>");
                                    }
                                    if (args[i].Item[j].IsActive && args[i].Item[j].IsHavingPermission && args[i].Item[j].QueryString != null) {
                                        var currentElement = bbEmbed("#widget_" + (i + 1) + "_" + (j + 1));
                                        currentElement.find("#filter-info").parent().append('<div class="filter-overview"><span id="heading">' + window.Server.App.LocalizationContent.AppliedFilters + '</span><div id="outer-div"><div id="scroller-content"><div id="applied-filters-container"></div></div></div></div>');
                                        var parsedQueryFilter = currentElement.data("ejDashboardViewer")._parseParameterQuery(args[i].Item[j].QueryString);
                                        var filtersDom = buildAppliedFiltersDom(parsedQueryFilter);
                                        currentElement.find(".filter-overview #applied-filters-container").append(filtersDom);
                                        if (currentElement.find(".filter-overview #applied-filters-container").height() > 180) {
                                            currentElement.find(".filter-overview #scroller-content").BoldBIDashboardScroller({
                                                height: 180,
                                                width: 248,
                                                scrollerSize: 9
                                            });
                                        }
                                        currentElement.find(".filter-overview").addClass("display-none");
                                    }
                                }, this, column),
                                beforeWidgetIconRendered: bbEmbed.proxy(function (args, event) {
                                    if (event.widgetInformation.Name.toLowerCase() != "widget not configured") {
                                        if (!window.IsMobile) {
                                            if (event.widgetInformation.Name.toLowerCase() != "card") {
                                                bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).data("ejDashboardViewer").model.size.height = "400px";
                                            }
                                            else {
                                                bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).data("ejDashboardViewer").model.size.height = "250px";
                                            }
                                        }
                                        else {
                                            bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).data("ejDashboardViewer").model.size.height = "250px";
                                        }
                                    }
                                    else {
                                        bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).data("ejDashboardViewer").model.size.height = "200px";
                                        bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).find(".bbi-dbrd-control-container").append("<div class='no-permission'><span class='message'>" + window.Server.App.LocalizationContent.DeletedWidgetMessage + "</span></div>");
                                    }
                                    if (event.iconsinformation.length > 0 && event.iconsinformation[0].classname == "bbi-dbrd-link-enable") {
                                        event.iconsinformation[0].margintop = "1px";
                                    }

                                    if (!window.IsMobile) {
                                        event.iconsinformation.unshift({ "classname": "su su-delete unpin", "name": "Unpin Widget", "datatooltip": window.Server.App.LocalizationContent.UnpinWidget, "marginright": "-18px", "margintop": "4px" });
                                    }

                                    var addWidgetIcons = args[i].Item[j].IsActive && args[i].Item[j].IsHavingPermission && event.widgetInformation.Name.toLowerCase() != "widget not configured";
                                    if (addWidgetIcons) {
                                        event.iconsinformation.unshift({ "classname": "su su-maximize unpin", "name": "Maximize Widget", "datatooltip": window.Server.App.LocalizationContent.MaximizeWidget, "marginright": "-18px", "margintop": "4px" });
                                        event.iconsinformation.unshift({ "classname": "su su-open-link-newtab unpin", "name": "Go to Dashboard", "datatooltip": window.Server.App.LocalizationContent.GotoDashboard, "marginright": "-18px", "margintop": "4px" });
                                    }

                                    if (addWidgetIcons && args[i].Item[j].QueryString != null) {
                                        event.iconsinformation.unshift({ "id": "filter-info", "classname": "su su-info unpin", "name": "Applied Filters", "datatooltip": window.Server.App.LocalizationContent.ViewAppliedFilters, "margintop": "4px", "marginright": "0px" });
                                    }

                                    bbEmbed("#widget-container").show();
                                    hideWaitingPopup("content-area");
                                    var data = bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).ejDashboardViewer();
                                    data.resize();
                                }, this, column),
                                dashboardCreated: function (args) {
                                    var href = bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).attr("data-dashboardurl");
                                    bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).find(".su-open-link-newtab").wrap(bbEmbed('<a class="redirect" href="' + href + '" target="_blank">'));
                                },
                                onMenuIconClick: function (information) {
                                    if (typeof (information.name) != "undefined" && information.name.toLowerCase() == "unpin widget") {
                                        ShowWaitingProgress("#content-area", "show");
                                        var column = information.target.parents("ul").data("column-id");
                                        var position = information.target.parents("li").index() + 1;
                                        unPinItem(column, position, information.event);
                                    }
                                    else if (typeof (information.name) != "undefined" && information.name.toLowerCase() == "maximize widget") {
                                        parent.bbEmbed("#maximize").removeClass("display-none");
                                        var currentElement = information.target.parents(".widget").attr("id");
                                        var control = parent.bbEmbed("#" + currentElement).data('ejDashboardViewer').getWidgetDataByReportName(information.widgetId);
                                        var header = information.headertext;
                                        maximizeWidget(header, control, information.event, information.serviceUrl, information.dashboardPath);
                                    }
                                    else if (typeof (information.name) != "undefined" && information.name.toLowerCase() == "applied filters") {
                                        var currentElement = bbEmbed(information.event.target).parent().find(".filter-overview");
                                        currentElement.toggleClass("display-none");
                                        bbEmbed(".filter-overview").not(currentElement).addClass("display-none");
                                        information.event.preventDefault();
                                    }
                                }
                            });
                        }
                        else {
                            var height = 0;
                            var widgetType = column[i].Item[j].WidgetType;
                            if (widgetType != null && (widgetType.includes("Card") || widgetType.includes("Image"))) {
                                height = 225;
                            }
                            else {
                                height = 375;
                            }

                            var pinboardIdName = that.embedOptions.embedContainerId + '_pinBoard_' + (i + 1) + '_' + (j + 1);
                            bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).append('<div class="pinWidget" style="height:calc(100% - 5px);width:93%;overflow: hidden !important;" id="' + pinboardIdName + '"><div id="' + pinboardIdName + '_embeddedbi" class="pinBoardDbrd"></div ></div>');
                            that.pinBoardRendered = false;
                            that.pinboardIds.push({ 'widgetId': column[i].Item[j].Id, 'pinboardContainerId': pinboardIdName });
                            that.pinboardDetails[column[i].Item[j].Id] = column[i].Item[j].WidgetDetails;

                            if (column[i].Item[j].IsActive && !column[i].Item[j].IsHavingPermission) {
                                bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).find("iframe").remove();
                                bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).append("<div class='no-permission'><span class='message'>" + window.Server.App.LocalizationContent.PermissionDeniedWidget + "</span></div>");
                            }
                            else if (!column[i].Item[j].IsActive && !column[i].Item[j].IsHavingPermission) {
                                bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).find("iframe").remove();
                                bbEmbed("#widget_" + (i + 1) + "_" + (j + 1)).append("<div class='no-permission'><span class='message'>" + window.Server.App.LocalizationContent.DeletedWidgetMessage + "</span></div>");
                            }
                        }
                    });

                    bbEmbed("#widget-container").show();
                }
                else {
                    bbEmbed("#widget-container").show();
                }
            });
            this.enableSorting();
            this.setListMinimumHeight();
        }
        else if (itemDetail.ItemType.toLowerCase() == "dashboard") {
            var column = itemDetail.ColumnInfo.Column;
            bbEmbed("#dashboard_1_1").css({ "height": bbEmbed(window).height() - bbEmbed("#header-area").outerHeight() - bbEmbed("#base-footer-div").outerHeight() - bbEmbed("#homepage-header").outerHeight() - 30, "width": bbEmbed("#content-area").width() - 10 });
            if (column[0].Item[0].IsActive && column[0].Item[0].IsHavingPermission && column[0].Item[0].ItemExtension.toLowerCase() !== ".sydj") {
                bbEmbed("#dashboard_1_1").ejDashboardViewer({
                    accessToken: accessToken,
                    serviceUrl: dashboardServiceUrl,
                    serverUrl: dashboardServerUrl,
                    _enableHyperLinkOnErrorMessage: false,
                    cdnFilePath: isUseCdn ? cdnLink + "/scripts/viewer" : "",
                    dashboardPath: itemDetail.ColumnInfo.Column[0].Item[0].Path,
                    _itemId: itemDetail.ColumnInfo.Column[0].Item[0].ItemId,
                    reportName: "",
                    reportDescription: "",
                    enableExport: true,
                    enablePrint: false,
                    showGetLinkIcon: false,
                    localeSettings: {
                        resourcePath: ""
                    },
                    interactionSettings: {
                        allowHistoryMaintenance: false,
                        handleHistoryEvent: false
                    },
                    enableWidgetMode: false,
                    filterParameters: itemDetail.ColumnInfo.Column[0].Item[0].QueryString,
                    showTab: itemDetail.ColumnInfo.Column[0].Item[0].TabId != null ? false : true,
                    _selectedTabGuid: itemDetail.ColumnInfo.Column[0].Item[0].TabId != null ? itemDetail.ColumnInfo.Column[0].Item[0].TabId : "",
                    beforeControlMenuOpen: function (e) {
                        e.menuData.splice(1, 1);
                    },
                    onTabSelectionFailure: "OnFailtoLoadChildDashboard",
                    beforeContextMenuOpen: function (e) {
                        var removeByAttr = function (arr, attr, value) {
                            var i = arr.length;
                            while (i--) {
                                if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {
                                    arr.splice(i, 1);
                                }
                            }
                            return arr;
                        }
                        removeByAttr(e.menuData, "text", "Export");
                    }
                });
            }
            else {
                if (!column[0].Item[0].IsActive) {
                    bbEmbed("#dashboard_1_1").append("<div class='no-permission'><span class='message'>" + window.Server.App.LocalizationContent.DeletedDashboardMessage + "</span></div>");
                }
                else if (column[0].Item[0].IsActive && !column[0].Item[0].IsHavingPermission) {
                    bbEmbed("#dashboard_1_1").append("<div class='no-permission'><span class='message'>" + window.Server.App.LocalizationContent.PermissionDeniedDashboard + "</span></div>");
                }
                else if (column[0].Item[0].IsActive && column[0].Item[0].IsHavingPermission && column[0].Item[0].ItemExtension.toLowerCase() === ".sydj") {
                    bbEmbed("#dashboard_1_1").append("<div class='no-permission'><span class='message'>" + window.Server.App.LocalizationContent.SydjDashboardMessage + "</span></div>");
                }
            }
            bbEmbed("#widget-container").show();
            hideWaitingPopup("content-area");
        }
    }

    addWidgetToPinboard(dashboardId, widgetId, widgetName) {
        if (!this._isEmptyOrSpaces(dashboardId) && !this._isEmptyOrSpaces(widgetId)) {
            var homepageItemId = bbEmbed("#widget-container").attr("data-homepage-id");
            var that = this;
            var embedQuerString = "embed_nonce=" + this._uuidv4Generartor() +
                "&homepageId=" + homepageItemId +
                "&isPinUpdate=" + true +
                "&pinWidgetId=" + widgetId +
                "&pinDashbooardId=" + dashboardId +
                "&pinWidgetName=" + (this._isNullOrUndefined(widgetName) ? null : widgetName) +
                "&pinboard_name=" + this.embedOptions.pinboardName +
                "&embed_mode=" + this.embedOptions.mode +
                "&embed_timestamp=" + Math.round((new Date()).getTime() / 1000) +
                "&embed_expirationtime=" + this.embedOptions.expirationTime;
            var data = {
                embedQuerString: encodeURI(embedQuerString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper("POST", this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, function (result) {
                if (result.Status) {
                    that._addWidgetInPinboard(result.Data);
                }
                else if (!result.Status) {
                    that._throwError("Can't able to add the widget due to " + result.Message);
                }
            });
        } else {
            this._throwError("Please provide the valid dashboard id and widget id");
        }
    }

    _addWidgetInPinboard(itemDetails) {
        var ulElement = bbEmbed('#widget-container').find('ul:first');
        if (bbEmbed('#widget-container').find('ul:first li').length === 1 && bbEmbed('#widget-container').find('ul:first li').hasClass('empty')) {
            bbEmbed('#widget-container').find('ul:first li').remove();
        }
        var ulElementLilength = bbEmbed('#widget-container').find('ul:first li').length;
        var column = itemDetails.ColumnInfo.Column[0];
        var item = column.Item[0].Id == null ? '/bi/' + this.siteIdentifier + '/widgets/widgets' : '/bi/' + this.siteIdentifier + '/dashboards';
        var itemName = column.Item[0].Name;
        var widgetType = column.Item[0].WidgetType;
        var height = 0;
        if (widgetType != null && (widgetType.includes("Card") || widgetType.includes("Image"))) {
            height = 250;
        }
        else {
            height = 400;
        }
        var queryString = column.Item[0].QueryString != null ? column.Item[0].QueryString : "";
        var href = column.Item[0].TabId == null ? (item + '/' + column.Item[0].ItemId + '/' + (column.Item[0].Id != null ? (column.Item[0].CategoryName + '/') : "") + column.Item[0].ItemName + (queryString != "" ? '?' + queryString : queryString)) : (item + '/' + column.Item[0].ItemId + '/' + (column.Item[0].Id != null ? (column.Item[0].CategoryName + '/') : "") + column.Item[0].ItemName + '?tab=' + column.Item[0].TabId + (queryString != "" ? '&' + queryString : queryString));
        var styleAttr = ulElementLilength !== 0 ? 'style="width:100%;height:100%;"' : '';
        var deleteIconDiv = this.embedOptions.pinboardSettings.enableUnpinWidget ? '<div id="widget-icons"><i class="items unpin-widget su su-delete" data-toggle="tooltip" data-original-title="Unpin Widget"  style="color: black;" /></div>' : '';
        bbEmbed(ulElement).prepend('<li class="list-item"><div class="widget" id=widget_' + 1 + '_' + (ulElementLilength + 1) + ' data-dashboardurl="' + href + '" style="height: ' + height + 'px;width:100%;background:#fff;"><div class="widget-sortable" style="width:100%;float:left;display:block;height:0px"><div style="height:100%;width:100%;cursor:move;"><div id="item-name">' + itemName + '</div>' + deleteIconDiv + '</div></div></div></li>');
        var pinWidgetHeight = 0;
        if (widgetType != null && (widgetType.includes("Card") || widgetType.includes("Image"))) {
            pinWidgetHeight = 225;
        }
        else {
            pinWidgetHeight = 375;
        }

        var pinboardIdName = this.embedOptions.embedContainerId + '_pinBoard_1' + '_' + (ulElementLilength + 1);
        bbEmbed("#widget_1" + "_" + (ulElementLilength + 1)).append('<div class="pinWidget" style="height:calc(100% - 5px);width:93%;overflow: hidden !important;" id="' + pinboardIdName + '"><div id="' + pinboardIdName + '_embeddedbi" class="pinBoardDbrd"></div ></div>');
        this.pinBoardRendered = false;
        this.pinboardIds.push({ 'widgetId': column.Item[0].Id, 'pinboardContainerId': pinboardIdName });
        this.loadDashboardWidget(column.Item[0].Id, column.Item[0].ItemId);
        this.enableSorting();
        this.setListMinimumHeight();
        this._removeElementsClass(this.embedOptions.embedContainerId, ".preloader-wrap", "viewer-blue-loader");
    }

    _renderMultiTabDashboard(embedResponse) {
        if (this.embedOptions.mode === BoldBI.Mode.View && !this.isWidgetMode) {
            this.isMultiTab = true;
            var that = this;
            var tabIndex = 0;
            var embedContainer = bbEmbed('#' + that.embedOptions.embedContainerId);
            embedContainer.html('');
            var containerName = that.embedOptions.embedContainerId + "_multi_tab_dashboard";
            var multiTabContainer = bbEmbed("<div id=" + containerName + " class='multitab-dbrd' style='height: 100% !important'></div>");
            embedContainer.append(multiTabContainer);
            var tabHeader = bbEmbed('<div class="e-tab-header"></div>');
            var tabContent = bbEmbed('<div class="e-content"></div>');
            bbEmbed.map(embedResponse, function (value, index) {
                var dashboardItemDetail = JSON.parse(value.ItemDetail);
                that.parentDbrdId = value.parentId;
                var dashboardId = dashboardItemDetail.Id.replaceAll("-", "");
                that.dashboardDetails[dashboardId] = value;
                if (!that._isNullOrUndefined(that.embedOptions.dashboardSettings.dashboardName) && typeof that.embedOptions.dashboardSettings.dashboardName != 'string') {
                    bbEmbed.map(that.embedOptions.dashboardSettings.dashboardName, function (val, index) {
                        dashboardItemDetail.Name = (dashboardId == val.dashboardId.replaceAll("-", "")) ? that._isEmptyOrSpaces(val.dashboardName) ? dashboardItemDetail.Name : val.dashboardName : dashboardItemDetail.Name;
                    });
                }
                tabHeader.append(bbEmbed('<div>' + dashboardItemDetail.Name + '</div>'));
                var multitabDbrdEle = bbEmbed('<div style="height:100%;width:100%;overflow: hidden !important;" id="multi_' + dashboardId + '"></div>');
                tabContent.append(bbEmbed('<div></div>').append(multitabDbrdEle.append('<div id="multi_' + dashboardId + '_embeddedbi" class="bbembed-multitab-dbrd"></div>')));
            });
            multiTabContainer.append(tabHeader).append(tabContent);
            tabInstance = new ejdashboard.navigations.Tab({
                enableAnimation: false,
                selected: bbEmbed.proxy(this._tabSelected, this)
            });
            tabInstance.appendTo("#" + containerName);
            bbEmbed('.e-tab-header .e-toolbar-item .e-tab-text').css({ 'display': 'inline-block', 'width': '150px', 'white-space': 'nowrap', 'overflow': 'hidden', 'text-overflow': 'ellipsis', 'color': '#000', 'text-transform': 'none' });
            bbEmbed("<style type='text/css'> .embed-multi-tab-indicator{ background: #0565ff !important; border-radius: 4px; display: block !important; height: 3px !important;}</style>").appendTo("head");
            bbEmbed('.e-control.e-tab .e-tab-header .e-indicator').addClass('embed-multi-tab-indicator');
            bbEmbed.map(bbEmbed('.e-tab-header .e-toolbar-item .e-tab-text'), function (value, index) {
                bbEmbed(value).attr('title', bbEmbed(value).text());
                bbEmbed(bbEmbed('.e-content').find('#e-content-multi_tab_dashboard_' + index).children()).css({ "height": "100%", "width": "100%", "overflow": "hidden", "display": "block", "position": "absolute", "left": bbEmbed(".e-content.e-lib.e-touch").width() * index });
            });
            bbEmbed('.multitab-dbrd .e-content').attr('style', 'height: 100% !important');
            bbEmbed.map(bbEmbed('.multitab-dbrd .e-content').children(), function (value, index) {
                bbEmbed(value).css({ "height": "100%" });
            });
            bbEmbed(embedContainer).css({ 'overflow-x': 'hidden', 'overflow-y': 'hidden', 'width': that.embedOptions.width });
            bbEmbed("#" + containerName).css({ 'width': bbEmbed(".e-content.e-lib.e-touch").width(), 'height': this.embedOptions.height });
            bbEmbed(".e-tab-header")[0].ej2_instances[0].refreshOverflow();
            tabInstance.resizeContext();
            bbEmbed.map(embedResponse, function (value, index) {
                if (index === 0) {
                    var response = {
                        Apistatus: true,
                        Data: value,
                        Status: true
                    }
                    that._renderDashboard(response);
                }
            });
        } else {
            if (this.isWidgetMode) {
                var ele = document.getElementById(this.embedOptions.embedContainerId);
                if (BoldBI._instance.has(ele, "embeddedBoldBI")) {
                    BoldBI._instance.remove(ele, "embeddedBoldBI")
                }
                this._throwError("Can't able to render the widget mode in Multitab dashboard");
            } else {
                var ele = document.getElementById(this.embedOptions.embedContainerId);
                if (BoldBI._instance.has(ele, "embeddedBoldBI")) {
                    BoldBI._instance.remove(ele, "embeddedBoldBI")
                }
                this._throwError("Can't able to render the Multitab dashboard in design mode");
            }
        }
    }

    _tabSelected(args) {
        var containerName = bbEmbed('.multitab-dbrd').attr('id');
        for (var i = 0; i < bbEmbed("#" + containerName + " .e-toolbar-item").length; i++) {
            bbEmbed('.e-content').find("#e-content-" + containerName + "_" + i).attr('style', 'display:block !important');
            if (bbEmbed("#" + containerName + " .e-toolbar-item.e-active").attr("aria-controls") === "e-content-" + containerName + "_" + i) {
                bbEmbed(bbEmbed('.e-content').find("#e-content-" + containerName + "_" + i).children()).css({ "display": "block", "position": "absolute", "left": 0 });
                var dbrdInstance = bbEmbed('#' + bbEmbed(bbEmbed('.e-content').find("#e-content-" + containerName + "_" + i).children()).children().attr('id')).data('BoldBIDashboardDesigner');
                if (dbrdInstance === null || dbrdInstance === undefined) {
                    var dashboardId = bbEmbed('.e-content').find("#e-content-" + containerName + "_" + i).children().attr('id').split('_')[1];
                    var response = {
                        Apistatus: true,
                        Data: this.dashboardDetails[dashboardId],
                        Status: true
                    }
                    this._renderDashboard(response);
                }
            } else {
                bbEmbed(bbEmbed('.e-content').find("#e-content-" + containerName + "_" + i).children()).css({ "display": "block", "position": "absolute", "left": bbEmbed(".e-content.e-lib.e-touch").width() * (i + 1) });
            }
        }

    }

    _isDependencyLoaded(that, dashboardId) {
        if (window.bbEmbed instanceof Function &&
            window.BoldBIDashboard instanceof Object && !that._isNullOrUndefined(window.BoldBIDashboard) &&
            window.BoldBIDashboard.Designer instanceof Object &&
            window.BoldBIDashboardDesigner instanceof Function &&
            !that._isEmptyOrSpaces(that.designerRootUrl) &&
            window.Designer instanceof Object) {
            if (!that.IsDependencyLoaded) {
                that.IsDependencyLoaded = true;
            }
            that._getAuthorizationToken(dashboardId);

        } else {
            setTimeout(that._isDependencyLoaded, 500, that);
        }
    };

    _getDashboardInstance(embedChildId) {
        var ele = window.bbEmbed.call(this, "#" + (embedChildId ? embedChildId : this.childContainer.id))[0];
        if (ele) {
            return window.bbEmbed.data.call(this, ele, "BoldBIDashboardDesigner");
        }
    };

    _onBoldBIDashboardInstaceActionBegin(arg, embedContainerId) {

        if (this.embedOptions.theme != BoldBI.Theme.Light && this.isMultiTab && parseInt(bbEmbed(".e-content .e-active").attr('id').split('_')[bbEmbed(".e-content .e-active").attr('id').split('_').length - 1]) === 0) {
            var dashboadInstance = bbEmbed(".e-content .e-active").find(".bbembed-multitab-dbrd").data('BoldBIDashboardDesigner');
            this.setDefaultTheme(dashboadInstance.modules.themeHelper.getBannerBackground(), dashboadInstance.modules.themeHelper.getBannerTextColor(), dashboadInstance.modules.themeHelper.getBannerIconColor());
        }

        if (typeof (arg) != "undefined") {
            switch (arg.eventType) {
                case "renderLayout":
                    this._removeElementsClass(embedContainerId, ".preloader-wrap", "viewer-blue-loader");
                    break;
                default:
                    break;
            }
        }

        var serverFnc = window[this.actionBeginFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        var clientFnc = window[this.embedOptions.actionBegin];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.actionBegin instanceof Function) {
            this.embedOptions.actionBegin.call(this, arg);
        }

        if (arg.eventType == 'dataSourceSaveAction') {
            this._onBoldBIBeforeDatasourceSaveAction(arg);
        }

        if (arg.eventType == 'filterInteraction') {
            var clientFnc = window[this.embedOptions.beforeFilterApply];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.beforeFilterApply instanceof Function) {
                this.embedOptions.beforeFilterApply.call(this, arg);
            }
        }

        if (arg.eventType == 'publishAsAction') {
            var clientFnc = window[this.embedOptions.dashboardSettings.beforePublishAs];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.dashboardSettings.beforePublishAs instanceof Function) {
                this.embedOptions.dashboardSettings.beforePublishAs.call(this, arg);
            }
        }

        if (arg.eventType == 'dataSourceToolbarButtonRender') {
            this._onBoldBIBeforeDataSourceToolbarButtonRenders(arg);
        }
    };

    _onBoldBIDashboardInstaceActionComplete(arg) {

        var that = this;
        var serverFnc = window[this.actionCompleteFn];
        if (!this._isNullOrUndefined(arg.data)) {
            if (arg.data.event == "createConnection") {
                this.embedOptions.datasourceId = arg.data.source.data;
                this.embedOptions.mode = BoldBI.Mode.DataSource;
                this.isNewConnection = true;
                if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
                    this._getAuthorizationToken();
                }
                else {
                    var data = {
                        'embed_datasource_id': that.embedOptions.datasourceId,
                        'embed_mode': that.embedOptions.mode
                    };
                    bbEmbed.ajax({
                        async: false,
                        type: 'POST',
                        url: that.dashboardServerApiUrl + "/embed/get-details",
                        headers: {
                            'Authorization': "Bearer " + that.accessToken
                        },
                        data: JSON.stringify(data),
                        contentType: 'application/json',
                        success: bbEmbed.proxy(that._renderDashboard, that)
                    });
                }
            }

            if (arg.data.event == "cancelDataSource") {
                this.embedOptions.mode = BoldBI.Mode.Connection;
                if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
                    this._getAuthorizationToken();
                }
                else {
                    var data = {
                        'embed_mode': that.embedOptions.mode
                    };
                    bbEmbed.ajax({
                        async: false,
                        type: 'POST',
                        url: that.dashboardServerApiUrl + "/embed/get-details",
                        headers: {
                            'Authorization': "Bearer " + that.accessToken
                        },
                        data: JSON.stringify(data),
                        contentType: 'application/json',
                        success: bbEmbed.proxy(that._renderDashboard, that)
                    });
                }
            }
        }

        if (this.pinboardIds.length > 0 && arg.eventType == "renderWidget" && arg.source.element.find('.bbi-dbrd-control-header .bbi-dbrd-control-title-wrapper').length == 0) {
            arg.source.element.parents('.widget').find('#widget-icons').css('margin-top', '8px');
            if (arg.source.element.attr('data-name').toLowerCase().includes('card')) {
                arg.source.element.find('.bbi-dbrd-control').css('top', '20px');
            }
        }

        if (arg.eventType == "interactionCompleted") {
            var data = {
                filterData: this._getFilterData(arg.source.data.encryptedData),
                data: arg
            };
            var clientFnc = window[this.embedOptions.dashboardSettings.onInteraction];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, data);
            }
            if (this.embedOptions.dashboardSettings.onInteraction instanceof Function) {
                this.embedOptions.dashboardSettings.onInteraction.call(this, arg);
            }

        } else {

            if (serverFnc instanceof Function) {
                serverFnc.call(this, arg);
            }

            var clientFnc = window[this.embedOptions.actionComplete];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.actionComplete instanceof Function) {
                this.embedOptions.actionComplete.call(this, arg);
            }
        }

        if (arg.eventType == "filterInteraction") {
            var clientFnc = window[this.embedOptions.afterFilterApply];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.afterFilterApply instanceof Function) {
                this.embedOptions.afterFilterApply.call(this, arg);
            }
        }

        if (arg.eventType == 'dataSourceSaveAction' && JSON.parse(arg.schema.schema).length > 0) {
            this._onBoldBIAfterDatasourceSaveAction(arg);
        }
    };

    _onBoldBIBeforeDataSourceToolbarButtonRenders(arg) {
        for (var i = arg.buttons.length - 1; i >= 0; i--) {
            if (!this.isNewConnection) {
                if (bbEmbed(arg.buttons[i]).text().toLowerCase() != 'save') {
                    arg.buttons.splice(i, 1);
                }
            } else {
                if (bbEmbed(arg.buttons[i]).text().toLowerCase().indexOf('dashboard') >= 0) {
                    arg.buttons.splice(i, 1);
                }
            }
        }
        this.isNewConnection = false;
    };

    _onBoldBIBeforeDatasourceSaveAction(arg) {
        var clientFnc = window[this.embedOptions.beforeDatasourceSave];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.beforeDatasourceSave instanceof Function) {
            this.embedOptions.beforeDatasourceSave.call(this, arg);
        }
    }

    _onBoldBIAfterDatasourceSaveAction(arg) {
        var clientFnc = window[this.embedOptions.afterDatasourceSave];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.afterDatasourceSave instanceof Function) {
            this.embedOptions.afterDatasourceSave.call(this, arg);
        }
    }

    _onBoldBIDashboardBeforeBannerIconRender(arg) {
        if (this.embedOptions.dashboardSettings.showMoreOption === false || (this.embedOptions.dashboardSettings.showRefresh === false && this.embedOptions.dashboardSettings.showExport === false)) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, "groupName", "Option");
        }

        var filterOverviewOption = arg.iconsinformation.shift();
        if (this.embedOptions.dashboardSettings.showDashboardParameter === false) {
            for (var i = filterOverviewOption.items.length - 1; i >= 0; i--) {
                if (!this._isNullOrUndefined(filterOverviewOption.items[i]) && filterOverviewOption.items[i][0].dataset['name'] == 'dashboardparameters') {
                    filterOverviewOption.items.splice(i, 1);
                }
            }
        }
        var serverFnc = window[this.beforeBannerIconRenderFn];
        if (this.embedOptions.dashboardSettings.enableFullScreen) {
            var commentAndView = {
                groupId: "dashboard-comment-view",
                groupName: "Dashboard Comment & Views",
                items: [
                    this._createBannerIcon("<div/>", "dashboard-refresh", "e-dbrd-banner-refresh", "Refresh", "refreshdashboard", true, false, { "display": "none", "font-size": "14px" }),
                    this._createBannerIcon("<div/>", "dashboard-fullscreen", "su su-maximize-1", "Fullscreen", "fullscreen", true, false, { "font-size": "14px" })
                ]
            };
            arg.iconsinformation.unshift(commentAndView);
        }
        if (filterOverviewOption.items.length > 0) {
            arg.iconsinformation.unshift(filterOverviewOption);
        }
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }
        var clientFnc = window[this.embedOptions.dashboardSettings.beforeIconRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.beforeIconRender instanceof Function) {
            this.embedOptions.dashboardSettings.beforeIconRender.call(this, arg);
        }
        bbEmbed("<style type='text/css'> #dashboard-refresh { display: none !important} </style>").appendTo("head");
    };

    _createBannerIcon(tag, id, className, label, dataName, dataEvent, showText, css, href) {
        if (showText) {
            return bbEmbed(tag, {
                id: id,
                html: bbEmbed('<span/>', { "class": "icon-with-label", text: label, css: { "font-family": "Roboto", "padding": "10px" } }),
                "class": "server-banner-icon e-dashboard-banner-icon bbi-dbrd-designer-hoverable " + className,
                "data-name": dataName,
                "data-event": dataEvent,
                "href": href,
                css: css
            });
        } else {
            return bbEmbed(tag, {
                id: id,
                "class": "server-banner-icon e-dashboard-banner-icon bbi-dbrd-designer-hoverable " + className,
                "data-tooltip": label,
                "data-name": dataName,
                "data-event": dataEvent,
                css: css
            });
        }
    }

    _onBoldBIDashboardBeforeOtherOptionContextMenuRender(arg) {

        if (this.embedOptions.dashboardSettings.showRefresh === false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, "groupName", "refresh");
        }
        if (this.embedOptions.dashboardSettings.showExport === false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, "groupName", "export");
        }

        arg.iconsinformation.forEach(function (x, y) {
            if (x.groupName === "export") {

                if (this.embedOptions.exportSettings.showExcel === false) {
                    x.items[0].child = this._arraySlice(x.items[0].child, "id", "excel");
                }
                if (this.embedOptions.exportSettings.showImage === false) {
                    x.items[0].child = this._arraySlice(x.items[0].child, "id", "image");
                }
                if (this.embedOptions.exportSettings.showPDF === false) {
                    x.items[0].child = this._arraySlice(x.items[0].child, "id", "pdf");
                }
                if (this.embedOptions.exportSettings.showCSV === false) {
                    x.items[0].child = this._arraySlice(x.items[0].child, "id", "csv");
                }
            }
        }.bind(this));

        var serverFnc = window[this.beforeOtherRenderFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        var clientFnc = window[this.embedOptions.beforeContextMenuRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.beforeContextMenuRender instanceof Function) {
            this.embedOptions.beforeContextMenuRender.call(this, arg);
        }
    };

    _onBoldBIDashboardSaveFilter(arg) {
        var serverFnc = window[this.onSaveFilterFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        var clientFnc = window[this.embedOptions.filterSettings.onSaveFilter];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.filterSettings.onSaveFilter instanceof Function) {
            this.embedOptions.filterSettings.onSaveFilter.call(this, arg);
        }
    };

    _onBoldBIDashboardSaveAsFilter(arg) {
        var serverFnc = window[this.onSaveAsFilterFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        var clientFnc = window[this.embedOptions.filterSettings.onSaveAsFilter];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.filterSettings.onSaveAsFilter instanceof Function) {
            this.embedOptions.filterSettings.onSaveAsFilter.call(this, arg);
        }
    };

    _onBoldBIDashboardOpenViewSection(arg) {
        var serverFnc = window[this.onViewSavedFiltersFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        var clientFnc = window[this.embedOptions.filterSettings.onViewSavedFilters];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.filterSettings.onViewSavedFilters instanceof Function) {
            this.embedOptions.filterSettings.onViewSavedFilters.call(this, arg);
        }
    };

    _onBoldBIDashboardBannerIconClick(arg) {
        if (arg.name.toLowerCase() === 'fullscreen') {
            this._switchFullscreenMode(arg);
        }
        if (arg.name.toLowerCase() === 'refreshdashboard') {
            if (this.isMultiTab) {
                var dashboardInstance = bbEmbed(".e-content .e-active").find(".bbembed-multitab-dbrd").data('BoldBIDashboardDesigner');
                dashboardInstance.updateDashboard();
            }
            else {
                var dashboardInstance = this._getDashboardInstance();
                dashboardInstance.updateDashboard();
            }
        }
        var serverFnc = window[this.onBannerIconClickFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        var clientFnc = window[this.embedOptions.dashboardSettings.onIconClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.onIconClick instanceof Function) {
            this.embedOptions.dashboardSettings.onIconClick.call(this, arg);
        }

        if (typeof (arg.name) != "undefined" && arg.name.toLowerCase() == "theming") {
            var embedId;
            if (this.isMultiTab) {
                this.multiTabTheme = arg.selectedTheme;
                var dashboadInstance = bbEmbed(".e-content .e-active").find(".bbembed-multitab-dbrd").data('BoldBIDashboardDesigner');
                dashboadInstance.applyDashboardTheme(arg.selectedTheme);
                this.setDefaultTheme(dashboadInstance.modules.themeHelper.getBannerBackground(), dashboadInstance.modules.themeHelper.getBannerTextColor(), dashboadInstance.modules.themeHelper.getBannerIconColor());
                var dashboardContainer = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
                for (var i = 0; i < dashboardContainer.length; i++) {
                    if (bbEmbed(bbEmbed(".e-content .e-active").find(".bbembed-multitab-dbrd")).attr('id') != bbEmbed(dashboardContainer[i]).attr('id')) {
                        var embedId = bbEmbed(dashboardContainer[i]).attr('id');
                        var dashboardViewerInstance = this._getDashboardInstance(embedId);
                        if (dashboardViewerInstance != undefined) {
                            dashboardViewerInstance.applyDashboardTheme(arg.selectedTheme);
                        }
                    }
                }
            } else {
                var dashboardViewerInstance = this._getDashboardInstance(embedId);
                dashboardViewerInstance.applyDashboardTheme(arg.selectedTheme);
            }
        }

    };

    setDefaultTheme(bgColor, textColor, iconColor) {
        bbEmbed(".e-tab-header.e-control.e-toolbar.e-lib.e-keyboard").css("color", iconColor);
        bbEmbed(".e-toolbar-item .e-tab-text").css("color", textColor);
        bbEmbed(".e-toolbar-item.e-active .e-tab-text").addClass("active-font-color");
        bbEmbed(".multitab-dbrd").css("background", bgColor);
        bbEmbed(".e-items.e-toolbar-items.e-lib.e-hscroll.e-control.e-touch .e-nav-arrow").css("color", iconColor);
    }

    _switchFullscreenMode(arg) {
        var embedElement = document.getElementById(arg.target.parent().attr('id').split('_embeddedbi')[0]);
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (embedElement.requestFullscreen) {
                embedElement.requestFullscreen();
            } else if (embedElement.msRequestFullscreen) {
                embedElement.msRequestFullscreen();
            } else if (embedElement.mozRequestFullScreen) {
                embedElement.mozRequestFullScreen();
            } else if (embedElement.webkitRequestFullscreen) {
                embedElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else {
                if ("ActiveXObject" in window) {
                    var wscript = new ActiveXObject("Wscript.shell");
                    wscript.SendKeys("{F11}");
                    setTimeout(function () {
                        if ((screen.availHeight || screen.height - 30) <= window.innerHeight) {
                            bbEmbed("<style id='embed-fullscreen' type='text/css'> .hide-dashboard-icons #dashboard-refresh {  display: block !important; } .hide-dashboard-icons ul.options, .hide-dashboard-icons .su-pin, .hide-dashboard-icons .su-edit, .hide-dashboard-icons .bbi-dbrd-banner-link, .hide-dashboard-icons .bbi-dbrd-banner-menu, .hide-dashboard-icons .bbi-dbrd-banner-text-icon, .hide-dashboard-icons .bbi-dbrd-banner-widget-withoutcomments, .hide-dashboard-icons .bbi-dbrd-banner-widget-withcomments, .hide-dashboard-icons .bbi-dbrd-control-menu, .hide-dashboard-icons .e-dashboard-banner-menu, .hide-dashboard-icons .e-dashboard-banner-link, .hide-dashboard-icons .su-icon, .hide-dashboard-icons .bbi-dbrd-control-menu-icon, .hide-dashboard-icons .e-dashboard-banner-icon:not(#dashboard-fullscreen):not(#dashboard-refresh):not(#pinboard-fullscreen), .hide-dashboard-icons .e-dashboard-banner-description, .hide-dashboard-icons .server-banner-icon + .e-banner-verticalsplitline, .hide-dashboard-icons #dashboard_bannerPanel div a + .e-banner-verticalsplitline, .hide-dashboard-icons .bbi-dashboard-widget-menu { display: none !important; } .hide-dashboard-icons #dashboard { width: 100% !important; } .hide-embed-dashboard-icons .bbi-dbrd-banner-link, .hide-embed-dashboard-icons .bbi-dbrd-banner-menu, .hide-embed-dashboard-icons .bbi-dbrd-banner-text-icon, .hide-embed-dashboard-icons .bbi-dbrd-banner-widget-withoutcomments, .hide-embed-dashboard-icons .bbi-dbrd-banner-widget-withcomments, .hide-embed-dashboard-icons .bbi-dbrd-control-menu, .hide-embed-dashboard-icons .e-dashboard-banner-menu, .hide-embed-dashboard-icons .e-dashboard-banner-link, .hide-embed-dashboard-icons .e-dashboard-banner-icon:not(#dashboard-fullscreen):not(#dashboard-refresh):not(#dashboard_otheroption):not(#dashboard-view):not(#dashboard-comment):not(#dashboard_dashboardmenu), .hide-embed-dashboard-icons #dashboard_bannerPanel div a + .e-banner-verticalsplitline, .hide-embed-dashboard-icons .saved-view .su.cursor-pointer { display: none !important; } </style>").appendTo("head");
                            bbEmbed("body").addClass("hide-dashboard-icons");
                            bbEmbed("#dashboard-fullscreen").removeClass("su-maximize-1").addClass("su-minimize").attr("data-tooltip", "Exit Fullscreen");
                        } else {
                            bbEmbed('#embed-fullscreen').remove();
                            bbEmbed("body").removeClass("hide-dashboard-icons");
                            if (this.isMultiTab) {
                                bbEmbed('#' + this.embedOptions.embedContainerId).find('.multitab-dbrd').css('width', this.embedOptions.width);
                            }
                            bbEmbed("#dashboard-fullscreen").addClass("su-maximize-1").removeClass("su-minimize").attr("data-tooltip", "Fullscreen");
                        }
                    }, 400);
                }
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

    _fullscreenExitHandler(boldBIObj) {
        if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            bbEmbed('#embed-fullscreen').remove();
            bbEmbed("body").removeClass("hide-dashboard-icons");
            if (boldBIObj.isMultiTab) {
                bbEmbed('#' + boldBIObj.embedOptions.embedContainerId).find('.multitab-dbrd').css('width', '100%');
                bbEmbed('#' + boldBIObj.embedOptions.embedContainerId).find('.multitab-dbrd .e-content .e-active').find("#dashboard-fullscreen").addClass("su-maximize-1").removeClass("su-minimize").attr("data-tooltip", "Fullscreen");
            } else {
                bbEmbed("#dashboard-fullscreen").addClass("su-maximize-1").removeClass("su-minimize").attr("data-tooltip", "Fullscreen");
            }
            bbEmbed("#pinboard-fullscreen").addClass("su-maximize-1").removeClass("su-minimize").attr("data-tooltip", "Fullscreen");
            bbEmbed('#server-app-container').attr('style', 'background-color: #f9f9f9; height:' + bbEmbed("#content-area").height() + 'px;overflow: hidden !important;min-height: 600px; width:' + boldBIObj.embedOptions.width + '');
        } else {
            var displayVal = (this.embedOptions.dashboardSettings.showRefresh != false) ? "block !important" : "none !important";
            bbEmbed("<style id='embed-fullscreen' type='text/css'> .hide-dashboard-icons #dashboard-refresh { display:" + displayVal + "; } .hide-dashboard-icons ul.options, .hide-dashboard-icons .su-pin, .hide-dashboard-icons .su-edit, .hide-dashboard-icons .bbi-dbrd-banner-link, .hide-dashboard-icons .bbi-dbrd-banner-menu, .hide-dashboard-icons .bbi-dbrd-banner-text-icon, .hide-dashboard-icons .bbi-dbrd-banner-widget-withoutcomments, .hide-dashboard-icons .bbi-dbrd-banner-widget-withcomments, .hide-dashboard-icons .bbi-dbrd-control-menu, .hide-dashboard-icons .e-dashboard-banner-menu, .hide-dashboard-icons .e-dashboard-banner-link, .hide-dashboard-icons .su-icon, .hide-dashboard-icons .bbi-dbrd-control-menu-icon, .hide-dashboard-icons .e-dashboard-banner-icon:not(#dashboard-fullscreen):not(#dashboard-refresh):not(#pinboard-fullscreen), .hide-dashboard-icons .e-dashboard-banner-description, .hide-dashboard-icons .server-banner-icon + .e-banner-verticalsplitline, .hide-dashboard-icons #dashboard_bannerPanel div a + .e-banner-verticalsplitline, .hide-dashboard-icons .bbi-dashboard-widget-menu { display: none !important; } .hide-dashboard-icons #dashboard { width: 100% !important; } .hide-embed-dashboard-icons .bbi-dbrd-banner-link, .hide-embed-dashboard-icons .bbi-dbrd-banner-menu, .hide-embed-dashboard-icons .bbi-dbrd-banner-text-icon, .hide-embed-dashboard-icons .bbi-dbrd-banner-widget-withoutcomments, .hide-embed-dashboard-icons .bbi-dbrd-banner-widget-withcomments, .hide-embed-dashboard-icons .bbi-dbrd-control-menu, .hide-embed-dashboard-icons .e-dashboard-banner-menu, .hide-embed-dashboard-icons .e-dashboard-banner-link, .hide-embed-dashboard-icons .e-dashboard-banner-icon:not(#dashboard-fullscreen):not(#dashboard-refresh):not(#dashboard_otheroption):not(#dashboard-view):not(#dashboard-comment):not(#dashboard_dashboardmenu), .hide-embed-dashboard-icons #dashboard_bannerPanel div a + .e-banner-verticalsplitline, .hide-embed-dashboard-icons .saved-view .su.cursor-pointer { display: none !important; } </style>").appendTo("head");
            bbEmbed("body").addClass("hide-dashboard-icons");
            if (boldBIObj.isMultiTab) {
                bbEmbed('#' + boldBIObj.embedOptions.embedContainerId).find('.multitab-dbrd .e-content .e-active').find("#dashboard-fullscreen").removeClass("su-maximize-1").addClass("su-minimize").attr("data-tooltip", "Exit Fullscreen");
            } else {
                bbEmbed("#dashboard-fullscreen").removeClass("su-maximize-1").addClass("su-minimize").attr("data-tooltip", "Exit Fullscreen");
            }
            bbEmbed("#pinboard-fullscreen").removeClass("su-maximize-1").addClass("su-minimize").attr("data-tooltip", "Exit Fullscreen");
            bbEmbed('#server-app-container').attr('style', 'background-color: #f9f9f9; overflow: auto !important');
        }
    }

    _onBoldBIDashboardBeforeWidgetIconRendered(arg) {
        if (this.embedOptions.widgetSettings.showMaximize === false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, "name", "maximize");
        }
        if (this.embedOptions.widgetSettings.showFilter === false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, "name", "filter");
        }
        if (this.embedOptions.widgetSettings.showExport === false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, "name", "export");
            if (!this._isNullOrUndefined(arg.widgetInformation) &&
                !this._isNullOrUndefined(arg.widgetInformation.widgetJson) &&
                !this._isNullOrUndefined(arg.widgetInformation.widgetJson.ContainerSettings) &&
                (!arg.widgetInformation.widgetJson.ContainerSettings.ViewData || this.pinboardIds.length > 0)) {
                arg.iconsinformation = this._arraySlice(arg.iconsinformation, "name", "menu");
            }
        }
        if (this.embedOptions.widgetSettings.showMoreOption === false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, "name", "menu");
        }
        var serverFnc = window[this.beforeWidgetIconRenderedFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        var clientFnc = window[this.embedOptions.widgetSettings.beforeIconRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.widgetSettings.beforeIconRender instanceof Function) {
            this.embedOptions.widgetSettings.beforeIconRender.call(this, arg);
        }
    };

    _onBoldBIBeforeControlMenuOpen(arg) {
        if (this.embedOptions.widgetSettings.showExport === false || (this.embedOptions.exportSettings.showExcel === false && this.embedOptions.exportSettings.showCSV === false && this.embedOptions.exportSettings.showImage === false && this.embedOptions.exportSettings.showPDF === false)) {
            arg.menuItems = this._arraySlice(arg.menuItems, "id", "export");
        }
        var clientFnc = window[this.embedOptions.widgetSettings.beforeWidgetControlMenuOpen];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.widgetSettings.beforeWidgetControlMenuOpen instanceof Function) {
            this.embedOptions.widgetSettings.beforeWidgetControlMenuOpen.call(this, arg);
        }
    };

    _onBoldBIBeforeDashboardMobileMenuOpen(arg) {
        var clientFnc = window[this.embedOptions.beforeDashboardMobileMenuOpen];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.beforeDashboardMobileMenuOpen instanceof Function) {
            this.embedOptions.beforeDashboardMobileMenuOpen.call(this, arg);
        }
    };

    _onBoldBIAjaxBeforeLoad(arg) {
        var clientFnc = window[this.embedOptions.ajaxBeforeLoad];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.ajaxBeforeLoad instanceof Function) {
            this.embedOptions.ajaxBeforeLoad.call(this, arg);
        }
    };

    _onBoldBIbeforeDesignerToolbarButtonsRendered(arg) {
        var clientFnc = window[this.embedOptions.dashboardSettings.beforeDesignerToolbarButtons];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.beforeDesignerToolbarButtons instanceof Function) {
            this.embedOptions.dashboardSettings.beforeDesignerToolbarButtons.call(this, arg);
        }
    };

    _onBoldBIDashboardWidgetIconClick(arg) {
        var serverFnc = window[this.onWidgetIconClickFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        var clientFnc = window[this.embedOptions.widgetSettings.onIconClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.widgetSettings.onIconClick instanceof Function) {
            this.embedOptions.widgetSettings.onIconClick.call(this, arg);
        }
    };

    _onBoldBIonControlMenuClick(arg) {
        var clientFnc = window[this.embedOptions.widgetSettings.onWidgetControlMenuClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.widgetSettings.onWidgetControlMenuClick instanceof Function) {
            this.embedOptions.widgetSettings.onWidgetControlMenuClick.call(this, arg);
        }
    }

    _onBoldBIDashboardUpdatefavorite(arg) {
        var serverFnc = window[this.onFavoriteStateChangeFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }
        var clientFnc = window[this.embedOptions.dashboardSettings.onFavoriteIconClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.onFavoriteIconClick instanceof Function) {
            this.embedOptions.dashboardSettings.onFavoriteIconClick.call(this, arg);
        }
    };

    _onBoldBIWidgetExportRender(arg) {
        if (this.embedOptions.exportSettings.showExcel === false) {
            arg.iconsinformation = this._arraySlice(arg.exportOptionCollection, "id", "excel");
        }
        if (this.embedOptions.exportSettings.showImage === false) {
            arg.iconsinformation = this._arraySlice(arg.exportOptionCollection, "id", "image");
        }
        if (this.embedOptions.exportSettings.showPDF === false) {
            arg.iconsinformation = this._arraySlice(arg.exportOptionCollection, "id", "pdf");
        }
        if (this.embedOptions.exportSettings.showCSV === false) {
            arg.iconsinformation = this._arraySlice(arg.exportOptionCollection, "id", "csv");
        }
    };

    _onBoldBIBeforeNavigateUrlLinking(arg) {
        var clientFnc = window[this.embedOptions.beforeNavigateUrlLinking];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.beforeNavigateUrlLinking instanceof Function) {
            this.embedOptions.beforeNavigateUrlLinking.call(this, arg);
        }
    };

    _onBoldBIBeforeNavigateToDashboard(arg) {
        var clientFnc = window[this.embedOptions.beforeNavigateToDashboard];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.beforeNavigateToDashboard instanceof Function) {
            this.embedOptions.beforeNavigateToDashboard.call(this, arg);
        }
    };

    _onBoldBIAuthorizionComplete(arg) {
        var clientFnc = window[this.embedOptions.authorizationServer.authorizionComplete];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.authorizationServer.authorizionComplete instanceof Function) {
            this.embedOptions.authorizationServer.authorizionComplete.call(this, arg);
        }
    };

    _showLoader() {
        var loaderStyle = document.createElement('style');
        loaderStyle.innerHTML = '#' + this.embedOptions.embedContainerId + ' .viewer-blue-loader { display: block !important; }	' +
            ' #' + this.embedOptions.embedContainerId + ' .loader-icon { display: block; }' +
            ' #' + this.embedOptions.embedContainerId + ' .loader-icon { left: 0px !important; position: relative; margin: 0px auto; width: 54px; height: 54px; }' +
            ' #' + this.embedOptions.embedContainerId + ' .loader-icon .circular { -webkit-animation: rotate 2s linear infinite; animation: rotate 2s linear infinite; height: 54px; width: 54px; position: relative; }' +
            ' #' + this.embedOptions.embedContainerId + ' .loader-icon .path { stroke-dasharray: 1,200; stroke-dashoffset: 0; -webkit-animation: dash 1.5s ease-in-out infinite; animation: dash 1.5s ease-in-out infinite; stroke: #5592FB; stroke-linecap: square; }' +
            ' @keyframes rotate { 100% { transform: rotate(360deg); } }' +
            ' @-webkit-keyframes rotate { 100% { transform: rotate(360deg); } }' +
            ' @keyframes dash { 0% { stroke-dasharray: 1,200; stroke-dashoffset: 0; } 50% { stroke-dasharray: 89,200; stroke-dashoffset: -35; } 100% { stroke-dasharray: 89,200; stroke-dashoffset: -124; } }' +
            ' @-webkit-keyframes dash { 0% { stroke-dasharray: 1,200; stroke-dashoffset: 0; } 50% { stroke-dasharray: 89,200; stroke-dashoffset: -35; } 100% { stroke-dasharray: 89,200; stroke-dashoffset: -124; } }';

        document.head.appendChild(loaderStyle);

        var loader = "<div class='preloader-wrap viewer-blue-loader' style='display: none; width: " + this.embedOptions.width + ";height: " + this.embedOptions.height + "; top: 0; bottom: 0; z-index : 2;'> <div id='loader_image' align='center' style='position:relative;top:45%;'> <div class='loader-blue loader-icon' id='loader-icon'> <svg class='circular'> <circle class='path' cx='27' cy='27' r='20' fill='none' stroke-width='4' stroke-miterlimit='10'></circle> </svg> </div> </div> </div>";
        this._removeElement("embedded-bi-error");
        document.getElementById(this.embedOptions.embedContainerId).insertAdjacentHTML('afterbegin', loader);
    };

    _getAuthorizationToken(dashboardId) {
        var embedDbrdId = dashboardId ? dashboardId : this.embedOptions.dashboardId;
        var embedQuerString = "embed_nonce=" + this._uuidv4Generartor() +
            "&embed_dashboard_id=" + embedDbrdId +
            "&embed_dashboard_path=" + this.embedOptions.dashboardPath +
            "&pinboard_name=" + (this.pinBoardRendered ? this.embedOptions.pinboardName : '') +
            "&embed_mode=" + this.embedOptions.mode +
            "&embed_timestamp=" + Math.round((new Date()).getTime() / 1000) +
            "&embed_expirationtime=" + this.embedOptions.expirationTime;

        if (this.isWidgetMode) {
            embedQuerString = embedQuerString +
                "&embed_widget_isenabled=" + this.isWidgetMode +
                "&embed_widget_name=" + this.widgetName;
        }

        if (this.isMultiTab) {
            embedQuerString = embedQuerString +
                "&isMultiTab=" + this.isMultiTab;
        }

        if (!this._isEmptyOrSpaces(this.embedOptions.datasourceId)) {
            embedQuerString = embedQuerString +
                "&embed_datasource_id=" + this.embedOptions.datasourceId;
        }
        else if (!this._isEmptyOrSpaces(this.embedOptions.datasourceName)) {
            embedQuerString = embedQuerString +
                "&embed_datasource_name=" + this.embedOptions.datasourceName;
        }

        var data = {
            embedQuerString: encodeURI(embedQuerString),
            dashboardServerApiUrl: this.dashboardServerApiUrl,
        };

        if (this.embedOptions.authorizationServer.url != '') {
            this._xhrRequestHelper("POST", this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._renderDashboard);

        } else {
            this._renderDashboard(this.embedOptions.authorizationServer.data);
        }
        this.pinBoardRendered = true;
    };

    _xhrRequestHelper(type, url, data, headers, callBackFn) {
        var that = this;
        var http = new XMLHttpRequest();

        http.open(type, url, true);
        http.responseType = 'json';
        http.setRequestHeader("Content-type", "application/json");

        for (var key in headers) {
            http.setRequestHeader(key, headers[key]);
        }

        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                callBackFn.call(that, typeof http.response == "object" ? http.response : JSON.parse(http.response));
            }
            else if (http.readyState == 4 && http.status == 404) {
                that._throwError("Server not found");
            }
            else if (http.readyState == 4) {
                that._throwError(http.statusText);
            }
        };

        http.send(JSON.stringify(data));
    };

    _emptyHtml(elementID) {
        document.getElementById(elementID).innerHTML = "";
    };

    _removeElement(id) {
        var elem = document.getElementById(id);
        if (elem !== null)
            elem.parentNode.removeChild(elem);
    };

    _uuidv4Generartor() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    _isEmptyOrSpaces(str) {
        return typeof (str) === "undefined" || str === null || str.match(/^ *$/) !== null;
    };

    _isNullOrUndefined(value) {
        return value === undefined || value === null;
    };

    _validateOptions(options) {
        if (this._isEmptyOrSpaces(options.embedContainerId)) {
            this._throwError("Please provide the valid Embed container Id");
        }
        if (this._isEmptyOrSpaces(options.serverUrl)) {
            this._throwError("Server URL cannot be empty", options.embedContainerId);
        }
        if (!this._isUrl(options.serverUrl)) {
            this._throwError("Please provide a valid Server URL", options.embedContainerId);
        }
        if (!this._isEmptyOrSpaces(options.pinboardName)) {
            return true;
        }
        if (options.mode === BoldBI.Mode.Connection) {
            return true;
        }
        if (this._isEmptyOrSpaces(options.dashboardId) && this._isEmptyOrSpaces(options.dashboardPath) && options.mode !== BoldBI.Mode.Design && this._isEmptyOrSpaces(options.datasourceId) && this._isEmptyOrSpaces(options.datasourceName)) {
            if (options.mode !== BoldBI.Mode.DataSource) {
                this._throwError("Dashboard id or path cannot be empty", options.embedContainerId);
            } else {
                this._throwError("Datasource id or name cannot be empty", options.embedContainerId);
            }
        }
        if (this._isEmptyOrSpaces(options.embedContainerId)) {
            throw "BoldBI Embedded: Embedded DOM id cannot be empty";
        }
        return true;
    };

    _isUrl(str) {
        let url;
        try {
            url = new URL(str);
        } catch (_) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    }

    _throwError(errorMsg, embedContainerId) {
        embedContainerId = this._isEmptyOrSpaces(embedContainerId) ? this.embedOptions.embedContainerId : embedContainerId;
        if (embedContainerId) {
            this._removeElementsClass(embedContainerId, ".preloader-wrap", "viewer-blue-loader");
            var errorMessage = "<div id='embedded-bi-error' style='display:table;height:100%;width:100%;'><div style='display: table-cell;vertical-align: middle;text-align: center;'><div style='display: inline-block;'><img src='" + this.errorImage + "' style='float: left'/><div style='float: left;margin-left: 10px;line-height: 20px;'>BoldBI Embedded: " + errorMsg + "</div></div>";
            document.getElementById(embedContainerId).innerHTML = errorMessage;
        } else {
            alert(errorMsg);
        }
        throw "BoldBI Embedded: " + errorMsg;
    };

    _removeElementsClass(id, childElement, targeClass) {
        var nodeList = [];
        if (this._isEmptyOrSpaces(id)) {
            nodeList = document.querySelector(childElement);
        } else if (this._isEmptyOrSpaces(childElement)) {
            nodeList.push(document.getElementById(id));
        } else {
            nodeList = document.getElementById(id).querySelectorAll(childElement);
        }
        nodeList.forEach(function (element) {
            this._removeClass(element, targeClass);
        }.bind(this));
    };

    _hasClass(el, className) {
        if (el.classList)
            return el.classList.contains(className);
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    };

    _addClass(el, className) {
        if (el.classList)
            el.classList.add(className)
        else if (!this._hasClass(el, className))
            el.className += " " + className;
    };

    _removeClass(el, className) {
        if (el.classList)
            el.classList.remove(className);
        else if (this._hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };

    _arraySlice(arr, key, value) {

        arr.forEach(function (item, index, object) {
            if (item[key] === value) {
                object.splice(index, 1);
            }
        }.bind(this));
        return arr;
    };

    _getFilterData(filterQuery) {
        var processData = [];
        var decryptfilterParam = decodeURI(filterQuery).
            replace(/~&~/g, String.fromCharCode(251) + String.fromCharCode(251)).
            replace(/~=~/g, String.fromCharCode(250) + String.fromCharCode(250)).
            replace(/~[?]~/g, String.fromCharCode(253) + String.fromCharCode(253)).
            replace(/~[/]~/g, String.fromCharCode(254) + String.fromCharCode(254)).
            replace(/&&/g, '&').
            replace(/&/g, '|,|').
            replace(/=/g, '|:|').
            replace(/~,~/g, String.fromCharCode(252) + String.fromCharCode(252));
        var splitFilterParamObj = decryptfilterParam.split('|,|');
        for (var index = 0; index < splitFilterParamObj.length; index++) {
            var splitFilterQuery = splitFilterParamObj[index].split('|:|');
            if (splitFilterQuery.length >= 2 && splitFilterQuery[0].trim().toUpperCase() === 'FILTERQUERY') {
                var filterValue = splitFilterQuery[1];
                var filterData = bbEmbed.parseJSON(filterValue);
                if (filterData !== '' && filterData.length !== 0) {
                    processData = this._lengthensSelectedFilterInfo(filterData);
                    this._unEscapeSelectedFilterDataforURLFilter(processData.masterData);
                }
                continue;
            }

        }
        return this._createFilterCollection(processData.masterData);
    };

    _createFilterCollection(masterdata) {
        if (masterdata) {
            var collection = [];

            masterdata.forEach(function (filter) {
                var columnName = filter.ColumnName;
                var values = [];
                if (filter.InitialDateFilter.DisplayDateFilterList.length > 0) {
                    values = filter.InitialDateFilter.DisplayDateFilterList;
                    if (filter.IsRange)
                        values = [values[0] + " - " + values[1]];
                }
                if (filter.InitialMeasureFilter.Values.length > 0)
                    values = filter.InitialMeasureFilter.Values;
                if (filter.InitialDimensionFilter.Text.length > 0) {
                    values = filter.InitialDimensionFilter.Text;
                    columnName = columnName + " (" + filter.InitialDimensionFilter.DimesnionFilterCondition + ")"
                }
                if (filter.InitialDimensionFilter.Text.length > 0)
                    values = filter.InitialDimensionFilter.Text;
                collection.push({ "ColumnName": columnName, "Values": values });
            }.bind(this));
            return collection;
        }
    };

    _lengthensSelectedFilterInfo(shortenFilterInfoList) {
        var unMinifiedList = [];
        var shortenListLen = shortenFilterInfoList.length;
        for (var index = 0; index < shortenListLen; index++) {
            var minObj = shortenFilterInfoList[index];
            var unMinifyObj = new SelectedFilterValue();
            if (this._hasValue(minObj, shortenEnum.UniqueColumnName)) {
                unMinifyObj[lengthenEnum.UniqueColumnName] = minObj[shortenEnum.UniqueColumnName];
            }
            if (this._hasValue(minObj, shortenEnum.ReportName)) {
                unMinifyObj[lengthenEnum.ReportName] = minObj[shortenEnum.ReportName];
            }
            if (this._hasValue(minObj, shortenEnum.IsStdDateTime)) {
                unMinifyObj[lengthenEnum.IsStdDateTime] = minObj[shortenEnum.IsStdDateTime];
            }
            if (this._hasValue(minObj, shortenEnum.IsRange)) {
                unMinifyObj[lengthenEnum.IsRange] = minObj[shortenEnum.IsRange];
            }
            if (this._hasValue(minObj, shortenEnum.IsGroupBarFilter)) {
                unMinifyObj[lengthenEnum.IsGroupBarFilter] = minObj[shortenEnum.IsGroupBarFilter];
            }
            if (this._hasValue(minObj, shortenEnum.IsMultiSelection)) {
                unMinifyObj[lengthenEnum.IsMultiSelection] = minObj[shortenEnum.IsMultiSelection];
            }
            if (this._hasValue(minObj, shortenEnum.ColumnName)) {
                unMinifyObj[lengthenEnum.ColumnName] = minObj[shortenEnum.ColumnName];
            }
            if (this._hasValue(minObj, shortenEnum.FieldId)) {
                unMinifyObj[lengthenEnum.FieldId] = minObj[shortenEnum.FieldId];
            }
            if (this._hasValue(minObj, shortenEnum.IsPoPWidget)) {
                unMinifyObj[lengthenEnum.IsPoPWidget] = minObj[shortenEnum.IsPoPWidget];
            }
            if (this._hasValue(minObj, shortenEnum.InitialDateFilter)) {
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.DateFilterCondition)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.DateFilterCondition] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.DateFilterCondition];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.DateFilterList)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.DateFilterList] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.DateFilterList];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.DateFilterType)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.DateFilterType] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.DateFilterType];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.DisplayDateFilterList)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.DisplayDateFilterList] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.DisplayDateFilterList];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.DateFormat)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.DateFormat] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.DateFormat];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.SelectedRangeforRelativeFilter)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.SelectedRangeforRelativeFilter] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.SelectedRangeforRelativeFilter];
                }
            }
            if (this._hasValue(minObj, shortenEnum.InitialDimensionFilter)) {
                if (this._hasValue(minObj[shortenEnum.InitialDimensionFilter], shortenEnum.DimesnionFilterCondition)) {
                    unMinifyObj.InitialDimensionFilter[lengthenEnum.DimesnionFilterCondition] =
                        minObj[shortenEnum.InitialDimensionFilter][shortenEnum.DimesnionFilterCondition];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDimensionFilter], shortenEnum.Text)) {
                    unMinifyObj.InitialDimensionFilter[lengthenEnum.Text] = minObj[shortenEnum.InitialDimensionFilter][shortenEnum.Text];
                }
            }
            if (this._hasValue(minObj, shortenEnum.InitialMeasureFilter)) {
                if (this._hasValue(minObj[shortenEnum.InitialMeasureFilter], shortenEnum.MeasureFilterCondition)) {
                    unMinifyObj.InitialMeasureFilter[lengthenEnum.MeasureFilterCondition] =
                        minObj[shortenEnum.InitialMeasureFilter][shortenEnum.MeasureFilterCondition];
                }
                if (this._hasValue(minObj[shortenEnum.InitialMeasureFilter], shortenEnum.Values)) {
                    unMinifyObj.InitialMeasureFilter[lengthenEnum.Values] = minObj[shortenEnum.InitialMeasureFilter][shortenEnum.Values];
                }
            }
            if (this._hasValue(minObj, shortenEnum.PoPFilter)) {
                if (this._hasValue(minObj[shortenEnum.PoPFilter], shortenEnum.DateFieldId)) {
                    unMinifyObj.PoPFilter[lengthenEnum.DateFieldId] = minObj[shortenEnum.PoPFilter][shortenEnum.DateFieldId];
                }
                if (this._hasValue(minObj[shortenEnum.PoPFilter], shortenEnum.PrimaryType)) {
                    unMinifyObj.PoPFilter[lengthenEnum.PrimaryType] = minObj[shortenEnum.PoPFilter][shortenEnum.PrimaryType];
                }
                if (this._hasValue(minObj[shortenEnum.PoPFilter], shortenEnum.SecondaryType)) {
                    unMinifyObj.PoPFilter[lengthenEnum.SecondaryType] = minObj[shortenEnum.PoPFilter][shortenEnum.SecondaryType];
                }
                if (this._hasValue(minObj[shortenEnum.PoPFilter], shortenEnum.PrimaryCustomRange)) {
                    unMinifyObj.PoPFilter[lengthenEnum.PrimaryCustomRange][lengthenEnum.StartRange] = minObj[shortenEnum.PoPFilter][shortenEnum.PrimaryCustomRange][shortenEnum.StartRange];
                    unMinifyObj.PoPFilter[lengthenEnum.PrimaryCustomRange][lengthenEnum.EndRange] = minObj[shortenEnum.PoPFilter][shortenEnum.PrimaryCustomRange][shortenEnum.EndRange];
                }
                if (this._hasValue(minObj[shortenEnum.PoPFilter], shortenEnum.SecondaryCustomRange)) {
                    if (minObj[shortenEnum.PoPFilter][shortenEnum.SecondaryCustomRange].length > 0) {
                        unMinifyObj.PoPFilter[lengthenEnum.SecondaryCustomRange][0][lengthenEnum.StartRange] = minObj[shortenEnum.PoPFilter][shortenEnum.SecondaryCustomRange][0][shortenEnum.StartRange];
                        unMinifyObj.PoPFilter[lengthenEnum.SecondaryCustomRange][0][lengthenEnum.EndRange] = minObj[shortenEnum.PoPFilter][shortenEnum.SecondaryCustomRange][0][shortenEnum.EndRange];
                    }
                }
            }
            if (this._hasValue(unMinifyObj, lengthenEnum.UniqueColumnName) && this._hasValue(unMinifyObj, lengthenEnum.ReportName)) {
                unMinifiedList.push(unMinifyObj);
            }
        }
        return { masterData: unMinifiedList };
    };

    _hasValue(filterObj, property) {
        return !this._isNullOrUndefined(filterObj) && !this._isNullOrUndefined(filterObj[property]);
    };

    _unEscapeSelectedFilterDataforURLFilter(filterInfoList) {
        for (var index = 0; index < filterInfoList.length; index++) {
            var filterInfo = filterInfoList[index];
            if ((!this._isNullOrUndefined(filterInfo.InitialDimensionFilter.Text) && filterInfo.InitialDimensionFilter.Text.length !== 0)) {
                for (var i = 0; i < filterInfo.InitialDimensionFilter.Text.length; i++) {
                    filterInfo.InitialDimensionFilter.Text[i] = filterInfo.InitialDimensionFilter.Text[i].replaceAll(String.fromCharCode(252) + String.fromCharCode(252), ',').
                        replaceAll(String.fromCharCode(251) + String.fromCharCode(251), '&').
                        replaceAll(String.fromCharCode(250) + String.fromCharCode(250), '=').
                        replaceAll(String.fromCharCode(253) + String.fromCharCode(253), '?').
                        replaceAll(String.fromCharCode(254) + String.fromCharCode(254), '/');
                }
            }
        }
        return filterInfoList;
    };

    _getWidgetFilterInfo() {
        var widgetId = BoldBI._instance.widgetValue;
        if (Array.isArray(widgetId) == true) {
            var widgetDetails = [];
            var j = 0;
            for (var i = 0; i < widgetId.length; i++) {
                var filtersDetails = BoldBI._instance.get(document.getElementById(this.embedOptions.embedContainerId), "embeddedBoldBIWidget_" + widgetId[i]);
                filtersDetails = Array.isArray(filtersDetails) ? filtersDetails : [filtersDetails];
                var widgetValue = {
                    id: widgetId[i],
                    filters: {
                        values: filtersDetails,
                        type: "",
                        columnName: "",
                    }
                }
                widgetDetails[j++] = widgetValue;
            }
        }
        return widgetDetails;
    };

    addStyles() {
        var that = this;
        that._loadDepedentFiles();
    };

    destroyStyles() {
        var that = this;
        document.querySelectorAll('link').forEach(function (node) {
            that.cssFiles.forEach(function (file) {
                if (node.href.toLowerCase().indexOf(file.toLowerCase()) !== -1) {
                    node.parentNode.removeChild(node);
                }
            });
        });
    };
}

class widgetBI {
    constructor() {
        this.containerID = "";
    }
    setFilterParameters(filters) {
        var widgetId = BoldBI._instance.widgetValue;
        if (Array.isArray(widgetId) == true) {
            if (BoldBI._instance.has(document.getElementById(this.containerID), "embeddedBoldBIWidget_" + widgetId[widgetId.length - 1])) {
                BoldBI._instance.put(document.getElementById(this.containerID), "embeddedBoldBIWidget_" + widgetId[widgetId.length - 1], filters);
            }
        }
    }
}

BoldBI.Mode = {
    View: "view",
    Design: "design",
    Connection: "connection",
    DataSource: "datasource"
};

BoldBI.EmbedType = {
    Component: "component",
    IFrame: "iframe"
};

BoldBI.Environment = {
    Cloud: "cloud",
    Enterprise: "onpremise"
};

BoldBI.Theme = {
    Off: "off",
    Light: "light",
    Dark: "dark"
};

BoldBI._instance = {
    _storage: new WeakMap(),
    widgetValue: [],
    put: function (element, key, obj) {
        if (!this._storage.has(element)) {
            this._storage.set(element, new Map());
        }
        this._storage.get(element).set(key, obj);
    },
    get: function (element, key) {
        if (this._storage.has(element)) {
            return this._storage.get(element).get(key);
        }
    },
    has: function (element, key) {
        return this._storage.has(element) && this._storage.get(element).has(key);
    },
    remove: function (element, key) {
        if (this._storage.has(element)) {
            var ret = this._storage.get(element).delete(key);
            if (this._storage.get(element).size !== 0) {
                this._storage.delete(element);
            }
            return ret;
        }
    }
};
import { Component, OnInit } from '@angular/core';
import { Item } from '../app';
import { appService } from '../app.service';
import { AppComponent } from '../app.component';
import { BoldBI } from '@boldbi/boldbi-embedded-sdk';
import { DashboardService } from '../dashboard.service';

// declare var BoldBI: any;
@Component({
    selector: 'app-dashboard-listing',
    templateUrl: './dashboard-listing.component.html',
    providers: [appService]
})

export class DashboardListing implements OnInit {

    public dashboardsList!: Item[];
    result: any;
    dashboard: any;
    embedConfig: any;
    constructor(private _app: appService, private _appComponent: AppComponent, private dashboardService: DashboardService) {
    }

    ngOnInit() {    
        
        this._app.GetEmbedConfig(this._appComponent.apiHost + this._appComponent.getEmbedConfigUrl).subscribe(data => {
            this._appComponent.embedConfig = <any>data;
            // Transform camelCase keys to PascalCase
            const transformedEmbedConfigData = {
                DashboardId: this._appComponent.embedConfig.dashboardId,
                EmbedType: this._appComponent.embedConfig.embedType,
                Environment: this._appComponent.embedConfig.environment,
                ServerUrl: this._appComponent.embedConfig.serverUrl,
                SiteIdentifier: this._appComponent.embedConfig.siteIdentifier
            };
            this.dashboardService.setEmbedConfig(transformedEmbedConfigData);
            if (this.dashboardService.embedConfig.Environment == "enterprise" || this.dashboardService.embedConfig.Environment == "onpremise") {
                this._appComponent.baseUrl = this.dashboardService.embedConfig.ServerUrl + "/" + this.dashboardService.embedConfig.SiteIdentifier;
                this._appComponent.dashboardServerApiUrl = this.dashboardService.embedConfig.ServerUrl + "/api/" + this.dashboardService.embedConfig.SiteIdentifier;
            } else {
                this._appComponent.baseUrl = this.dashboardService.embedConfig.ServerUrl;
                this._appComponent.dashboardServerApiUrl = this.dashboardService.embedConfig.ServerUrl + "/api";
            }
        })

        // this._app.Gettoken(this._appComponent.dashboardServerApiUrl,this._appComponent.userId,this._appComponent.userPassword).subscribe(data => {
        //     this.result = data;
        //     this._appComponent.token = JSON.parse(this.result.Token).access_token;
        //     this._app.GetDashboards(this._appComponent.getDashboardsUrl).subscribe(data => {
        //         this._appComponent.dashboards = <any>data;
        //         this.dashboardsList = this._appComponent.dashboards;
        //     });
        // });

        this._app.GetDashboards(this._appComponent.apiHost + this._appComponent.getDashboardsUrl).subscribe(data => {
            this._appComponent.dashboards = <any>data;
            this.dashboardsList = this._appComponent.dashboards;
            this.renderDashboard(this.dashboardsList[0]);
        });
    }

    renderDashboard(dashboard: Item) {
        this.dashboard= BoldBI.create({
            serverUrl: this._appComponent.baseUrl,
            dashboardId: this.dashboardService.embedConfig.DashboardId,
            embedContainerId: "dashboard",
            embedType: this.dashboardService.embedConfig.EmbedType,
            environment: this.dashboardService.embedConfig.Environment,
            width:"100%",
            height:"100%",
            hideMultiDashboardHeader: true,
            expirationTime:100000,
            authorizationServer: {
                url:this._appComponent.apiHost + this._appComponent.authorizationUrl
            }
        });

        console.log(this.dashboard);
        this.dashboard.loadDashboard();        
    } 
}

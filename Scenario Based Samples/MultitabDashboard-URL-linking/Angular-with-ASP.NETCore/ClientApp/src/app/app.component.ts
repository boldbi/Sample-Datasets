import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

  export class AppComponent {

    //ASP.NET Core application would be run on https://localhost:5001;http://localhost:5000, which needs to be set as `apiHost`
    public apiHost="https://localhost:7051/";

    //Url of the GetDetails action in ValuesController of the ASP.NET Core application
    public authorizationUrl= "api/boldbiembed/authorizationserver";
  
    //Url of the GetDashboards action in ValuesController of the ASP.NET Core application
    public getDashboardsUrl= "api/boldbiembed/getdashboards";

    public getEmbedConfigUrl= "api/boldbiembed/getdata";

    public embedConfig: any;
      
    public dashboards: any;
  
    public baseUrl: any;
  
    public dashboardServerApiUrl!: string;
    
    constructor(private _app: appService) {
    }

  ngOnInit() {

  }
}

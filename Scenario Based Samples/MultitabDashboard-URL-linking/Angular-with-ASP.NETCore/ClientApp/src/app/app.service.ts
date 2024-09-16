import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HashLocationStrategy } from '@angular/common';

@Injectable()

export class appService {

    private authUrl!: string;
    private getDashboardsUrl!: string;
    private header!: HttpHeaders;

    constructor(private http: HttpClient) {
    }

    // public Gettoken(dashboardServerApiUrl: string,userId: string, userPassword: string) {
    //     this.header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    //     let body = new HttpParams();
    //     body = body.set('UserId', userId);
    //     body = body.set('Password', userPassword);

    //     return this.http.post(dashboardServerApiUrl + '/get-user-key', body, {
    //         headers: this.header,
    //     }).pipe(res => {
    //         return <any>res;
    //     });
    // }

    public GetDashboards(getDashboardsUrl: string) {
        this.header = new HttpHeaders();
        this.header = this.header.append('Access-Control-Allow-Origin', '*');
        this.header = this.header.append('Authorization', 'bearer ' + "token");

        return this.http.get(getDashboardsUrl, {
            headers: this.header
        }).pipe(res => {
            return <any>res;
        });
    }

    public GetEmbedConfig(getDashboardsUrl: string) {
        return this.http.get(getDashboardsUrl, {
        }).pipe(res => {
            return <any>res;
        });
    }
}
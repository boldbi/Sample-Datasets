import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class DashboardService {
public embedConfig: any;
getEmbedConfig(): any {
return this.embedConfig;
}
setEmbedConfig(embedConfig: any): void {
this.embedConfig = embedConfig; }
}
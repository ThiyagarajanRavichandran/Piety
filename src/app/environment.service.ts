import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*  Generated class for the EnviormentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root'
})
export class EnvironmentProvider {
  public static appPlatform: boolean;
  public appPlatformName: string
  //public serviceUrl: string = 'http://localhost:8090/PNS/';
  // public serviceUrl: string = 'http://172.16.16.223:8080/PNS/'; 
  //public serviceUrl: string = 'http://10.44.8.122:8080/PNS/'
  public serviceUrl: any = "http://10.44.8.74:8480/";
  public appVersionNo: string="1.0.0.1";

  public enableProdMode=false;
  public appREST_URL: any = {
    BRS: 'OrionAPIServices/GenericResultBuilderService/buildResults'   
  }


  constructor(public http: HttpClient) {
    this.getPlatform();

    // this.serviceUrl = this.getServiceURL();

    //this.appVersionNo=this.appversion.getVersionNumber().toString();

    console.log("Environment  --> ",this.appVersionNo );
  
  }

  getServiceURL() {

    return localStorage.getItem('app.url.id');

  }

  getJsonMethodURL() {
    this.appREST_URL.exJSON_PRO;
  }


  getPlatform() {
    
    return { isMobilePlatform: EnvironmentProvider.appPlatform, platfomName: this.appPlatformName };
  }
}

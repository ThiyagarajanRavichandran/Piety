import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentProvider } from '../app/environment.service';



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root'
})
export class ApiProvider {
  headers = {
    'content-type': 'application/json'
  };

  loader: any;
  constructor(public angHttp: HttpClient, public env: EnvironmentProvider) {
    console.log('Hello ApiProvider Provider');

  }

  /**
     * @param {body} - Contain REST API request data as JSON Object.
     * @param {urlType} - Contain URL type.
     * @param {callback?} - is the call function of REST API data requtest. It wil automatically retrun the Succsess/Error message to respective method.
      */
  getHttpPostReq(body, urlType, callback?) {
    console.log(" getHttpPostReqS ==> " + JSON.stringify(body));
    let myHttp = this.getHttpObj(body, urlType);
    let result: any;

    myHttp.subscribe(data => {
      result = data;
      console.log(" angHttp RESPONSE ==> " + JSON.stringify(data));

      callback && callback(result);

    },
      error => {

        callback && callback(this.getErrorMessageJSONObj(error.error));
      });

  }
  /**
   * @param {body} - Contain REST API request data as JSON Object.
   * @param {urlType} - Contain URL type
    */
  getHttpObj(body, urlType): any {
    if (this.env.getPlatform().isMobilePlatform) {
      console.log("Mobile platform");



      /*this.ionHttp.setDataSerializer('json');

      return this.ionHttp.post(this.env.serviceUrl .concat(this.env.appREST_URL.exJSON_PRO), body, this.headers);*/

      body = JSON.stringify(body);


      const options2 = {
        method: 'POST',
        data: body,
        headers: this.headers
      };



      return this.angHttp.post(this.env.serviceUrl.concat(this.getURLType(urlType)), body, options2);
    }
    else {
      console.log("Browser platform");

      body = JSON.stringify(body);


      const options2 = {
        method: 'POST',
        data: body,
        headers: this.headers
      };



      return this.angHttp.post(this.env.serviceUrl.concat(this.getURLType(urlType)), body, options2);

    }
  }

 

  /**
     * @param {type} - Selecting REST API URL based on switch key type.
      */
  getURLType(type: string) {
    console.log("getURLType -> ", type);
    let url: string = this.env.appREST_URL[type];

    if (url != '') {
      return url;
    }
    else {
      return null;
    }


  }

  /**
   * @param {errorMessage} - Constructing Error message JSON Object format based on REST API response.
    */
  getErrorMessageJSONObj(errorMessage: String) {
    let errorMessageObj = {
      "statusCode": "2",
      "statusMessage": errorMessage,
      "mysqlException": null,
      "oracleException": null,
      "isOperationSuccessful": false,
      "saveMessage": null

    };

    return errorMessageObj;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionResult } from 'src/app/TransactionResult';
import { environment } from "src/environments/environment";
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  private handleError: HandleError;
  
   
  public transactionResult : TransactionResult;

  

  constructor(private http: HttpClient) { }

  // doLogin(userName:string, password:string, loginType:string) : Observable<TransactionResult> {
  //   let postContents = { "userName" : userName, 
  //   "password" : password, 
  //   "loginType" : loginType,
  //   "companyCode" : "001"
  //  };
  //   return this.http.post<TransactionResult>("http://10.44.8.74:8480/OrionAPIServices/GenericTransactionService/doLogin", 
  //   postContents);
  // }

  doLogin(userLogin) : Observable<TransactionResult> {
  //   let postContents = { "userName" : userLogin.userName, 
  //   "password" : userLogin.password, 
  //   "loginType" : userLogin.loginType,
  //   "companyCode" : "001"
  //  };
  //   return this.http.post<TransactionResult>("http://10.44.8.74:8480/OrionAPIServices/GenericTransactionService/doLogin", 
  //   postContents);
  return null;
  }



  getLoginDetails () {

    var companyIdValue = {
      "_keyword_" : "app-property-value",
      "PROP_CODE" : "LOGIN_TYPE"
    }
    return this.http.post(environment.getCompanyId, companyIdValue)
      .pipe(
        catchError(err => this.handleError('getLoginDetails'))
      );
  }
  
  

}
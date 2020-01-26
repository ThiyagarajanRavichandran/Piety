import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilService{

  loginType:any;
  constructor() { 
    // this.loginType = "Guest";
  }



setloginType(loginType: any) {
  this.loginType = loginType;
}

getloginType() {
  return this.loginType;
}


}

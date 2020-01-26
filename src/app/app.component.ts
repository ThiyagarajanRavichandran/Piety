import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from "src/app/app.service";
import { CommonUtilService } from './common-util-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  userName: string = "";
  userPassword: string = "";
  loginType: string = "Patron";
  loginPage: boolean = false;
  

  public userLogin = {
    userName: '',
    password: '',
    loginType:'',
    companyId:''
    
  }

  

  //[x: string]: any;
  
  
    getjsonVal: any;

    
    constructor(private router: Router, private appService: AppService,
      private route: ActivatedRoute, private commonUtilService: CommonUtilService) {
      console.log("App services ");
      
      this.keyDownFunction();
    }
  ngOnInit() {   
      
      }

  keyDownFunction() {
    console.log("Entered key");
/*
    this.appService.getLoginDetails().subscribe(data => {
      
        this.getjsonVal= data;
        var getValue = this.getjsonVal;
        console.log("data val is " + JSON.stringify(getValue));
      },  error => { 
            console.log("Error");
          });
*/
}


 
  // public loginTypeValue: { [key: string]: Object }[] = [{ Id: 'ADMIN', logintypeVal: 'Admin ' },
  // { Id: 'PATRON', logintypeVal: 'Patron' }, { Id: 'PRIEST', logintypeVal: 'Priest' }, { Id: 'GUEST', logintypeVal: 'Guest' }];
  // public typefields: Object = { text: 'logintypeVal', value: 'Id' };



  public login() {
    if (this.userName != null && this.userPassword != null && this.loginType != null) {
      if ((this.userName.includes("admin") && this.userPassword.includes("admin")) || (this.userName.includes("patron") && this.userPassword.includes("patron")) || (this.userName.includes("priest") && this.userPassword.includes("priest"))) {
        this.loginPage = true;
        this.commonUtilService.setloginType(this.loginType);
        this.router.navigate(['/', 'home'] );
        this.userName = "";
        this.userPassword = "";
        this.loginType = "";
      } 
    }
  }

  public continueAsGuest() {
    console.log("guest login");
    this.loginPage = true;
    this.commonUtilService.setloginType("Guest");
    this.router.navigate(['/', 'home'] );
    this.userName = "";
    this.userPassword = "";
    this.loginType = "";
  }


  // public login(userLogin){
  //   this.appService.doLogin(userLogin).subscribe(data => {
  //     console.log("`````" +JSON.stringify(data));
  //    var abc =data.data;
  //     var i, len = abc.length;  
  //    if(len == 1){   
  //     this.router.navigate(['/', 'home']);
  //    }
  //   else 
  //     if (len === "") {
  //       this.appErrMsg = "Password Wrong";
  //     }
  //     else {
  //       if (this.userLogin.userId === "") {
  //         this.appErrMsg = "UserName  is empty";
  //       }
  //       else if(this.userLogin.password === ""){
  //         this.appErrMsg = "Password is empty";
  //       }
  //        else if(this.userLogin.companyId === ""){
  //         this.appErrMsg = "Select Company Name"; 
  //       } 
  //       else if(this.userLogin.userId == "" && this.userLogin.password == "" && this.userLogin.companyId == "" ){
  //         this.appErrMsg = "User name , Password, company name is empty";
  //       }
        
  //   }); 
  // }

}




import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUtilService } from '../common-util-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
 
  loginType:any;
  
  ngOnInit() {
    if (this.loginType == "Admin") {
      this.router.navigate(['home/dashboard-event']);
    } else if (this.loginType == "Priest") {
      this.router.navigate(['home/upcoming-events']);
    } else if (this.loginType == "Patron") {
      this.router.navigate(['home/upcoming-events']);
    } else if (this.loginType == "Guest") {
      this.router.navigate(['home/dashboard']);
    }
  }

  constructor(private router: Router, private commonUtilService: CommonUtilService) {
    this.loginType = this.commonUtilService.getloginType();  
    this.menu();
  }

  public logout() {
    this.router.navigate(['/', '']);
  }
  

  menuArray: any;
  
  getVal: any;
  menu() {
    console.log("Inside menu " + "this.menuMap." + this.loginType);

    this.getVal = eval("this.menuMap." + this.loginType);
console.log("login type based menu dataset " + JSON.stringify(this.getVal));
this.menuArray = this.getVal.Menus;
 }
menuMap:any = {
    "Admin" : {
        "type": "Admin",
        "Menus": [{
          "menu": "Admin-Dashboard",
          "icon": "fa fa-tachometer",
          "link" : "/home/dashboard-event"
        },{
          "menu": "Temple-Events",
          "icon": "fa fa-bell",
          "link" : "/home/temple-events"
        },{
          "menu": "Event Schedule",
          "icon": "fa fa-calendar-check-o",
          "link" : "/home/eventschedule"
        },{
          "menu": "History Reports",
          "icon":"fa fa-history",
          "link" : "/home/history"
        }, {
          "menu": "Priest Management",
          "icon": "fa fa-tasks",
          "link" : "/home/priest-list2"
        },{
          "menu": "Patron Management",
          "icon": "fa fa-calendar-check-o",
          "link" : "/home/patron-list2"
        }
      ]
    },
    "Patron" : {
        "type": "Patron",
        "Menus": [{
          "menu": "Create Event",
          "icon": "fa fa-calendar-o",
          "link" : "/home/dashboard"
        },{
          "menu": "Manage Event",
          "icon": "fa fa-calendar",
          "link" : "/home/manage-events"
        },{
          "menu": "History Reports",
          "icon":"fa fa-history",
          "link" : "/home/history"
        },{
        "menu": "Feedback",
        "icon":"fa fa-comments",
        "link" : "/home/feedback"
      }]
    },
    "Priest" : {
          "type": "Priest",
          "Menus": [{
            "menu": "Create Event",
            "icon": "fa fa-calendar-o",
            "link" : "/home/dashboard"
          }, {
            "menu": "Manage Event",
            "icon": "fa fa-calendar",
            "link" : "/home/manage-events"
          },{
            "menu": "Upcoming Event",
            "icon":"fa fa-arrow-right",
            "link" : "/home/upcoming-events" 
        },{
          "menu": "History Reports",
          "icon":"fa fa-history",
          "link" : "/home/history" 
         }]
      },

      "Guest" : {
        "type": "Priest",
        "Menus": [{
          "menu": "Create Event",
          "icon": "fa fa-calendar-o",
          "link" : "/home/dashboard"
        }]
    }
}


 selectedMenuName:any;
 selectedMenu(menu){
    this.selectedMenuName = menu.menu;
    this.router.navigate([menu.link]);   
  //  if(this.selectedMenuName === "Admin-Dashboard"){
  //   this.router.navigate(['/home/dashboard-event']);
  // } else if(this.selectedMenuName === "Temple-Events"){
  //   this.router.navigate(['/home/dashboard']);
  // }

 }


}

import { Component, OnInit } from '@angular/core';
import { EventSettingsModel,View } from '@syncfusion/ej2-angular-schedule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-event',
  templateUrl: './dashboard-event.component.html',
  styleUrls: ['./dashboard-event.component.css']
})
export class DashboardEventComponent implements OnInit {

  public priestVsEventData : Object[];
  public pveXAxis : Object;
  public pveYAxis : Object;
  public pveChartTitle : string;
  public pveChartLegend : Object;
  public pveMarkerSettings : Object;
  public pveTooltipSettings : Object;
  public profitVsMonthData : Object[];

  constructor(private router: Router) {
    this.pveChartTitle = 'Priests Vs Events this month';
    this.priestVsEventData = [
      { priest : 'Kashyap Swami', events : 12 }, { priest : 'Sivasubramaniya Gurukkal', events : 22 },
      { priest : 'Maheswara Desikar', events : 11 }, { priest : 'Varatharaja Swami', events : 16 },
      { priest : 'Viswanatha Swami', events : 12 }, { priest : 'Thathayangar', events : 13 },
      { priest : 'Balaguru', events : 12 }, { priest : 'Sivaraman Iyer', events : 15 },
      { priest : 'Kishore Swami', events : 12 }, { priest : 'Nandagopal Iyengar', events : 19 },
      { priest : 'Sudarshan Iyengar', events : 16 }, { priest : 'Krishnamurthy Iyengar', events : 15 }
    ];
    this.pveTooltipSettings = {
      enable : true
    };
    this.pveMarkerSettings = {
      visible : true,
      dataLabel : {
        visible : true
      }
    };
    this.pveChartLegend = {
      visible : true
    }
    this.pveXAxis = {
      title : 'Priests',
      valueType : 'Category'
    };
    this.pveYAxis = {
      title : 'Events'
    };
  } 

  ngOnInit() {
  }
  public eventData: EventSettingsModel = {
    dataSource: [{
        Id: 1,
        Subject: 'Sashtiyaptha Poorthi (Kashyap Swami)',
        StartTime: new Date(2019, 10, 20, 9, 0),
        EndTime: new Date(2019, 10, 20, 11, 0)
        },
        {
            Id: 2,
            Subject: 'Ganapathi Homam (Srinivasalu Iyengar)',
            StartTime: new Date(2019, 10, 10, 15, 0),
            EndTime: new Date(2019, 10, 10, 17, 0)
        },
        {
            Id: 3,
            Subject: 'Aayush Homam (Viswesvara Iyer)',
            StartTime: new Date(2019, 10, 30, 9, 30),
            EndTime: new Date(2019, 10, 30, 11, 0)
        }]
} 
public currentDate: Date = new Date(2019, 10, 30);
public newViewMode: View = 'Month';

public showPendingEvents() {
  this.router.navigate(['/home/pending-events']);  
}

}

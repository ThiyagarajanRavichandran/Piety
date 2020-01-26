import { Component, OnInit } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { EventSettingsModel, View, PopupOpenEventArgs, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { $ } from 'protractor';

@Component({
  selector: 'app-eventschedule',
  templateUrl: './eventschedule.component.html',
  styleUrls: ['./eventschedule.component.css']
})
export class EventscheduleComponent implements OnInit {

  constructor() { }

  public statusFields: Object = { text : 'StatusText', value : 'StatusText'};

  public StatusData : Object[] = [
    { StatusText : 'New' },
    { StatusText : 'Requested' },
    { StatusText : 'Confirmed' }
  ];

  public PriestAvailabilityData : Object[] = [
    [
      { Name : "V.P. Iyer Samadhi", Status : "Available", ColorCode : "#green" },
      { Name : "Tirumalai Krishnamacharya", Status : "Booked", ColorCode : "#ff0000" },
      { Name : "Trivadi Iyer", Status : "Available", ColorCode : "#green" },
      { Name : "Velukkudi Krishnan", Status : "Booked", ColorCode : "#ff0000" },
      { Name : "Gopalan Kasturi", Status : "Available", ColorCode : "#green" }
    ],
    [
      { Name : "V.P. Iyer Samadhi", Status : "Booked", ColorCode : "#ff0000" },
      { Name : "Tirumalai Krishnamacharya", Status : "Available", ColorCode : "#green" },
      { Name : "Trivadi Iyer", Status : "Booked", ColorCode : "#ff0000" },
      { Name : "Velukkudi Krishnan", Status : "Available", ColorCode : "#green" },
      { Name : "Gopalan Kasturi", Status : "Booked", ColorCode : "#ff0000" }
    ],
    [
      { Name : "V.P. Iyer Samadhi", Status : "Available", ColorCode : "#green" },
      { Name : "Tirumalai Krishnamacharya", Status : "Booked", ColorCode : "#ff0000" },
      { Name : "Trivadi Iyer", Status : "Booked", ColorCode : "#ff0000" },
      { Name : "Velukkudi Krishnan", Status : "Booked", ColorCode : "#ff0000" },
      { Name : "Gopalan Kasturi", Status : "Available", ColorCode : "#green" }
    ]
  ];

  ngOnInit() {
  }

  public showClickedEvent() {
    console.log("clicked on event");
  }

  public eventData: EventSettingsModel = {
    dataSource: [{
            Id: 1,
            HolyEvent: 'Sashtiyaptha Poorthi (Kashyap Swami)',
            EventStart: new Date(2019, 10, 20, 9, 0),
            EventEnd: new Date(2019, 10, 20, 11, 0)
        },
        {
            Id: 2,
            HolyEvent: 'Ganapathi Homam (Srinivasalu Iyengar)',
            EventStart: new Date(2019, 10, 10, 15, 0),
            EventEnd: new Date(2019, 10, 10, 17, 0)
        },
        {
            Id: 3,
            HolyEvent: 'Aayush Homam (Viswesvara Iyer)',
            EventStart: new Date(2019, 10, 30, 9, 30),
            EventEnd: new Date(2019, 10, 30, 11, 0)
        }
    ],
    fields : {
      id : "Id",
      subject : { name : "HolyEvent", default : "TempleEvent", title : "Enter Event Title" },
      location: { name: "Location", title: "Event Location"},
      description: { name: "Description", title: "Event Description" },
      startTime : { name : "EventStart" },
      endTime : { name : "EventEnd" }
    }
  }

  onPopupOpen(args: PopupOpenEventArgs): void {
    console.log('Event popup opened : ' + args.type);
    if (args.type === 'Editor' || args.type === 'QuickInfo')  {
        args.cancel = true;
    }
  }

  public currentDate: Date = new Date(2019, 10, 30);
  public newViewMode: View = 'Month';
}
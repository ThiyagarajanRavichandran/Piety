import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HomeService } from '../home.service';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PriestComponent } from './priest/priest.component';
import { PatronComponent } from './patron/patron.component';
import { PatronListComponent } from './patron-list/patron-list.component';
import { PriestListComponent } from './priest-list/priest-list.component';
import { DashboardEventComponent } from "./dashboard-event/dashboard-event.component";
import { ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DialogAllModule } from '@syncfusion/ej2-angular-popups';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ButtonModule, RadioButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ChartModule, LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { HistoryComponent } from './history/history.component';
import { ManageEventsComponent } from './manage-events/manage-events.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import { TempleEventsComponent } from './temple-events/temple-events.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PatronList2Component } from './patron-list2/patron-list2.component';
import { PriestList2Component } from './priest-list2/priest-list2.component';
import { EventscheduleComponent } from './eventschedule/eventschedule.component';

@NgModule({
  
  imports: [
    CommonModule,
    HomeRoutingModule,
    DatePickerModule,
    TimePickerModule,
    CalendarModule,
    RouterModule,
    ScheduleModule ,
    AccordionModule,
    NumericTextBoxAllModule,
    DialogAllModule,
    DropDownListModule, 
    ButtonModule,
    RadioButtonModule,
    CheckBoxModule,
    ChartModule,
    GridAllModule,
    DropDownListModule,
    DateTimePickerModule
  ],
  declarations: [HomeComponent,DashboardComponent,PriestComponent,PatronComponent,
    PatronListComponent, PriestListComponent,DashboardEventComponent,HistoryComponent,ManageEventsComponent,
    UpcomingEventsComponent, PendingEventsComponent, TempleEventsComponent, FeedbackComponent,
    PatronList2Component, PriestList2Component, EventscheduleComponent],
  providers: [HomeService, AgendaService, DayService, WeekService, WorkWeekService,
     MonthService, DragAndDropService, ResizeService, LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ChartModule, LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DashboardEventComponent } from './dashboard-event.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ScheduleModule,
    CalendarModule,
    DatePickerModule,
    ChartModule
  ],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService, LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService],
  
  exports: [
    DashboardEventComponent
  ]
  
})
export class DashboardEventModule { }
 
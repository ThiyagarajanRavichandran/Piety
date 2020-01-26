import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    DatePickerModule,
    TimePickerModule    
  ]
})
export class DashboardModule { }

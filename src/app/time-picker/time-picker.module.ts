import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TimepickerDayComponent } from './timepicker-day/timepicker-day.component';



@NgModule({
  declarations: [TimepickerComponent, TimepickerDayComponent],
  exports: [
    TimepickerComponent,
    TimepickerDayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TimePickerModule { }

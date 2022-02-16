import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { LoggingComponent } from './logging/logging.component';
import { TakeInputComponent } from './take-input/take-input.component';
import { ClickCountsComponent } from './click-counts/click-counts.component';
import { TimerSubjectComponent } from './timer-subject.component';
import { TimerSubjectRoutingModule } from './timer-subject-routing.module';



@NgModule({
  declarations: [
    DisplayComponent,
    LoggingComponent,
    TakeInputComponent,
    ClickCountsComponent,
    TimerSubjectComponent
  ],
  imports: [
    CommonModule,
    TimerSubjectRoutingModule
  ]
})
export class TimerSubjectModule { }

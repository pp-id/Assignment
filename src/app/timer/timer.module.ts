import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { TakeInputComponent } from './take-input/take-input.component';
import { LoggingComponent } from './logging/logging.component';
import { ClickCountsComponent } from './click-counts/click-counts.component';
import { TimerComponent } from './timer.component';
import { TimerRoutingModule } from './timer-routing.module';




@NgModule({
  declarations: [
    DisplayComponent,
    TakeInputComponent,
    LoggingComponent,
    ClickCountsComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule
  ]
})
export class TimerModule { }

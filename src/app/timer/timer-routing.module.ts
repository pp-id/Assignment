import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickCountsComponent } from './click-counts/click-counts.component';
import { DisplayComponent } from './display/display.component';
import { LoggingComponent } from './logging/logging.component';
import { TakeInputComponent } from './take-input/take-input.component';
import { TimerComponent } from './timer.component';

const routes: Routes = [
  { path: '' , component: TimerComponent} ,

  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerRoutingModule { }
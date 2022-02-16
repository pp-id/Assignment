import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { LoggingComponent } from './logging/logging.component';
import { TakeInputComponent } from './take-input/take-input.component';
import { ClickCountsComponent } from './click-counts/click-counts.component';
import { TimerSubjectComponent } from './timer-subject.component';


const routes: Routes = [
  {path: '', component: TimerSubjectComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerSubjectRoutingModule { }
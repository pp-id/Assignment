import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic/dynamic.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DynamicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DynamicComponent, children: [] }
  ]),

  ]
})
export class DynamicDivsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomComponent } from './ecom/ecom.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EcomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([                                   //when u have only single component in a module
      { path: '', component: EcomComponent, children: [] }
  ]),
  ]
})
export class EcommerceModule { }

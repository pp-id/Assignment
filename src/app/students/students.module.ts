import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { RouterModule } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    RouterModule.forChild([
      { path: '', component: StudentsComponent, children: [] }
  ]),
  MatTableModule,
  MatSortModule
  ]
})
export class StudentsModule { }

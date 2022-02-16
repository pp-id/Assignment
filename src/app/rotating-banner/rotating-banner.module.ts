import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BannerComponent, children: [] }
  ]),
  ]
})
export class RotatingBannerModule { }

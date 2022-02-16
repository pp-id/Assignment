import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'items',
    loadChildren: () => import('./rotating-banner/rotating-banner.module').then(m => m.RotatingBannerModule)
  },
  
  { path: 'timer', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule) },

  { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'dynamic', loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule) },
  { path: 'timersubject', loadChildren: () => import('./timer-subject/timer-subject.module').then(m => m.TimerSubjectModule) },
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

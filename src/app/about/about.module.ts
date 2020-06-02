import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import { AboutComponent } from './about.component';
import { OwlModule } from 'ngx-owl-carousel';
import { LightboxModule } from 'ngx-lightbox';

const routes: Route[]=[
  {
  path: '',
  component: AboutComponent
  }
  ]

@NgModule({
declarations: [AboutComponent],
exports:[AboutComponent],
imports: [
RouterModule.forChild(routes),
CommonModule,
LightboxModule,
OwlModule
]
})
export class AboutModule { }

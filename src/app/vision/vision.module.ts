import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionComponent } from './vision.component';
import { RouterModule,Route } from '@angular/router';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

const routes: Route[]=[
  {
  path: '',
  component: VisionComponent
  }
  ]

@NgModule({
declarations: [VisionComponent],
exports:[VisionComponent],
imports: [
RouterModule.forChild(routes),
CommonModule,Ng2PageScrollModule
]
})
export class VisionModule { }

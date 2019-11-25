import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import { RucTalksComponent } from './ruc-talks.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

const routes: Route[]=[
    {
    path: '',
    component: RucTalksComponent
    }
    ]

@NgModule({
  declarations: [RucTalksComponent],
  exports:[RucTalksComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule,Ng2PageScrollModule
  ]
})
export class RucTalksModule { }

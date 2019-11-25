import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { ResourcesComponent } from './resources.component';

const routes: Route[]=[
    {
    path: '',
    component: ResourcesComponent
    }
    ]

@NgModule({
  declarations: [ResourcesComponent],
  exports:[ResourcesComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule,Ng2PageScrollModule
  ]
})
export class ResourcesModule { }

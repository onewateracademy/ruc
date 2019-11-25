import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import { JoinUsComponent } from './join-us.component';

const routes: Route[]=[
    {
    path: '',
    component: JoinUsComponent
    }
    ]

@NgModule({
  declarations: [JoinUsComponent],
  exports:[JoinUsComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})
export class JoinUsModule { }

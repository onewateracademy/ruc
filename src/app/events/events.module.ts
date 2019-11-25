import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Route[]=[
    {
    path: '',
    component: EventsComponent
    }
    ]

@NgModule({
  declarations: [EventsComponent],
  exports:[EventsComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})
export class EventsModule { }

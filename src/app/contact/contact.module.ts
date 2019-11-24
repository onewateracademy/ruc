import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Route[]=[
    {
    path: '',
    component: ContactComponent
    }
    ]

@NgModule({
  declarations: [ContactComponent],
  exports:[ContactComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})
export class ContactModule { }

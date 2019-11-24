import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'vision',
    loadChildren: './vision/vision.module#VisionModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path:'**',
    component:HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

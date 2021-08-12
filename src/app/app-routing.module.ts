import { NgModule } from '@angular/core';
import {Routes,RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AcademicComponent } from './academic/academic.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'academic', component: AcademicComponent},
  {path:'banner',component: BannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

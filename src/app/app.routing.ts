import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login/login.component';
import { LoginGuard } from './Guards/login.guard';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {path:'Login', redirectTo:'login'},
  {path:'admin' , redirectTo:'dashboard'}
  
  , {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x=>x.AdminLayoutModule) , canActivate:[LoginGuard]
  }]},
  {
    path: '',
    redirectTo: 'home'
  },
  {path:'home' ,component:HomeComponent},
  {path:'home/login', component:LoginComponent}
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

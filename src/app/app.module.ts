import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login/login.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import {MatDialogModule} from '@angular/material/dialog';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SatisUpdateComponent } from './satis/satis-update/satis-update.component';
import { GlassBrandsUpdateComponent } from './glass/glass-brands-update/glass-brands-update.component';
import { GlassCategoryUpdateComponent } from './glass/glass-category-update/glass-category-update.component';
import { FrameUpdateComponent } from './frame/frame-update/frame-update.component';










@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    LoginComponent,
    SatisUpdateComponent,
    GlassBrandsUpdateComponent,
    GlassCategoryUpdateComponent,
    FrameUpdateComponent,

    
  ],

  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    {provide:LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

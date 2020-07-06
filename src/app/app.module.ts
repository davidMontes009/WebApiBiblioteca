import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import {HttpModule}         from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';

import {routing,appRoutingProviders} from './app.routing';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
    ,ReactiveFormsModule
    ,HttpModule
    ,HttpClientModule
    ,routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

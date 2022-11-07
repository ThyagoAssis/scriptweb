import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],

  exports:[
    HeaderComponent,
    ]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent
  ],

 

  exports:[
    HeaderComponent,
    BrowserModule,
    FormsModule, //Modulo do ngForm, ngModel, ngSubmit (template driven)
    ReactiveFormsModule, //Modulo do formgroup, formbuilder (data driven)       
    AppRoutingModule

    ]
})
export class SharedModule { }
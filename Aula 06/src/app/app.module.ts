import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotografiaModule } from './fotografia/fotografia.module';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FotografiaModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

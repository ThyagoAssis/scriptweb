import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FotografiaModule } from './fotografia/fotografia.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,   
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FotografiaModule,
    SharedModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

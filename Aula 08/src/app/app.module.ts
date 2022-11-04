import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FotografiaModule } from './fotografia/fotografia.module';
import { SharedModule } from './shared/shared.module';

@NgModule({

  //Declaration é so pra componetnes
  declarations: [
    AppComponent,    
  ],

  //Imports é so pra modulo
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

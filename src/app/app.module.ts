import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NrplComponent } from './nrpl/nrpl.component';
import { SmplComponent } from './smpl/smpl.component';
import { Component } from '@angular/core/src/metadata/directives';
import { ErplComponent } from './erpl/erpl.component';
import { WrplComponent } from './wrpl/wrpl.component';


@NgModule({
  declarations: [
    AppComponent,
    NrplComponent,
    SmplComponent,
    ErplComponent,
    WrplComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'nrpl',
        component: NrplComponent
      },
      {
       path:'smpl',
       component: SmplComponent
      },
      {
        path:'wrpl',
        component: WrplComponent
       },
       {
        path:'erpl',
        component: ErplComponent
       }
    ])


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

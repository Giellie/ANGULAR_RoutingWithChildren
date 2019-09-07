import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Main1Component } from './main1/main1.component';
import { Main2Component } from './main2/main2.component';
import { Main1SubAComponent } from './main1-sub-a/main1-sub-a.component';
import { Main1SubBComponent } from './main1-sub-b/main1-sub-b.component';
import { Main1SubAAComponent } from './main1-sub-aa/main1-sub-aa.component';
import { Main1SubABComponent } from './main1-sub-ab/main1-sub-ab.component';
import { Main1SubBAComponent } from './main1-sub-ba/main1-sub-ba.component';
import { Main1SubBBComponent } from './main1-sub-bb/main1-sub-bb.component';

@NgModule({
  declarations: [
    AppComponent,
    Main1Component,
    Main2Component,
    Main1SubAComponent,
    Main1SubBComponent,
    Main1SubAAComponent,
    Main1SubABComponent,
    Main1SubBAComponent,
    Main1SubBBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

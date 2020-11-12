import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTooltipModule} from '@angular/material/tooltip'; 


import { NavbarComponent } from './Main/navbar/navbar.component';
import { HeaderComponent } from './Main/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommitteeService } from './Main/committee/committee.service';
import { FooterComponent } from './Main/footer/footer.component';
import { CreditsService } from './Main/credits/credits.service';
import { CommentsService } from './Main/comments/comments.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './Main/page-not-found/page-not-found.component';

import { DashboardModule } from './Dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    routingComponents,
    FooterComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
  ],
  providers: [CommitteeService, CreditsService, CommentsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

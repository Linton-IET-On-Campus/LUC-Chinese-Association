import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { DashboardComponent } from './Dashboard/dashboard.component';
import { DashboardRoutingModule } from './Dashboard/dashboard-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    routingComponents,
    FooterComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardRoutingModule
  ],
  providers: [CommitteeService, CreditsService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

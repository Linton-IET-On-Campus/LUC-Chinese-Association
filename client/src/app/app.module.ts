import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTooltipModule} from '@angular/material/tooltip'; 

import { JumbotronComponent } from './Main/jumbotron/jumbotron.component';
import { CommitteeComponent } from './Main/committee/committee.component';
import { NavbarComponent } from './Main/navbar/navbar.component';
import { HeaderComponent } from './Main/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommitteeService } from './Main/committee/committee.service';
import { CreditsComponent } from './Main/credits/credits.component';
import { CommentsComponent } from './Main/comments/comments.component';
import { ContactComponent } from './Main/contact/contact.component';
import { FooterComponent } from './Main/footer/footer.component';
import { CreditsService } from './Main/credits/credits.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    JumbotronComponent,
    CommitteeComponent,
    CreditsComponent,
    CommentsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatTooltipModule,
    HttpClientModule
  ],
  providers: [CommitteeService, CreditsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

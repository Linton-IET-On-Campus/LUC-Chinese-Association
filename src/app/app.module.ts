import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTooltipModule} from '@angular/material/tooltip'; 

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './Main/navbar/navbar.component';
import { HeaderComponent } from './Main/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommitteeService } from './Main/committee/committee.service';
import { FooterComponent } from './Main/footer/footer.component';
import { CreditsService } from './Main/credits/credits.service';
import { CommentsService } from './Main/comments/comments.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './Main/page-not-found/page-not-found.component';

import { DashboardModule } from './Dashboard/dashboard.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './Auth/login/auth.service';
import { TokenInterceptorService } from './Auth/login/token-interceptor.service';

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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommitteeService, CreditsService, CommentsService, AuthGuard, AuthService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
      }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

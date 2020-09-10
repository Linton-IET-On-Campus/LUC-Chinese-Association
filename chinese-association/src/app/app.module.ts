import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { EventsComponent } from './main/events/events.component';
import { UploadEventComponent } from './admin/upload-event/upload-event.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    EventsComponent,
    UploadEventComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

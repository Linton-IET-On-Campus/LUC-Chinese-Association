import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CommitteeComponent } from './committee/committee.component';
import { DeveloperComponent } from './developer/developer.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CommentsComponent, 
    ContactComponent, 
    SidebarComponent, 
    HeaderComponent, 
    CommitteeComponent, 
    DeveloperComponent,
  ],
  imports: [
    DashboardRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class DashboardModule { }

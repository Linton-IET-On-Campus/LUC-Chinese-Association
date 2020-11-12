import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CommitteeComponent } from './committee/committee.component';
import { DeveloperComponent } from './developer/developer.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { EditCommitteeComponent } from './committee/edit-committee/edit-committee.component';
import { AddCommitteeComponent } from './committee/add-committee/add-committee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CommentsComponent, 
    ContactComponent, 
    SidebarComponent, 
    HeaderComponent, 
    CommitteeComponent, 
    DeveloperComponent, 
    EditCommitteeComponent, 
    AddCommitteeComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class DashboardModule { }

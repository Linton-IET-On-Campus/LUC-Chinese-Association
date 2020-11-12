import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { CommitteeComponent } from '../Dashboard/committee/committee.component';
import { AddCommitteeComponent } from '../Dashboard/committee/add-committee/add-committee.component';
import { EditCommitteeComponent } from '../Dashboard/committee/edit-committee/edit-committee.component';

import { DeveloperComponent } from '../Dashboard/developer/developer.component';

import { CommentsComponent } from '../Dashboard/comments/comments.component';

import { ContactComponent } from '../Dashboard/contact/contact.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
  children: [

    { path: 'committees', component: CommitteeComponent },
    { path: 'add-committees', component: AddCommitteeComponent },
    { path: 'edit/:id', component: EditCommitteeComponent },

    { path: 'developers', component: DeveloperComponent },
    { path: 'comments', component: CommentsComponent },
    { path: 'contact', component: ContactComponent },
  ]},

]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

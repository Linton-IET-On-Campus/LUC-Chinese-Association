import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { CommitteeComponent } from '../Dashboard/committee/committee.component';
import { AddCommitteeComponent } from '../Dashboard/committee/add-committee/add-committee.component';
import { EditCommitteeComponent } from '../Dashboard/committee/edit-committee/edit-committee.component';

import { DeveloperComponent } from '../Dashboard/developer/developer.component';
import { AddDeveloperComponent } from '../Dashboard/developer/add-developer/add-developer.component';
import { EditDeveloperComponent } from '../Dashboard/developer/edit-developer/edit-developer.component';

import { CommentsComponent } from '../Dashboard/comments/comments.component';
import { EditCommentComponent } from '../Dashboard/comments/edit-comment/edit-comment.component';

import { ContactComponent } from '../Dashboard/contact/contact.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
  children: [

    { path: 'committees', component: CommitteeComponent },
    { path: 'add-committees', component: AddCommitteeComponent },
    { path: 'committee/edit/:id', component: EditCommitteeComponent },

    { path: 'developers', component: DeveloperComponent },
    { path: 'add-developers', component: AddDeveloperComponent },
    { path: 'developer/edit/:id', component: EditDeveloperComponent },

    { path: 'comments', component: CommentsComponent },
    { path: 'comment/edit/:id', component: EditCommentComponent },

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

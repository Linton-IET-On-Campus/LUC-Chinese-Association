import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { JumbotronComponent } from './Main/jumbotron/jumbotron.component';
import { CommitteeComponent } from './Main/committee/committee.component';
import { CommentsComponent } from './Main/comments/comments.component';
import { CreditsComponent } from './Main/credits/credits.component';
import { ContactComponent } from './Main/contact/contact.component';
import { PageNotFoundComponent } from './Main/page-not-found/page-not-found.component';
import { LoginComponent } from './Auth/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: JumbotronComponent},
  {path: 'committees', component: CommitteeComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'credits', component: CreditsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  { path: 'dashboard', redirectTo: '/dashboard/committees', pathMatch: 'full'}, 

  // {path: '**', component: PageNotFoundComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [JumbotronComponent, CommitteeComponent, CommentsComponent, CreditsComponent, ContactComponent, LoginComponent, PageNotFoundComponent]
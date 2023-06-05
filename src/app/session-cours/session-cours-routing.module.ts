import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionCoursComponent } from './listes_sc/session-cours.component';
import { CreateSessionComponent } from './create-session/create-session.component';

const routes: Routes = [{ path: 'liste-sc', component: SessionCoursComponent },
{ path: 'create-sc', component: CreateSessionComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionCoursRoutingModule { }

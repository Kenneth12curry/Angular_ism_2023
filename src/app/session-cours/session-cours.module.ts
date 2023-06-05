import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionCoursRoutingModule } from './session-cours-routing.module';
import { SessionCoursComponent } from './listes_sc/session-cours.component';
import { FormsModule } from '@angular/forms';
import { CreateSessionComponent } from './create-session/create-session.component';


@NgModule({
  declarations: [
    SessionCoursComponent,
    CreateSessionComponent,
   
  ],
  imports: [
    CommonModule,
    SessionCoursRoutingModule,
    FormsModule
  ]
})
export class SessionCoursModule { }

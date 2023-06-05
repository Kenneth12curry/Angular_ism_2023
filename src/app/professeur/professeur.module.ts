import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesseurRoutingModule } from './professeur-routing.module';
import { CreateProfesseursComponent } from './create-professeurs/create-professeurs.component';
import { ProfesseurComponent } from './listes-professeurs/professeur.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfesseurComponent,
    CreateProfesseursComponent
  ],
  imports: [
    CommonModule,
    ProfesseurRoutingModule,
    FormsModule
  ]
})
export class ProfesseurModule { }

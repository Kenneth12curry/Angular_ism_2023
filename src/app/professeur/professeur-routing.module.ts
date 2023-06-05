import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesseurComponent } from './listes-professeurs/professeur.component';
import { CreateProfesseursComponent } from './create-professeurs/create-professeurs.component';


const routes: Routes = [
  { path: 'liste-professeur', component: ProfesseurComponent},
  { path: 'create-professeur', component: CreateProfesseursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }

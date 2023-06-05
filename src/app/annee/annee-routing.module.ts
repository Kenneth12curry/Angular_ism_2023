import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnneeComponent } from './liste_annee/annee.component';
import { CreateAnneeComponent } from './create-annee/create-annee.component';


const routes: Routes = [
  { path: 'liste-annee', component: AnneeComponent },
  { path: 'create-annee', component: CreateAnneeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnneeRoutingModule { }

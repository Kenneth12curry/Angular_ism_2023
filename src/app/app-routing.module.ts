import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'classe', loadChildren: () => import('./classe/classe.module').then(m => m.ClasseModule) }, 
{ path: 'cours', loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule) }, 
{ path: 'etudiants', loadChildren: () => import('./etudiants/etudiants.module').then(m => m.EtudiantsModule) }, 
{ path: 'session-cours', loadChildren: () => import('./session-cours/session-cours.module').then(m => m.SessionCoursModule) }, 
{ path: 'layout', loadChildren: () => import('./template/layout-front/layout-front.module').then(m => m.LayoutFrontModule) },
{ path: 'professeur', loadChildren: () => import('./professeur/professeur.module').then(m => m.ProfesseurModule) },
{ path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
{ path: 'salles-cours', loadChildren: () => import('./salles-cours/salles-cours.module').then(m => m.SallesCoursModule) },
{ path: 'annee', loadChildren: () => import('./annee/annee.module').then(m => m.AnneeModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

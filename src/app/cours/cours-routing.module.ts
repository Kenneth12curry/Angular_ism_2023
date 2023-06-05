import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './listes_cours/cours.component';
import { PlanifierCoursComponent } from './planifier-cours/planifier-cours.component';
import { CreateCoursComponent } from './create-cours/create-cours.component';


const routes: Routes = [
  { path: 'liste-cours', component: CoursComponent },
  { path: 'pl-cours', component: PlanifierCoursComponent},
  { path: 'add-cours', component: CreateCoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }

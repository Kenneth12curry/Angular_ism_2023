import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SallesCoursComponent } from './liste-salles-cours/salles-cours.component';
import { CreateSallesCoursComponent } from './create-salles-cours/create-salles-cours.component';


const routes: Routes = [{ path: 'liste-salles', component: SallesCoursComponent },
  { path: 'create-salles', component: CreateSallesCoursComponent }
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SallesCoursRoutingModule { }

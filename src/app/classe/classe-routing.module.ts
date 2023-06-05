import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseComponent } from './classe.component';
import { CreateClasseComponent } from './create-classe/create-classe.component';
import { PlanificatonClasseComponent } from './planificaton-classe/planificaton-classe.component';

const routes: Routes = [
  {path: 'liste-classe', component: ClasseComponent},
  {path: 'add-classe', component:  CreateClasseComponent},
  {path: 'pl-classe', component: PlanificatonClasseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule {}

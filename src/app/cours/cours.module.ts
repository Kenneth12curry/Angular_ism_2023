import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './listes_cours/cours.component';
import { PlanifierCoursComponent } from './planifier-cours/planifier-cours.component';
import { FormsModule } from '@angular/forms';
import { CreateCoursComponent } from './create-cours/create-cours.component';


//Tous les composants deans le exports seront visible dans toute l'application
@NgModule({
  declarations: [
    CoursComponent,
    PlanifierCoursComponent,
    CreateCoursComponent
 
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule
  ],
  exports:[
    CoursComponent,
    PlanifierCoursComponent
  ]
})
export class CoursModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SallesCoursRoutingModule } from './salles-cours-routing.module';

import { CreateSallesCoursComponent } from './create-salles-cours/create-salles-cours.component';
import { SallesCoursComponent } from './liste-salles-cours/salles-cours.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SallesCoursComponent,
    CreateSallesCoursComponent
  ],
  imports: [
    CommonModule,
    SallesCoursRoutingModule,
    FormsModule
  ]
})
export class SallesCoursModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './listes_etudiants/etudiants.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EtudiantsComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    FormsModule
  ],
  exports:[
    EtudiantsComponent
  ]
})
export class EtudiantsModule { }

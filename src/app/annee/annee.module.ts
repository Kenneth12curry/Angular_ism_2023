import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnneeRoutingModule } from './annee-routing.module';

import { CreateAnneeComponent } from './create-annee/create-annee.component';
import { AnneeComponent } from './liste_annee/annee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnneeComponent,
    CreateAnneeComponent
  ],
  imports: [
    CommonModule,
    AnneeRoutingModule,
    FormsModule
  ]
})
export class AnneeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutFrontRoutingModule } from './layout-front-routing.module';
import { LayoutFrontComponent } from './layout-front.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

//Comoosants accessible de partout dans l'application
@NgModule({
  declarations: [
    LayoutFrontComponent,
    NavComponent,
    FooterComponent,
 
  ],
  imports: [
    CommonModule,
    LayoutFrontRoutingModule
  ],
  exports:[
    NavComponent,
    FooterComponent
  ]
  
})
export class LayoutFrontModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseRoutingModule } from './classe-routing.module';
import { ClasseComponent } from './classe.component';
import { CreateClasseComponent } from './create-classe/create-classe.component';
import { PlanificatonClasseComponent } from './planificaton-classe/planificaton-classe.component';
import { LayoutFrontModule } from "../template/layout-front/layout-front.module";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ClasseComponent,
        CreateClasseComponent,
        PlanificatonClasseComponent
    ],
    imports: [
        CommonModule,
        ClasseRoutingModule,
        LayoutFrontModule,
        FormsModule
    ],
    exports:[
        CreateClasseComponent,
        PlanificatonClasseComponent  
    ]
})
export class ClasseModule { }

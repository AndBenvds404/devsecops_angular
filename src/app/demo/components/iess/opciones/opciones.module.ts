import { NgModule } from "@angular/core";
import { OpcionesComponent } from "./opciones.component" 
import { OpcionesRoutingModule } from "./opciones-routing.module";

import {ButtonModule} from 'primeng/button';
@NgModule({
	imports: [
        OpcionesRoutingModule,
		ButtonModule
		
		
	],
	declarations: [OpcionesComponent]
})
export class OpcionesModule { }
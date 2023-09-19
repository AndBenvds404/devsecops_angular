import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OpcionesComponent } from './opciones.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OpcionesComponent }
	])],
	exports: [RouterModule]
})
export class OpcionesRoutingModule { }

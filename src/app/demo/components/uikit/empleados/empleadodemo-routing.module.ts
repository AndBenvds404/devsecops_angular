import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpleadoDemoComponent } from './empleadodemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: EmpleadoDemoComponent }
	])],
	exports: [RouterModule]
})
export class EmpleadoDemoRoutingModule { }

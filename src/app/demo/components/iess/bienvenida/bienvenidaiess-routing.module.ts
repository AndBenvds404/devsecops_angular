import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { bienvenidaiessComponent } from './bienvenidaiess.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: bienvenidaiessComponent }
	])],
	exports: [RouterModule]
})
export class bienvenidaiessRoutingModule { }

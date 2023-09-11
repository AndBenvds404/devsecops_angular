import { NgModule } from "@angular/core";
import { bienvenidaiessComponent } from "./bienvenidaiess.component" 
import {bienvenidaiessRoutingModule} from "./bienvenidaiess-routing.module"

import {ButtonModule} from 'primeng/button';
@NgModule({
	imports: [
        bienvenidaiessRoutingModule, 
		ButtonModule
		
		
	],
	declarations: [bienvenidaiessComponent]
})
export class BienvenidaiessModule { }
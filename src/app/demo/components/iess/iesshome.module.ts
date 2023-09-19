import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BienvenidaRoutingModule} from './iesshome-routing.module';
import { OpcionesRoutingModule } from './opciones/opciones-routing.module';

@NgModule({
    imports: [
        CommonModule,
        BienvenidaRoutingModule,
        OpcionesRoutingModule
    ],      
})

export class IessHomeModule { }
  
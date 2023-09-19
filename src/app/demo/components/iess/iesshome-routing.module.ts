import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { bienvenidaiessComponent } from './bienvenida/bienvenidaiess.component';
import { OpcionesComponent } from './opciones/opciones.component';

@NgModule({
    imports: [RouterModule.forChild([

        { path: '', data: { breadcrumb: 'bienvenido' }, loadChildren: () => import('./bienvenida/bienvenidaiess.module').then(m => m.BienvenidaiessModule) },
        { path: 'opciones', data: { breadcrumb: 'opciones' }, loadChildren: () => import('./opciones/opciones.module').then(m => m.OpcionesModule) },


        
        
                ])],
    exports: [RouterModule]
})
export class BienvenidaRoutingModule { }

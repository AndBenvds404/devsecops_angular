import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        
        
        { path: 'empresas', data: { breadcrumb: 'Empresas' }, loadChildren: () => import('./table/tabledemo.module').then(m => m.TableDemoModule) },
        { path: 'departamentos', data: { breadcrumb: 'Departamentos' }, loadChildren: () => import('./table/tabledemo.module').then(m => m.TableDemoModule) },  
        { path: 'empleados', data: { breadcrumb: 'Empleado' }, loadChildren: () => import('./table/tabledemo.module').then(m => m.TableDemoModule) },
        { path: 'emp', data: { breadcrumb: 'Empl' }, loadChildren: () => import('./empleados/empleadodemo.module').then(m => m.EmpleadoDemoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UIkitRoutingModule { }

import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { DashboardComponent } from './dashboard.component';



import { DashboardsRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        
        MenuModule,
        TableModule,
       
        DashboardsRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }

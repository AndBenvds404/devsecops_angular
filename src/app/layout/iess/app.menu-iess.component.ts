import { OnInit } from '@angular/core';
import { Component } from '@angular/core'
import { LayoutService } from '../service/app.layout.service';



@Component({
    selector: 'app-menuiess',
    templateUrl: './app.menu-iess.component.html'
})
export class AppMenuIessComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                
                label: 'Home',
                items: [
                    
                    { label: 'Empresas', icon: 'pi pi-building', routerLink: ['/uikit/empresas'] },
                    { label: 'Departamentos', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/departamentos'] },
                    { label: 'Empleados', icon: 'pi pi-users', routerLink: ['/uikit/empleados'] },
                    { label: 'EmpleadoTest  ', icon: 'pi pi-users', routerLink: ['/uikit/emp'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                    

                ],
                
            }
            
        ];
    }
}

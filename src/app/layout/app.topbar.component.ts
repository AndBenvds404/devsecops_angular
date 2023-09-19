import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import { MenuModule } from 'primeng/menu';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakService } from 'keycloak-angular';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    providers: [MenuModule, BrowserModule, KeycloakService]
})

export class AppTopBarComponent implements OnInit {

    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private keycloakService: KeycloakService) {}

    ngOnInit() {
        this.keycloakService.init().then((authenticated) => {
            if (authenticated) {
                // El usuario está autenticado, puedes llamar a login aquí si es necesario
                this.keycloakService.login();
            }
        }).catch(error => console.error('Error al inicializar Keycloak', error));
    }

    // Método para iniciar sesión con Keycloak
    login() {
        if (this.keycloakService.getKeycloakInstance()) {
            this.keycloakService.login();
        } else {
            console.error('KeycloakService no se ha inicializado correctamente.');
        }
        this.keycloakService.login()
    }
}

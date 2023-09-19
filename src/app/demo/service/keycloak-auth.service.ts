/*import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KeycloakAuthService {

  constructor(private keycloak: KeycloakService, private router: Router) { }

  async login() {
    try {
      await this.keycloak.login();
      this.router.navigate(['']); // Ruta protegida a la que redirigir después de iniciar sesión
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  }

  logout() {
    this.keycloak.logout();
  }
}*/
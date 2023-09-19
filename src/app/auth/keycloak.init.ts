import {  KeycloakService } from 'keycloak-angular';


export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'keycloak-angular-auth',
        clientId: 'Angular-auth'
      },
      initOptions: {
        onLoad: 'check-sso',      
      },
      loadUserProfileAtStartUp: true
    });
}



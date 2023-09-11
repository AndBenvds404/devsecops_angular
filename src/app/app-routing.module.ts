import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {bienvenidaiessComponent} from './demo/components/iess/bienvenida/bienvenidaiess.component'
import { AppTopBarComponent } from './layout/app.topbar.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    
                    { path: '', loadChildren: () => import('./demo/components/iess/bienvenida/bienvenidaiess.module').then(m => m.BienvenidaiessModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'bienvenido', component:bienvenidaiessComponent}
                   
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) }, 
            { path: 'notfound', component: NotfoundComponent },
            { path: 'asd', component:bienvenidaiessComponent},
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

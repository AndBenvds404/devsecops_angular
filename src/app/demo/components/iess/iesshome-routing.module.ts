import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { bienvenidaiessComponent } from './bienvenida/bienvenidaiess.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: bienvenidaiessComponent }
    ])],
    exports: [RouterModule]
})
export class BienvenidaRoutingModule { }

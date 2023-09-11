import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ButtonModule} from 'primeng/button';

@Component({
    selector: 'app-home',
    templateUrl: './bienvenidaiess.component.html',
},

)
export class bienvenidaiessComponent  {
    
    constructor(public router: Router ){
    }
 
}

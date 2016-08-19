import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Sidebar} from "./shared/sidebar.component";


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.template.html',
    styleUrls: ['./dashboard.styles.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES, Sidebar]
})



export class Dashboard {
    constructor() {

    }

}
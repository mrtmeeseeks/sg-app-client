import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Sidebar } from "./shared/sidebar/sidebar.component";
import { HomeNavbar } from './shared/navbar/home-navbar.component';
@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.template.html',
    styleUrls: ['./dashboard.styles.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES, Sidebar, HomeNavbar]
})



export class Dashboard {
    constructor() {

    }

}
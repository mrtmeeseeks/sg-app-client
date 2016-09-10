import  { Component, ViewEncapsulation} from '@angular/core';
import {NavRoute} from "./navroute.model";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.template.html',
    styleUrls:['./navbar.styles.css'],
    encapsulation: ViewEncapsulation.None
})

export class HomeNavbar {
    public navbarRoutes:Array<NavRoute>;
    constructor() {
        this.navbarRoutes = [
            {
                name: 'Home',
                url: '/home'
            },
            {
                name: 'Members',
                url: '/members'
            },
            {
                name: 'Clubs',
                url: '/clubs'
            },
            {
                name: 'Internships',
                url: '/internships'
            },
            {
                name: 'Applications',
                url: '/applications'
            },
            {
                name: 'Evaluations',
                url: '/evaluations'
            }
        ]
    }
}
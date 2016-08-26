import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import {NavRoute} from "../../../../frontend/shared/navbar/navroute.model";//todo maybe move NavRoute to common?


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'sidebar',
    templateUrl: 'sidebar.template.html',
    styleUrls: ['sidebar.styles.css'],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class Sidebar {

    public sidebarRoutes:Array<NavRoute>;
    constructor() {
        this.sidebarRoutes = [
            {
                name: 'Posts',
                url: './posts'
            },
            {
                name: 'Professors',
                url: './professors'
            },
            {
                name: 'Clubs',
                url: './clubs'
            },
            {
                name: 'Applications',
                url: './applications'
            },
            {
                name: 'Internships',
                url: './internships'
            },

        ]
    }



isActive = false;
    showMenu: string = '';




    expand() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
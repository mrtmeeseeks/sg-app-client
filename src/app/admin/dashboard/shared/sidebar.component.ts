import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'sidebar',
    templateUrl: 'sidebar.template.html',
    styleUrls: ['sidebar.styles.css'],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class Sidebar {
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
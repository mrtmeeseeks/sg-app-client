import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AdminGuard }  from './adminGuard';

@Component({
    selector: 'admin',
    directives: [
        ...ROUTER_DIRECTIVES
    ],
    template: `
    <router-outlet></router-outlet>
  `
})
export class Admin {
    constructor() {

    }

    ngOnInit() {
       
    }

}

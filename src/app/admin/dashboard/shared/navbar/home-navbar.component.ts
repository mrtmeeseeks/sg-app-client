/**
 * Created by hgeorgiev on 8/22/16.
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../../user.service";


@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [UserService],
    selector: 'home-navbar',
    templateUrl: 'home-navbar.template.html',
})

export class HomeNavbar {
    constructor(private _userService:UserService, private _router:Router) {
        
    }
    
    logout() {
        this._userService.logout();
        this._router.navigate(['/']);
    }


}
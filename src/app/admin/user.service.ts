// /**
//  * Created by hgeorgiev on 8/18/16.
//  */
// //injectorValue.get(API_ENDPOINT);
//


import {Injectable, Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class UserService {
    private loggedIn = false;


    constructor(private http:Http , @Inject('ApiEndpoint') private api: string) {
        localStorage.getItem('auth_token');
    }

    login(email, password) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                this.api + "v1/admins_sessions",
                JSON.stringify({email, password}),
                {headers}
            )
            .map(res => res.json())
            .map((res) => {

                if (res.success) {
                    localStorage.setItem('auth_token', res.auth_token);
                    localStorage.setItem('role', res.role);
                    this.loggedIn = true;
                }
                
                return res.success;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('role');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}

















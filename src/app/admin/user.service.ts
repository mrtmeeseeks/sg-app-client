// /**
//  * Created by hgeorgiev on 8/18/16.
//  */
// //injectorValue.get(API_ENDPOINT);
//


import {Injectable, Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {



    constructor(private http:Http , @Inject('ApiEndpoint') private api: string) {
        localStorage.getItem('auth_token');
    }


    login(email, password) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                this.api + "/admins_sessions",
                JSON.stringify({email, password}),
                {headers: headers}
            )
            .toPromise()
            .then((res) => {

                let body = res.json();
                localStorage.setItem('auth_token', body.auth_token);
                localStorage.setItem('role', body.role);


                return body;
            })
            .catch(this.handleError);
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('role');
    }

    isLoggedIn():boolean {
        let result = localStorage.getItem('auth_token') ? true : false;
        return result;

    }


    private handleError(error: any) {
        let body = error.json().extract;
        return Promise.reject(body.message || body);
    }
}

















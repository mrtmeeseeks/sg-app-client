
import { Injectable, Inject } from '@angular/core';
import { Http,  URLSearchParams  } from '@angular/http';
import { Professor } from './professor.model';
import { Listing } from '../../../common/listing.model'
import { QueryConstructor} from '../../../common/queryconstructor'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfessorsService {
    
    private professorsUrl = this.api + '/professors' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {

    }

    query(top:number , skip:number) {
        return this.http.get(this.professorsUrl, {search:  QueryConstructor(top, skip)})
            .toPromise()
            .then(res => { let body = res.json()
            console.log(body);

            } )
            .catch(this.handleError);
    }

    get(professor: Professor) {
        return this.http.get(this.professorsUrl + `${professor.id}`)
            .toPromise()
            .then(res => res.json() as Professor)
            .catch(this.handleError);
    }





}
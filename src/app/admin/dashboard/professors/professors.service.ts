
import { Injectable, Inject } from '@angular/core';
import { Http  } from '@angular/http';
import { Professor } from './professor.model';
import { Listing } from '../../../common/listing.model'
import { QueryConstructor} from '../../../common/queryconstructor'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfessorsService {
    
    private professorsUrl = this.api + '/professors' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {

    }

    query(page:number, itemsPerPage: number) {
        return this.http.get(this.professorsUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Professor>();

                listing.collection = body.Items as Professor[] ;
                listing.count = body.Count;

                return listing;
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
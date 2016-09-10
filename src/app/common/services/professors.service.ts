
import { Injectable, Inject } from '@angular/core';
import { Http  } from '@angular/http';
import { Listing } from '../listing.model';
import {QueryConstructor} from '../queryconstructor';
import 'rxjs/add/operator/toPromise';
import {Professor} from "../models/professor.model";
import {Evaluation} from "../models/evaluation.model";

@Injectable()
export class ProfessorsService {
    
    private professorsUrl = this.api + '/professors' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {

    }

    query(page:number, itemsPerPage: number, department?:string ) {
        let params = QueryConstructor(page, itemsPerPage);
        console.log(department);
        if(department) params.set('department' , department);

        return this.http.get(this.professorsUrl, {search:params })
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

    get(id:number) {
        return this.http.get(this.professorsUrl + `/${id}`)
            .toPromise()
            .then(res => res.json() as Professor)
            .catch(this.handleError);
    }

    departments() {
        return this.http.get(this.professorsUrl +'/departments')
            .toPromise()
            .then(res => res.json() as Array<string>)
            .catch(this.handleError);

    }
    






}
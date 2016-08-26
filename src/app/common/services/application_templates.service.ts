

import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Listing } from '../listing.model'
import { QueryConstructor} from '../queryconstructor'
import 'rxjs/add/operator/toPromise';
import {ApplicationTemplate} from "../models/application_template.model";

@Injectable()
export class ApplicationTemplatesService {

    private applicationTemplatesUrl = this.api + '/application_templates' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {
    }

    query(page:number, itemsPerPage: number) {
        return this.http.get(this.applicationTemplatesUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<ApplicationTemplate>();

                listing.collection = body.Items as ApplicationTemplate[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }

    get(id:number) {
        return this.http.get(this.applicationTemplatesUrl + `/${id}`)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    
}
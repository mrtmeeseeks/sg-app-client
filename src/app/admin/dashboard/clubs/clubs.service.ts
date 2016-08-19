/**
 * Created by hgeorgiev on 8/19/16.
 */

import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Club } from './club.model';
import { Listing } from '../../../common/listing.model'
import { QueryConstructor} from '../../../common/queryconstructor'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClubsService {

    private clubsUrl = this.api + '/clubs' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {
    }

    query(page:number, itemsPerPage: number) {
        return this.http.get(this.clubsUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Club>();

                listing.collection = body.Items as Club[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }

    get(club: Club) {
        return this.http.get(this.clubsUrl + `/${club.id}`)
            .toPromise()
            .then(res => res.json() as Club)
            .catch(this.handleError);
    }





}
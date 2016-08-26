/**
 * Created by hgeorgiev on 8/26/16.
 */


import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Listing } from '../listing.model'
import { QueryConstructor} from '../queryconstructor'
import 'rxjs/add/operator/toPromise';
import {Post} from "../models/post.model";


@Injectable()
export class PostsService {

    private postsUrl = this.api + '/posts' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {
    }

    query(page:number, itemsPerPage: number) {
        return this.http.get(this.postsUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Post>();

                listing.collection = body.Items as Post[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }

    get(id:number) {
        return this.http.get(this.postsUrl + `/${id}`)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }


}
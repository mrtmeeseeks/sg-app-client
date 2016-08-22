
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Listing } from '../listing.model'
import 'rxjs/add/operator/toPromise';
import {TeamMember} from "../models/team_member.model";
import {QueryConstructor} from "../queryconstructor";

@Injectable()
export class TeamMembersService {

    private teamMembersUrl = this.api + '/team_members' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {
    }

    query(page:number, itemsPerPage: number) {
        return this.http.get(this.teamMembersUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<TeamMember>();

                listing.collection = body.Items as TeamMember[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }

    get(teamMember: TeamMember) {
        return this.http.get(this.teamMembersUrl + `/${teamMember.id}`)
            .toPromise()
            .then(res => res.json() as TeamMember)
            .catch(this.handleError);
    }





}
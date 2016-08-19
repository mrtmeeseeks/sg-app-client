/**
 * Created by hgeorgiev on 8/20/16.
 */
/**
 * Created by hgeorgiev on 8/19/16.
 */
import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {TeamMembersService} from "./team_members.service";
import {TeamMember} from "./team_member.model";
import {Listing} from "../../../common/listing.model";

@Component({
    selector: 'clubs',
    template:require('./team_members.template.html'),
    directives: [PAGINATION_DIRECTIVES],
    providers: [TeamMembersService],
    encapsulation: ViewEncapsulation.none,
    styleUrls: ['./team_members.styles.css']

})

export class TeamMembers implements OnInit{
    listing: Listing<TeamMember>;
    public currentPage:number = 1;

    constructor(private service:TeamMembersService) {

    }

    ngOnInit() {
        this.listing = new Listing<TeamMember>();
        this.loadTeamMembers(1, 10);

    }



    public pageChanged(event:any):void {
        this.loadTeamMembers(event.page, event.itemsPerPage);
    };


    private loadTeamMembers(page:number, itemsPerPage: number) {

        this.service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }


}
import {Component, OnInit} from '@angular/core';
import {TeamMembersService} from "../../common/services/team_members.service";
import {TeamMember} from "../../common/models/team_member.model";
import {Listing} from "../../common/listing.model";
import {HomeFooter} from "../shared/footer/footer.component";
import {HomeNavbar} from "../shared/navbar/navbar.component";


@Component({
    selector: 'team-members',
    providers: [TeamMembersService],
    directives: [HomeFooter, HomeNavbar],
    templateUrl: './team_members.template.html'
    
})

export class FrontTeamMembers implements OnInit{
    listing: Listing<TeamMember>;


    constructor(private _service:TeamMembersService) {

    }

    ngOnInit() {
        this.listing = new Listing<TeamMember>();
        this._service.query(1,999).then(listing => this.listing = listing);//load all

    }

    
}
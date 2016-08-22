import {Component, OnInit} from '@angular/core';

import {Listing} from "../../common/listing.model";
import {HomeFooter} from "../shared/footer/footer.component";
import {HomeNavbar} from "../shared/navbar/navbar.component";
import {InternshipsService} from "../../common/services/internships.service";
import {Internship} from "../../common/models/internship.model";



@Component({
    selector: 'team-members',
    providers: [InternshipsService],
    directives: [HomeFooter, HomeNavbar],
    templateUrl: './clubs.template.html'

})

export class FrontInternships implements OnInit{
    listing: Listing<Internship>;


    constructor(private _service:InternshipsService) {

    }

    ngOnInit() {
        this.listing = new Listing<Internship>();
        this._service.query(1,999).then(listing => this.listing = listing);//load all

    }


}
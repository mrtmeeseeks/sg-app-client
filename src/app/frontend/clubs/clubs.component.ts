import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {Listing} from "../../common/listing.model";
import {HomeFooter} from "../shared/footer/footer.component";
import {HomeNavbar} from "../shared/navbar/navbar.component";
import {Club} from "../../common/models/club.model";
import {ClubsService} from "../../common/services/clubs.service";


@Component({
    selector: 'clubs',
    providers: [ClubsService],
    directives: [HomeFooter, HomeNavbar],
    templateUrl: './clubs.template.html',
    styleUrls: ['./clubs.styles.css'],
    encapsulation: ViewEncapsulation.Emulated

})

export class FrontClubs implements OnInit{
    listing: Listing<Club>;


    constructor(private _service:ClubsService) {

    }

    ngOnInit() {
        this.listing = new Listing<Club>();
        this._service.query(1,999).then(listing => this.listing = listing);//load all

    }


}
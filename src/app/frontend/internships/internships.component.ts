import {Component, OnInit} from '@angular/core';

import {Listing} from "../../common/listing.model";
import {HomeFooter} from "../shared/footer/footer.component";
import {HomeNavbar} from "../shared/navbar/navbar.component";
import {InternshipsService} from "../../common/services/internships.service";
import {Internship} from "../../common/models/internship.model";
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";



@Component({
    selector: 'team-members',
    providers: [InternshipsService],
    directives: [HomeFooter, HomeNavbar, PAGINATION_DIRECTIVES],
    templateUrl: './internships.template.html'

})

export class FrontInternships implements OnInit{
    listing: Listing<Internship>;
    public currentPage:number = 1;

    constructor(private _service:InternshipsService) {

    }

    ngOnInit() {
        this.listing = new Listing<Internship>();
        this.loadInternships(1, 10);

    };



    public pageChanged(event:any):void {
        this.loadInternships(event.page, event.itemsPerPage);
    };


    private loadInternships(page:number, itemsPerPage: number) {

        this._service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }


}
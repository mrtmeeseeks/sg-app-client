/**
 * Created by hgeorgiev on 8/19/16.
 */
import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {ClubsService} from "./clubs.service";
import {Club} from "./club.model";
import {Listing} from "../../../common/listing.model";

@Component({
    selector: 'clubs',
    template:require('./clubs.template.html'),
    directives: [PAGINATION_DIRECTIVES],
    providers: [ClubsService],
    encapsulation: ViewEncapsulation.none,
    styleUrls: ['./clubs.styles.css']

})

export class Clubs implements OnInit{
    listing: Listing<Club>;
    public currentPage:number = 1;

    constructor(private service:ClubsService) {

    }

    ngOnInit() {
        this.listing = new Listing<Club>();
        this.loadClubs(1, 10);

    }



    public pageChanged(event:any):void {
        this.loadClubs(event.page, event.itemsPerPage);
    };


    private loadClubs(page:number, itemsPerPage: number) {

        this.service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }


}
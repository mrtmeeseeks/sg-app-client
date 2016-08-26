/**
 * Created by hgeorgiev on 8/24/16.
 */

import {Component, OnInit,ViewEncapsulation} from "@angular/core";
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {Listing} from "../../../common/listing.model";
import {ApplicationTemplate} from "../../../common/models/application_template.model";
import {ApplicationTemplatesService} from "../../../common/services/application_templates.service";


@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [ApplicationTemplatesService],
    directives: [PAGINATION_DIRECTIVES],
    template: require('./application_templates.template.html'),

})

export class AdminApplicationTemplates implements OnInit{
    listing: Listing<ApplicationTemplate>;
    public currentPage:number = 1;

    constructor(private _service:ApplicationTemplatesService) {

    }

    ngOnInit() {
        this.listing = new Listing<ApplicationTemplate>();
        this.loadInternships(1, 10);

    };



    public pageChanged(event:any):void {
        this.loadInternships(event.page, event.itemsPerPage);
    };


    private loadInternships(page:number, itemsPerPage: number) {
        this._service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }
}
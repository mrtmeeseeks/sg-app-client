import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {Listing} from "../../common/listing.model";
import {HomeFooter} from "../shared/footer/footer.component";
import {HomeNavbar} from "../shared/navbar/navbar.component";
import {ApplicationTemplate} from "../../common/models/application_template.model";
import {ApplicationTemplatesService} from "../../common/services/application_templates.service";
import {NewApplicationSubmission} from "./new_application_submission.component";



@Component({
    providers: [ApplicationTemplatesService],
    directives: [HomeFooter, HomeNavbar, NewApplicationSubmission ],
    templateUrl: './application_templates.template.html',
    encapsulation: ViewEncapsulation.Emulated

})

export class FrontApplicationTemplates implements OnInit{
    listing: Listing<ApplicationTemplate>;
    
    


    constructor(private _service:ApplicationTemplatesService) {

    }

    ngOnInit() {
        this.listing = new Listing<ApplicationTemplate>();
        this._service.query(1,999).then(listing => this.listing = listing);//load all

    }


}
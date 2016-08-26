/**
 * Created by hgeorgiev on 8/24/16.
 */
import {Component, Input} from '@angular/core';
import {ApplicationSubmission} from "../../../../common/models/application_submission.model";
import {Listing} from "../../../../common/listing.model";
import {ApplicationSubmissionsService} from "../../../../common/services/application_submissions.service";

@Component({
    selector: 'admin-application-submissions',
    providers: [ApplicationSubmissionsService],
    templateUrl: './application_submissions.template.html'

})

export class AdminApplicationSubmissions {
    @Input() template_id:number;
    listing:Listing<ApplicationSubmission>;
    public currentPage:number = 1;


    constructor(private _service:ApplicationSubmissionsService) {
        console.log('asd');
        this.listing = new Listing<ApplicationSubmission>();
    }

    ngOnChanges(changes:any):void {
        console.log(changes);
        if(changes.template_id.currentValue != undefined) {
            this.template_id = changes.template_id.currentValue;
            this.loadEvaluations(1, 10);
        }
    }


    public pageChanged(event:any):void {
        this.loadEvaluations(event.page, event.itemsPerPage);
    };


    private loadEvaluations(page:number, itemsPerPage: number) {
        this._service.query(page,itemsPerPage, this.template_id ).then(listing => this.listing = listing);
    }


}

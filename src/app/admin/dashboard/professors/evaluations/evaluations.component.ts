import {Component, ViewEncapsulation , Input, OnInit} from '@angular/core';
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {Evaluation} from "../../../../common/models/evaluation.model";
import {Listing} from "../../../../common/listing.model";
import {EvaluationsService} from "../../../../common/services/evaluations.service";


@Component({
    selector: 'admin-evaluations',
    encapsulation: ViewEncapsulation.None,
    providers: [EvaluationsService],
    directives: [PAGINATION_DIRECTIVES],
    template: require('./evaluations.template.html'),
})
export class AdminEvaluations implements OnInit{
    @Input() professor_id;
    listing: Listing<Evaluation>;
    public currentPage:number = 1;

    constructor(private _service:EvaluationsService) {
        this.listing = new Listing<Evaluation>();
    }



    ngOnChanges(changes:any):void {
        if(changes.professor_id.currentValue != undefined) {
            this.professor_id = changes.professor_id.currentValue;
            this.loadEvaluations(1, 10);
        }
    }




    public pageChanged(event:any):void {
        this.loadEvaluations(event.page, event.itemsPerPage);
    };


    private loadEvaluations(page:number, itemsPerPage: number) {

        this._service.query(page,itemsPerPage, this.professor_id ).then(listing => this.listing = listing);
    }


}

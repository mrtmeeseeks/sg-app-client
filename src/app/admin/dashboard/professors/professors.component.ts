import {Component, ViewEncapsulation , OnInit} from '@angular/core';
import {ProfessorsService} from './professors.service'
import {Professor} from './professor.model'
import {Listing} from '../../../common/listing.model'
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";

@Component({
    selector: 'professors',
    encapsulation: ViewEncapsulation.None,
    directives: [PAGINATION_DIRECTIVES],
    providers: [ProfessorsService],
    styleUrls: ['./professors.styles.css'],
    template: require('./professors.template.html'),
})
export class Professors implements  OnInit{
     listing: Listing<Professor>;
      public currentPage:number = 1;

    constructor(private service:ProfessorsService) {
     
    }
    
    ngOnInit() {
        this.listing = new Listing<Professor>();
        this.loadProfessors(1, 10);
       
    }
    
   


    public pageChanged(event:any):void {
        this.loadProfessors(event.page, event.itemsPerPage);
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };


    private loadProfessors(page:number, itemsPerPage: number) {
        
        this.service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }

   
}

import {Component, ViewEncapsulation , OnInit} from '@angular/core';
import {Listing} from '../../../common/listing.model'
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {Professor} from "../../../common/models/professor.model";
import {ProfessorsService} from "../../../common/services/professors.service";
import {AdminProfessorDepartments} from "./departments/departments.component";

@Component({
    encapsulation: ViewEncapsulation.None,
    directives: [PAGINATION_DIRECTIVES, AdminProfessorDepartments],
    providers: [ProfessorsService],
    styleUrls: ['./professors.styles.css'],
    template: require('./professors.template.html'),
})
export class AdminProfessors implements OnInit{
     listing: Listing<Professor>;
      public currentPage:number = 1;

    constructor(private _service:ProfessorsService) {
     
    }
    
    ngOnInit() {
        this.listing = new Listing<Professor>();
        this.loadProfessors(1, 10);
       
    }
    
   
    
    public pageChanged(event:any):void {
        this.loadProfessors(event.page, event.itemsPerPage);
    };

    public filterDepts(department:string):void {
        this.loadProfessors(1,10, department);
    }


    private loadProfessors(page:number, itemsPerPage: number, department?:string) {
        this._service.query(page,itemsPerPage, department).then(listing => this.listing = listing);
    }

   
}

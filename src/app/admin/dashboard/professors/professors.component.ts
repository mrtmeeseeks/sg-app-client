import {Component, ViewEncapsulation , OnInit} from '@angular/core';
import {ProfessorsService} from './professors.service'
import {Professor} from './professor.model'

@Component({
    selector: 'professors',
    encapsulation: ViewEncapsulation.None,
    directives: [],
    providers: [ProfessorsService],
    styleUrls: ['./professors.styles.css'],
    template: require('./professors.template.html'),
})
export class Professors implements  OnInit{
     professors: Professor[];

    constructor(private service:ProfessorsService) {
     
    }
    
    ngOnInit() {
        this.service.query(10, 0).then(professors => this.professors = professors);
    }

   
}

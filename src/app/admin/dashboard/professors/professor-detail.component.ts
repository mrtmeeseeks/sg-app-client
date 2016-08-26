import {Component, ViewEncapsulation , OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Professor} from "../../../common/models/professor.model";
import {ProfessorsService} from "../../../common/services/professors.service";
import {AdminEvaluations} from "./evaluations/evaluations.component";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [ProfessorsService],
    directives: [AdminEvaluations],
    styleUrls: ['./professors.styles.css'],
    template: require('./professor-detail.template.html'),
})
export class AdminProfessorDetail implements OnInit, OnDestroy{
    public sub: any;
    professor:Professor;

    constructor(private _profService:ProfessorsService, private _route:ActivatedRoute) {
        this.professor = new Professor();
    }


    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.loadProfessor(params['id'])
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }



 

    private loadProfessor(id:number) {
        this._profService.get(id).then(professor => this.professor = professor);
    }


}

import {Component, ViewEncapsulation , Input, OnInit} from '@angular/core';
import {Evaluation} from "../../../../common/models/evaluation.model";
import {EvaluationsService} from "../../../../common/services/evaluations.service";



@Component({
    selector: 'evaluations',
    encapsulation: ViewEncapsulation.None,
    providers: [EvaluationsService],
    template: require('./evaluations.template.html'),
})
export class AdminEvaluations implements OnInit{
    selectedEvaluation:Evaluation;
    @Input() evaluations: Array<Evaluation>;

    constructor(private _service:EvaluationsService) {

    }

    ngOnInit() {

    }





}

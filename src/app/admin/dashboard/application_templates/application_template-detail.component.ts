/**
 * Created by hgeorgiev on 8/24/16.
 */
import {Component, ViewEncapsulation , OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApplicationTemplate} from "../../../common/models/application_template.model";
import {ApplicationTemplatesService} from "../../../common/services/application_templates.service";
import {AdminApplicationSubmissions} from "./application_submissions/application_submissions.component";


@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [ApplicationTemplatesService],
    directives: [AdminApplicationSubmissions],
    //styleUrls: ['./application_templates.styles.css'],
    template: require('./application_template-detail.template.html'),
})
export class AdminApplicationTemplateDetail implements OnInit, OnDestroy{
    sub: any;
    application_template:ApplicationTemplate;

    constructor(private _service:ApplicationTemplatesService, private _route:ActivatedRoute) {
        this.application_template = new ApplicationTemplate();
    }


    ngOnInit() {

        this.sub = this._route.params.subscribe(params => {
            this.loadApplicationTemplate(params['id'])
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    

    private loadApplicationTemplate(id:number) {
        this._service.get(id).then(application_template => this.application_template = application_template);
    }


}

import {Component, OnChanges Input, Inject, ViewEncapsulation} from '@angular/core';

import {ApplicationTemplatesService} from "../../common/services/application_templates.service";
import {ApplicationTemplate} from "../../common/models/application_template.model";
import {FORM_DIRECTIVES} from "@angular/forms";
import {CORE_DIRECTIVES, NgStyle, NgClass} from "@angular/common";
import {FILE_UPLOAD_DIRECTIVES, FileUploader, FileItem} from "ng2-file-upload/ng2-file-upload";
import {ApplicationSubmissionsService} from "../../common/services/application_submissions.service";


@Component({
    selector: 'new-application-submission',
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: 'new_application_submission.template.html',
    providers: [ApplicationSubmissionsService],
    styleUrls: ['new_application_submission.styles.css'],
    directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})


export class NewApplicationSubmission {
    @Input() template: ApplicationTemplate;
    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;

    constructor(private _templateService:ApplicationTemplatesService, private _submissionService: ApplicationSubmissionsService, @Inject('ApiEndpoint') private api: string ) {
        this.template = new ApplicationTemplate();
    }
    
    
    ngOnChanges(changes:any):void {
        let templateChange:ApplicationTemplate = changes.template.currentValue;
        if (templateChange) {
            this._templateService.get(templateChange.id).then(template => {
                    this.template = template;
                    this.uploader = new FileUploader({url: this.api + `/application_templates/${this.template.id}/application_submissions`});
                }
            );
        }



    }


    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public sendSubmission(item:FileItem) {

         item.alias = "application_submission[document]";
         item.upload();
        this.uploader.onCompleteAll = () => {

            this.uploader.clearQueue();
        };

    }





}
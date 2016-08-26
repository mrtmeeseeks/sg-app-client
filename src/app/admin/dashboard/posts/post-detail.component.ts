/**
 * Created by hgeorgiev on 8/26/16.
 */
import {Component} from '@angular/core';
import {CKEditor} from "ng2-ckeditor";
import './ckeditor.loader.ts';

@Component({

    directives: [CKEditor],
    templateUrl:'./post-detail.template.html'
})
export class AdminPostDetail{

    constructor(){
        this.ckeditorContent = `<p>My HTML</p>`;
    }
}
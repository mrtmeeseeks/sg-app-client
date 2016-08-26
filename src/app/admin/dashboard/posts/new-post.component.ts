///<reference path="../../../../../node_modules/@angular/common/src/directives/core_directives.d.ts"/>
/**
 * Created by hgeorgiev on 8/26/16.
 */
import {Component} from '@angular/core';
import {Post} from "../../../common/models/post.model";
import {CKEditor} from "ng2-ckeditor";
import './ckeditor.loader.ts';
import {CORE_DIRECTIVES, NgStyle, NgClass} from "@angular/common";
import {FILE_UPLOAD_DIRECTIVES,  FileUploader, FileItem} from "ng2-file-upload/ng2-file-upload";
import {FORM_DIRECTIVES} from "@angular/forms";

@Component({

    directives: [CKEditor , FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl:'new-post.template.html'
})
export class NewPost{
    public post:Post;
    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;

    constructor(){
        this.post = new Post();
    }

    onChange() {

    }

    onReady() {

    }
}
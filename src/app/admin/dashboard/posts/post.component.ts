///<reference path="../../../../../node_modules/@angular/common/src/directives/core_directives.d.ts"/>
/**
 * Created by hgeorgiev on 8/26/16.
 */
import {Component,  OnInit, OnDestroy} from '@angular/core';
import {Post} from "../../../common/models/post.model";
import {CKEditor} from "ng2-ckeditor";
import './ckeditor.loader.ts';
import {CORE_DIRECTIVES, NgStyle, NgClass} from "@angular/common";
import {FILE_UPLOAD_DIRECTIVES,  FileUploader, FileItem} from "ng2-file-upload/ng2-file-upload";
import {FORM_DIRECTIVES} from "@angular/forms";
import {PostsService} from "../../../common/services/posts.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    providers: [PostsService],
    directives: [CKEditor , FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl:'post.template.html',
    styleUrls: ['post.styles.css']
})


export class PostComponent implements OnInit, OnDestroy{
    private sub:any;
    public post:Post;
    public uploader:FileUploader;
    public hasBaseDropZoneOver:boolean = false;

    constructor(private _service:PostsService, private _router:Router, private _route:ActivatedRoute){
        this.post = new Post();
        this.uploader = new FileUploader({url: 'someurl'});
    }



    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            if(params['id']) {
                this._service.get(params['id']).then(
                    res => { this.post = res}
                );
            }
        });
    }

    ngOnDestroy() {

       if(this.sub) {this.sub.unsubscribe() };
    }


    onChange() {
      
    }

    onReady() {

    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }


    savePost() {
        let image:FileItem = this.uploader.queue[0];
        this._service.save(this.post, image._file , image.file.name).subscribe(() => {
            this._router.navigate(['admin/dashboard/posts']);
        });
    }
};
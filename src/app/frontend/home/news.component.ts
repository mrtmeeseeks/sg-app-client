/**
 * Created by hgeorgiev on 8/26/16.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostsService} from "../../common/services/posts.service";
import {Post} from "../../common/models/post.model";


@Component({
    selector: 'front-news',
    templateUrl: './news.template.html',
    styleUrls: ['./news.styles.css'],
    ecapsulation: ViewEncapsulation.Emulated
})

export class FrontNews implements OnInit {
    posts:Array<Post>;
    constructor(private _post:PostsService) {
        
    }
    
    ngOnInit() {
        this._post.getRegular(1, 10).subscribe(res => { this.posts = res.Items } , err => {})
    }
}
/**
 * Created by hgeorgiev on 8/22/16.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {CAROUSEL_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {PostsService} from "../../common/services/posts.service";
import {Post} from "../../common/models/post.model";




@Component({
    selector: 'carousel',
    encapsulation: ViewEncapsulation.Emulated,
    directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, ],
    templateUrl: './carousel.template.html',
    styleUrls: ['./carousel.styles.css']
})
export class Carousel implements OnInit{
    public myInterval:number = 5000;
    public noWrapSlides:boolean = false;
    public slides:Array<Post> = [];

    public constructor(private _post:PostsService) {

    }
    
    ngOnInit() {
        this._post.getFeatured(1,5).then(result => {
            this.slides = result.Items;
        })
    }






}

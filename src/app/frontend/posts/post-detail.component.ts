import {Component, OnInit, OnDestroy} from '@angular/core';
import {HomeFooter} from "../shared/footer/footer.component";
import {HomeNavbar} from "../shared/navbar/navbar.component";
import {Post} from "../../common/models/post.model";
import {PostsService} from "../../common/services/posts.service";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'team-members',
    providers: [PostsService],
    directives: [HomeFooter, HomeNavbar],
    templateUrl: './post-detail.template.html'

})

export class FrontPostDetail implements OnInit, OnDestroy{
    post:Post;
    sub:any;


    constructor(private _service:PostsService, private _route:ActivatedRoute) {
        this.post = new Post();
    }

    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
           
                this._service.get(params['id']).then(
                    res => { this.post = res}
                );
            
        });

    }

    ngOnDestroy() {

        this.sub.unsubscribe()
    }



}
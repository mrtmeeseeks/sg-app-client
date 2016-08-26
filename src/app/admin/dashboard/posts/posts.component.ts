import {Component, ViewEncapsulation , OnInit} from '@angular/core';
import {Listing} from '../../../common/listing.model'
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {PostsService} from "../../../common/services/posts.service";
import {Post} from "../../../common/models/post.model";


@Component({
    encapsulation: ViewEncapsulation.None,
    directives: [PAGINATION_DIRECTIVES],
    providers: [PostsService],
    template: require('./posts.template.html'),
})
export class AdminPosts implements OnInit{
    listing: Listing<Post>;
    public currentPage:number = 1;

    constructor(private _service:PostsService) {

    }

    ngOnInit() {
        this.listing = new Listing<Post>();
        this.loadPosts(1, 10);

    }



    public pageChanged(event:any):void {
        this.loadPosts(event.page, event.itemsPerPage);
    };


    private loadPosts(page:number, itemsPerPage: number) {

        this._service.query(page,itemsPerPage).then(listing => this.listing = listing);
    }


}

/**
 * Created by hgeorgiev on 8/26/16.
 */


import { Injectable, Inject } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Listing } from '../listing.model'
import { QueryConstructor} from '../queryconstructor'
import {Post} from "../models/post.model";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PostsService {
    private authToken = localStorage.getItem('auth_token');
    private postsUrl = this.api + '/posts' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {
  
    }

    //get all POSTS
    query(page:number, itemsPerPage: number) {
        return this.http.get(this.postsUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Post>();

                listing.collection = body.Items as Post[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }
    //get Featured
    getFeatured(page:number, itemsPerPage: number) {
        return this.http.get(this.postsUrl + '/featured', {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                // let wallpapers = new Array<Wallpaper>();
                //
                // body.data.children.forEach(post => {
                //     if (post.data.post_hint === 'image') {
                //         let item = new Wallpaper();
                //
                //         item.url = post.data.url;
                //         item.title = post.data.title;
                //
                //         let previewImages = post.data.preview.images;
                //         let resolutions = post.data.preview.images[0].resolutions;
                //
                //         let previewImage = resolutions.filter(m => m.width === 960)[0];
                //
                //         item.previewUrl = previewImage ? previewImage.url : item.url;
                //
                //         wallpapers.push(item);
                //     }
                // });
                return res.json();
            })
            .catch(this.handleError);
    }

    getRegular(page:number, itemsPerPage: number):Observable {
        return this.http.get(this.postsUrl + '/regular', {search:  QueryConstructor(page, itemsPerPage)})
            .map(res => res.json())
    }







    //get POST
    get(id:number) {
        return this.http.get(this.postsUrl + `/${id}`)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }


    //post POST
    save(post:Post , file:File, fileName:string): Observable  {

        return Observable.create(observer =>  {
                    let formData: any = new FormData();
                    let xhr:XMLHttpRequest = new XMLHttpRequest();
                    formData.append("post[image]", file, fileName);
                    formData.append("post[title]", post.title);
                    formData.append("post[content]", post.content);
                    formData.append("post[featured]", post.featured);
                    formData.append("post[styles]" , post.styles);
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200 || xhr.status === 201) {
                                observer.next(JSON.parse(xhr.response));
                                observer.complete();
                            } else {
                                observer.error(xhr.response);
                            }
                        }
                    };


                    xhr.open("POST", this.postsUrl, true);
                    xhr.setRequestHeader('Authorization', this.authToken);
                    xhr.send(formData);
                });
            }


}
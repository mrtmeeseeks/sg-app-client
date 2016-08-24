/**
 * Created by hgeorgiev on 8/23/16.
 */

import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";


@Injectable()


export class EvaluationsService {
    private evaluationsUrl = this.api + '/evaluations' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {}


    update() {

    }

    delete() {

    }

}
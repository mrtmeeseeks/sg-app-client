
import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {QueryConstructor} from "../queryconstructor";
import {Listing} from "../listing.model";
import {Evaluation} from "../models/evaluation.model";

@Injectable()


export class EvaluationsService {
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {}

    query(page:number, itemsPerPage: number, professor_id: number) {
        return this.http.get(this.api + `/professors/${professor_id}/evaluations` , {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Evaluation>();

                listing.collection = body.Items as Evaluation[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }


}
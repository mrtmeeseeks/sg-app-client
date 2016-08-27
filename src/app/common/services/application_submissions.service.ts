import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {QueryConstructor} from "../queryconstructor";
import {Listing} from "../listing.model";
import {ApplicationSubmission} from "../models/application_submission.model";

@Injectable()


export class ApplicationSubmissionsService {
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {}

    query(page:number, itemsPerPage: number, templateId: number) {
        return this.http.get(this.api + `/application_templates/${templateId}/application_submissions` , {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<ApplicationSubmission>();
                listing.collection = body.Items as ApplicationSubmission[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }





}
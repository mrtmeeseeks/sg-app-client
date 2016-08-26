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


    // makeSubmission(file:File, fileName:string, templateId:number) {
    //         return new Promise((resolve, reject) => {
    //             var formData: any = new FormData();
    //             var xhr = new XMLHttpRequest();
    //             formData.append("application_submission[document]", file, fileName);
    //             xhr.onreadystatechange = function () {
    //                 if (xhr.readyState == 4) {
    //                     if (xhr.status == 200) {
    //                         resolve(JSON.parse(xhr.response));
    //                     } else {
    //                         reject(xhr.response);
    //                     }
    //                 }
    //             };
    //             xhr.open("POST", this.api + `/application_templates/${templateId}/application_submissions`, true);
    //             xhr.send(formData);
    //         });
    //     }


}
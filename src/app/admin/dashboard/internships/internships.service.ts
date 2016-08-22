
import {Injectable, Inject} from "@angular/core";
import {Internship} from './internship.model';
import {Http} from "@angular/http";
import {QueryConstructor} from "../../../common/queryconstructor";
import {Listing} from "../../../common/listing.model";

@Injectable()


export class InternshipsService {
    private internshipsUrl = this.api + '/internships' ;
    constructor(private http:Http, @Inject('ApiEndpoint') private api: string) {}

    query(page:number, itemsPerPage: number) {
        return this.http.get(this.internshipsUrl, {search:  QueryConstructor(page, itemsPerPage)})
            .toPromise()
            .then(res => {
                let body = res.json();
                let listing = new Listing<Internship>();

                listing.collection = body.Items as Internship[] ;
                listing.count = body.Count;

                return listing;
            } )
            .catch(this.handleError);
    }

    get(internship: Internship) {
        return this.http.get(this.internshipsUrl + `${internship.id}`)
            .toPromise()
            .then(res => res.json() as Internship)
            .catch(this.handleError);
    }

}
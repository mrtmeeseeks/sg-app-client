import {URLSearchParams} from "@angular/http";

export function QueryConstructor(page: number, itemsPerPage: number): URLSearchParams {
        let skip: number;

        if(page == 1 ){
            skip = 0
        } else {
            page --;
            skip = page*itemsPerPage;
        }

    var params: URLSearchParams = new URLSearchParams();

    params.set('top', itemsPerPage.toString());
    params.set('skip', skip.toString());


    return params;
}

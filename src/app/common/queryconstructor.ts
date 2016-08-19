import {URLSearchParams} from "@angular/http";

export function QueryConstructor(top: number, skip: number): URLSearchParams {
    var params: URLSearchParams = new URLSearchParams();

    params.set('top', top);
    params.set('skip', skip);


    return params;
}

import {BaseModel} from "./base_model";
export class Post extends BaseModel {
    title:string;
    content:string;
    featured:boolean;
    image:string;
    styles:string;
}
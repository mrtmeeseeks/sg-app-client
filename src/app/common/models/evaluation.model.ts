import {BaseModel} from "./base_model";
export class Evaluation extends BaseModel {
    professor_id:number;
    user_id:number;
    content:string;
}
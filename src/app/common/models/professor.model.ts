import {Evaluation} from "./evaluation.model";
export class Professor {
    id:string;
    name: string;
    department: string;
    photo: string;
    evaluations: Array<Evaluation>
}
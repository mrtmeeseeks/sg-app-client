//Used for paginate-able collections

export class Listing<T> {
    collection: Array<T>;
    skip: number;
    top: number;
}

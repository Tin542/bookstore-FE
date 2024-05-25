import { IBookQuery } from "./book.type";

export interface IApi {
    operationName: string,
    query: string,
    variables: IBookQuery
}

import { IBookQuery } from "../../constants/types/book.type";
import { apiBase } from "../apiBase";
import { getAllBook } from "./book.query";

export const fetchAllBooks = (data?: IBookQuery) => apiBase(getAllBook(data));

import { apiBase } from "../apiBase";
import { allCartItemQuery } from "./cart.query";

export const fetchAllCartItem = (uid: string) => apiBase(allCartItemQuery(uid));

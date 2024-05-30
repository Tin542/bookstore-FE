import { UpdateCartItemType } from "../../constants/types/cart.type";
import { apiBase } from "../apiBase";
import { allCartItemQuery, updateCart } from "./cart.query";

export const fetchAllCartItem = (uid: string) => apiBase(allCartItemQuery(uid));
export const updateCartItem = (data: UpdateCartItemType) => apiBase(updateCart(data));
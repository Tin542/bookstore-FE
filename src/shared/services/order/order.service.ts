import { IOrderCreate, IOrderQuery } from "../../constants/types/order.type";
import { apiBase } from "../apiBase";
import { createOrder, getAllOrderQuery } from "./order.query";

export const placeOrder = (data: IOrderCreate) => apiBase(createOrder(data));
export const getOrderForCurrentUser = (data: IOrderQuery) => apiBase(getAllOrderQuery(data))


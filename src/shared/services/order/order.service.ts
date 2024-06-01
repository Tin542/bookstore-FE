import { IOrderCreate } from "../../constants/types/order.type";
import { apiBase } from "../apiBase";
import { createOrder } from "./order.query";

export const placeOrder = (data: IOrderCreate) => apiBase(createOrder(data));


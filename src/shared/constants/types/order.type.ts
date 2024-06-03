import { OrderDtaileInputType } from "./cart.type";
import { OrderStatus, PaymentMethod } from "./enum.type";



export type OrderType = {
  totalPrice: number;
  status: OrderStatus;
  userId?: string;
  paidAt?: Date | null;
  address: string;
  phoneNumber: string;
  customerName?: string;
  paymentMethod: PaymentMethod;
};

export interface IOrderCreate extends OrderType{
  orderItem: OrderDtaileInputType[] | [];
}


export enum OrderStatus {
  INIT,
  INPROGRESS,
  APPROVED,
  REJECTED,
  SHIPING,
  DONE,
}

export enum PaymentMethod {
  COD,
  ONLINE_BANKING,
}

export type OrderType = {
  totalPrice: number;
  status: OrderStatus;
  userId?: string;
  paidAt?: Date | "";
  address: string;
  phoneNumber: string;
  customerName?: string;
  paymentMethod: PaymentMethod;
};

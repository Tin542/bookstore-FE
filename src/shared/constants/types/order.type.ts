export enum OrderStatus {
  INIT = "Init",
  INPROGRESS = "inProgress",
  APPROVED = "Approved",
  REJECTED = "Rejected",
  SHIPING = "Shiping",
  DONE = "Done",
}

export enum PaymentMethod {
  COD = "Payment on delivery",
  ONLINE_BANKING = "Online Banking",
}

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

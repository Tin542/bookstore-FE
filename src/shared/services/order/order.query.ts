import { IOrderCreate } from "../../constants/types/order.type";

export const createOrder = (data: IOrderCreate) => {
  return {
    operationName: "CreateOrder",
    query: `
      mutation CreateOrder(
        $address: String!,
        $book: [BookInput!]!,
        $customerName: String!,
        $paidAt: DateTime,
        $paymentMethod: PaymentMethod!,
        $phoneNumber: String!,
        $status: OrderStatus!,
        $totalPrice: Float!
        $userId: String!
      ) {
        createOrder(
            address: $address
            book: $book
            customerName: $customerName
            paidAt: $paidAt
            paymentMethod: $paymentMethod
            phoneNumber: $phoneNumber
            status: $status
            totalPrice: $totalPrice
            userId: $userId
        ) {
            id
            status
            userId
        }
    }
        `,
    variables: data,
  };
};
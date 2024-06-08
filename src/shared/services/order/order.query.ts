import { IOrderCreate, IOrderQuery } from "../../constants/types/order.type";

export const createOrder = (data: IOrderCreate) => {
  return {
    operationName: "CreateOrder",
    query: `
      mutation CreateOrder(
        $address: String!,
        $orderItem: [OrderItemInput!]!,
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
            orderItem: $orderItem
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

export const getAllOrderQuery = (data: IOrderQuery) => {
  return {
    operationName: "GetOrder",
    query: `
      query GetOrder($limit: Int!, $page: Int!, $userId: String!) {
        getOrder(limit: $limit, page: $page, userId: $userId) {
          createdAt
          id
          paidAt
          paymentMethod
          status
          totalPrice
        }
      }
        `,
    variables: data,
  };
};

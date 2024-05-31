/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import OrderView from "./view";
import { OrderType } from "../../shared/constants/types/order.type";

const OrderPage = () => {
  const [orderValue, setOrderValue] = useState<OrderType>();

  console.log(orderValue);

  return <OrderView setOrderValue={setOrderValue} />;
};

export default OrderPage;

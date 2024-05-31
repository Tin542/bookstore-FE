/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import OrderView from "./view";
import { OrderType } from "../../shared/constants/types/order.type";
import { cartSelector } from "../../shared/redux-flow/selector";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const [orderValue, setOrderValue] = useState<OrderType>();
  const cartStorage = useSelector(cartSelector);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if(cartStorage){
      calculateTotalPrice(cartStorage);
    }
    
  },[])

  const calculateTotalPrice = (list: any[]) => {
    let result: number = 0;
    list.forEach((item) => {
      result += item.price;
    });
    setTotalPrice(result);
    return result;
  };

  return <OrderView setOrderValue={setOrderValue} prices={totalPrice} />;
};

export default OrderPage;

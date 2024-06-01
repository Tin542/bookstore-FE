/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import OrderView from "./view";
import { IOrderCreate } from "../../shared/constants/types/order.type";
import { placeOrder } from "../../shared/services/order/order.service";
import { errorPopUpMessage, successPopUpMessage } from "../../shared/components/Notification";

const OrderPage = () => {
  const [orderValue, setOrderValue] = useState<IOrderCreate>();
  useEffect(() => {
    if (orderValue) {
      handleCreateOrder(orderValue);
    }
  }, [orderValue]);
  const handleCreateOrder = async (value: IOrderCreate) => {
    try {
      await placeOrder(value).then((rs) => {
        const result = rs.data;
        console.log('result', result);
        if (!result.data) {
          errorPopUpMessage("Order created Failed", result.errors[0].message);
          return;
        }
        successPopUpMessage("Order created Successful");
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(orderValue);

  return <OrderView setOrderValue={setOrderValue} />;
};

export default OrderPage;

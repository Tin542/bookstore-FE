/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import OrderView from "./view";
import { IOrderCreate } from "../../shared/constants/types/order.type";
import { placeOrder } from "../../shared/services/order/order.service";
import {
  errorPopUpMessage,
  successPopUpMessage,
} from "../../shared/components/Notification";
import { removeCurrentCart } from "../../shared/services/cart/cart.service";
import { useNavigate } from "react-router-dom";
import { CUSTOMER_PATH } from "../../shared/constants/path";

const OrderPage = () => {
  const [orderValue, setOrderValue] = useState<IOrderCreate>();
  const navigate = useNavigate();
  useEffect(() => {
    if (orderValue) {
      handleCreateOrder(orderValue);
    }
  }, [orderValue]);
  const handleCreateOrder = async (value: IOrderCreate) => {
    try {
      await placeOrder(value).then(async (rs) => {
        const result = rs.data;
        if (!result.data) {
          errorPopUpMessage("Order created Failed", result.errors[0].message);
          return;
        }
        await removeCurrentCart(result.data.createOrder.userId);
        successPopUpMessage("Order created Successful");
        navigate(CUSTOMER_PATH.HOME);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return <OrderView setOrderValue={setOrderValue} />;
};

export default OrderPage;

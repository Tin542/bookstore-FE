/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Button, Flex, message, Steps } from "antd";
import { useSelector } from "react-redux";

import InfoForm from "./components/infoForm";
import PaymentForm from "./components/paymentForm";
import FinishForm from "./components/FinishForm";
import {
  OrderStatus,
  OrderType,
  PaymentMethod,
} from "../../shared/constants/types/order.type";
import {  userSelector } from "../../shared/redux-flow/selector";

const contentStyle: React.CSSProperties = {
  minHeight: "25rem",
  backgroundColor: "white",
  border: `1px solid`,
  marginTop: 16,
  padding: 20,
};
interface OrderPageProps {
  setOrderValue: (value: OrderType) => void;
  prices: number
}

export enum CurrentStatus {
  WAIT = "wait",
  FINISH = "finish",
  PROCESS = "process",
  ERROR = "error",
}

const OrderView: React.FC<OrderPageProps> = (props) => {
  const { setOrderValue, prices } = props;
  const userStore = useSelector(userSelector);
  const [current, setCurrent] = useState(0);
  const [currentStatus, setCurrentStatus] = useState<CurrentStatus>(
    CurrentStatus.PROCESS
  );
  
  const [value, setValue] = useState<OrderType>({
    totalPrice: prices,
    status: OrderStatus.INIT,
    userId: userStore?.id,
    paidAt: "",
    address: "",
    phoneNumber: "",
    customerName: userStore?.fullName,
    paymentMethod: PaymentMethod.COD,
  });
  useEffect(() => {
    if (value) {
      setOrderValue(value);
    }
  }, [value]);
  
  const steps = [
    {
      title: `Order's infomation`,
      content: (
        <InfoForm
          setValue={setValue}
          value={value}
          setCurrentStatus={setCurrentStatus}
        />
      ),
    },
    {
      title: "Payment Method",
      content: (
        <PaymentForm
          setValue={setValue}
          value={value}
          setCurrentStatus={setCurrentStatus}
        />
      ),
    },
    {
      title: "Finish",
      content: <FinishForm value={value}/>,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
    setCurrentStatus(CurrentStatus.PROCESS);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div style={{ marginTop: 20 }}>
      <Steps status={currentStatus} current={current} items={items} />
      <Flex justify="center" style={contentStyle}>
        {steps[current].content}
      </Flex>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button
            disabled={currentStatus !== CurrentStatus.FINISH ? true : false}
            type="primary"
            onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}>
            Submit order
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderView;

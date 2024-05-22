import React from "react";
import { Button, ConfigProvider, Flex } from "antd";
import { useSelector } from "react-redux";
import { CUSTOMER_PATH } from "../../constants/path";
import logo from "../../../assets/logo.png";
import { userSelector } from "../../redux-flow/selector";
import { Link } from "react-router-dom";

const HeaderLayout: React.FC = () => {
  const user = useSelector(userSelector);

  console.log(user);

  return (
    <ConfigProvider
      theme={{
        token: {
          padding: 5
        },
      }}>
      <Flex justify="space-between" align="center">
        <Flex gap="small">
          <img src={logo} alt="logo" height={60} />
        </Flex>

        <Flex gap="large" justify="space-between" align="center">
          <Button style={{ color: "White" }} type="link">
            <Link to={CUSTOMER_PATH.HOME}>Home</Link>
          </Button>
          <Button style={{ color: "White" }} type="link">
            <Link to={CUSTOMER_PATH.SHOP}>Shop</Link>
          </Button>
          <Button style={{ color: "White" }} type="link">
            <Link to={CUSTOMER_PATH.ABOUT}>About</Link>
          </Button>
          <Button style={{ color: "White" }} type="link">
            <Link to={CUSTOMER_PATH.CART}>Cart (0)</Link>
          </Button>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default HeaderLayout;

import React from "react";
import { Button, ConfigProvider, Flex } from "antd";
import { CUSTOMER_PATH } from "../../constants/path";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const HeaderLayout: React.FC = () => {

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

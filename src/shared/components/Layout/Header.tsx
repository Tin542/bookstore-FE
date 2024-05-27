import React from "react";
import { Button, ConfigProvider, Dropdown, Flex, MenuProps } from "antd";
import { AUTH_PATH, CUSTOMER_PATH } from "../../constants/path";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
  color: "white",
};
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link to={AUTH_PATH.SIGNIN}>Sign In</Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to={AUTH_PATH.SIGNUP}>Sign Up</Link>
    ),
  },
];

const HeaderLayout: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          padding: 5,
        },
      }}>
      <Flex justify="space-between" align="center">
        <Flex gap="small">
          <img src={logo} alt="logo" height={60} />
        </Flex>

        <Flex gap="large" justify="space-between" align="center">
          <Button style={contentStyle} type="link">
            <Link to={CUSTOMER_PATH.HOME}>Home</Link>
          </Button>
          <Button style={contentStyle} type="link">
            <Link to={CUSTOMER_PATH.SHOP}>Shop</Link>
          </Button>
          <Button style={contentStyle} type="link">
            <Link to={CUSTOMER_PATH.ABOUT}>About</Link>
          </Button>
          <Button style={contentStyle} type="link">
            <Link to={CUSTOMER_PATH.CART}>Cart (0)</Link>
          </Button>
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <Button style={contentStyle}  icon={<UserOutlined />} type="link">
              
            </Button>
          </Dropdown>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default HeaderLayout;

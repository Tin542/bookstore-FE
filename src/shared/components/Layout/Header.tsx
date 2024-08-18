import React from "react";
import {
  Avatar,
  Badge,
  Button,
  ConfigProvider,
  Dropdown,
  Flex,
  MenuProps,
} from "antd";
import { AUTH_PATH, CUSTOMER_PATH } from "../../constants/path";
import logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { cartSelector, userSelector } from "../../redux-flow/selector";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../redux-flow/action";
import { successPopUpMessage } from "../Notification";
import { logOut } from "../../services/auth/auth.service";

const contentStyle: React.CSSProperties = {
  color: "white",
};

const HeaderLayout: React.FC = () => {
  const userStore = useSelector(userSelector);
  const cartStore = useSelector(cartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutApi = async () => {
    if (userStore) {
      const result = await logOut({uid: userStore.id});
      if (result.data.data) {
        dispatch(handleLogout());
        successPopUpMessage("Sign Out successfully");
        navigate(AUTH_PATH.SIGNIN);
      }
    }
  };

  const itemsWithOutLogin: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={AUTH_PATH.SIGNIN}>Sign In</Link>,
    },
    {
      key: "2",
      label: <Link to={AUTH_PATH.SIGNUP}>Sign Up</Link>,
    },
  ];
  const itemsWithLogin: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={CUSTOMER_PATH.PROFILE}>Profile</Link>,
    },
    {
      key: "2",
      label: "Sign Out",
      onClick: () => handleLogoutApi(),
    },
  ];
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
          {userStore ? (
            <Button style={contentStyle} type="link">
              <Link to={userStore ? CUSTOMER_PATH.CART : AUTH_PATH.SIGNIN}>
                <Badge size="small" count={cartStore ? cartStore.length : 0}>
                  <ShoppingCartOutlined
                    style={{ fontSize: 20, color: "white" }}
                  />
                </Badge>
              </Link>
            </Button>
          ) : (
            ""
          )}

          <Dropdown
            menu={{ items: userStore ? itemsWithLogin : itemsWithOutLogin }}
            placement="bottom"
            arrow>
            <div style={{ color: "white" }}>
              {userStore ? (
                <Avatar style={{ marginTop: -7 }} src={userStore.avatar} />
              ) : (
                <Button
                  style={contentStyle}
                  icon={<UserOutlined />}
                  type="link"></Button>
              )}
            </div>
          </Dropdown>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default HeaderLayout;

import React, { useState } from "react";
import { BarChartOutlined, KeyOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import ResetComponent from "./components/resetComponent";
import OrderComponent from "./components/orderComponent";
import ProfileComponent from "./components/profileComponent";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "PROFILE",
    label: "Profile",
    icon: <UserOutlined />,
  },
  {
    key: "ORDERS",
    label: "Orders",
    icon: <BarChartOutlined />,
  },
  {
    key: "RESET",
    label: "Reset password",
    icon: <KeyOutlined />,
  },
];

const Profileview: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>("PROFILE");

  const onClick: MenuProps["onClick"] = (e) => {
    setSelectedKey(e.key);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "PROFILE":
        return <ProfileComponent />;
      case "ORDERS":
        return <OrderComponent />;
      case "RESET":
        return <ResetComponent />;
      default:
        return <ProfileComponent />;
    }
  };

  return (
    <Layout
      style={{
        padding: "24px 0",
        background: "white",
        borderRadius: 5,
        marginTop: 20,
      }}>
      <Sider style={{ background: "white" }} width={200}>
        <Menu
          onClick={onClick}
          style={{ flex: 1, minWidth: 0 }}
          defaultSelectedKeys={[selectedKey]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        {renderContent()}
      </Content>
    </Layout>
  );
};

export default Profileview;

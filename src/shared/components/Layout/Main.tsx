import React, { FC } from "react";
import { ConfigProvider, Layout } from "antd";
import HeaderLayout from "./Header";
// import Footer from "./Footer";

import "./styles/style.css";

interface MainProps {
  children: React.ReactNode;
}
const { Header, Content, Footer } = Layout;

const Main: FC<MainProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerHeight: 64,
            headerPadding: '0 10px',
          },
        },
      }}>
      <Layout>
        <Header>
          <HeaderLayout />
        </Header>
        <Content>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          BOOKSTORE ©{new Date().getFullYear()} Created Tin
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default Main;

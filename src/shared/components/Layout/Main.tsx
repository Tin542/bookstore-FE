import React, { FC } from "react";
import { ConfigProvider, Layout } from "antd";
import HeaderLayout from "./Header";

interface MainProps {
  children: React.ReactNode;
}
const { Header, Content, Footer } = Layout;

const contentStyle: React.CSSProperties = {
  padding: '10px 100px',
  minWidth: '500px',
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerHeight: 64,
            headerPadding: '0 10px',
            footerBg: '#001529'
          },
        },
      }}>
      <Layout>
        <Header>
          <HeaderLayout />
        </Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer style={{ textAlign: "center", marginTop: 10, color: '#fff' }}>
          BOOKSTORE ©{new Date().getFullYear()} Created by Bin
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default Main;

import React, { FC } from "react";
import { ConfigProvider, Layout } from "antd";
import HeaderLayout from "./Header";

interface MainProps {
  children: React.ReactNode;
}
const { Header, Content, Footer } = Layout;

const contentStyle: React.CSSProperties = {
  padding: "0 15%",
  marginTop: 64,
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerHeight: 64,
            headerPadding: "0 10px",
            footerBg: "#001529",
          },
        },
      }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <HeaderLayout />
        </Header>
        <Content style={contentStyle}>
          <div style={{ minHeight: 380 }}>{children}</div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            marginTop: 10,
            color: "#fff",
            height: 64,
          }}>
          BOOKSTORE ©{new Date().getFullYear()} Created by Bin
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default Main;

import { Button, Card, ConfigProvider, Flex, Typography } from "antd";
import React, { useState } from "react";

import book from "../../shared/data/book.json";
import CardComponent from "../../shared/components/Card";

const { Title } = Typography;

const tabList = [
  {
    key: "tab1",
    tab: "RECOMMENT",
  },
  {
    key: "tab2",
    tab: "POPULAR",
  },
];
const onsaleBooks = book.slice(0, 5);
const recommentBooks = book.slice(5, 10);
const contentList: Record<string, React.ReactNode> = {
  tab1: (
    <Flex wrap gap={12}>
      {recommentBooks.map((item) => (
        <CardComponent item={item} />
      ))}
    </Flex>
  ),
  tab2: (
    <Flex wrap gap={12}>
      {book.map((item) => (
        <CardComponent item={item} />
      ))}
    </Flex>
  ),
};
const contentStyle: React.CSSProperties = {
  height: "auto",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
  marginTop: "10px",
  padding: "10px",
};

const Homeview = () => {
  const [activeTabKey1, setActiveTabKey1] = useState<string>("tab1");
  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            titleMarginTop: 0,
            titleMarginBottom: 10,
          },
        },
      }}>
      <div style={contentStyle}>
        <Flex wrap justify="space-between" align="center" gap="small">
          <Title level={4}>ON SALE</Title>
          <Button style={{ width: "5rem", height: "3rem" }} type="primary">
            View all
          </Button>
        </Flex>
        <hr />
        <Flex wrap justify="flex-start" align="center" gap={12}>
          {onsaleBooks.map((item) => (
            <CardComponent item={item} />
          ))}
        </Flex>
      </div>
      <Card
        style={{ width: "100%", marginTop: "10px", borderRadius: 0 }}
        title="FEATURED BOOK"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}>
        {contentList[activeTabKey1]}
      </Card>
    </ConfigProvider>
  );
};

export default Homeview;

import { Button, ConfigProvider, Flex, Space, Typography } from "antd";
import React, { useState } from "react";

import book from "../../shared/data/book.json";
import CardComponent from "../../shared/components/Card";

const { Title } = Typography;

interface Item {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  rate: number;
  author: {
    name: string;
  };
}

const contentStyle: React.CSSProperties = {
  height: "auto",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
  marginTop: "10px",
  padding: "10px",
};

const Homeview: React.FC = () => {
  const [listbook, setListBook] = useState<Item[]>(book);

  const handleChangeFeatured = (val: string) => {
    if(val === 'recommented') {
      setListBook(book.slice(0, 5));
    }
    if(val === 'popular') {
      setListBook(book.slice(3, 8));
    }
    
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            titleMarginTop: 0,
            titleMarginBottom: 10,
          },
        },
        token: {
          padding: 10,
        },
      }}>
      <div style={contentStyle}>
        <Flex justify="space-between" align="center" gap="small">
          <Title level={4}>ON SALE</Title>
          <Button style={{ width: "5rem", height: "3rem" }} type="primary">
            View all
          </Button>
        </Flex>
        <hr />
        <Flex wrap justify="center" align="center" gap={10}>
          {book.map((item) => (
            <CardComponent key={item.id} item={item} />
          ))}
        </Flex>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>FEATURED BOOKS</h1>
        <Space size="large">
          <Button onClick={() => handleChangeFeatured('recommented')}>Recommented</Button>
          <Button onClick={() => handleChangeFeatured('popular')}>Popular</Button>
        </Space>
      </div>
      <div style={contentStyle}>
        <Flex wrap justify="center" align="center" gap={10}>
          {listbook.map((item) => (
            <CardComponent key={item.id} item={item} />
          ))}
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default Homeview;

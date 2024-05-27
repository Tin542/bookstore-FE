import React, { useState } from "react";
import { Button, Card, Col, Divider, Flex, Row, Table, TableProps } from "antd";
import { IBook } from "../../shared/constants/types/book.type";

interface CartItemType {
  id: number;
  book: IBook;
  price: number;
  quantity: number;
}
const contentStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 5,
  height: "auto",
  width: "100%",
  padding: 15,
  marginBottom: 10,
};
const columns: TableProps<CartItemType>["columns"] = [
  {
    title: "Product",
    dataIndex: "book",
    key: "book",
    responsive: ["md"],
    render: (_, item) => (
      <>
        <Flex justify="flex-start" align="flex-start">
          <div style={{ width: "auto", height: "100px", textAlign: "left" }}>
            <img
              style={{ borderRadius: 0, height: "100%", objectFit: "cover" }}
              alt="example"
              src={item.book.imageUrl}
            />
          </div>

          <Flex
            style={{ height: 100, marginLeft: 10 }}
            vertical
            justify="space-between"
            align="flex-start">
            <span>{item.book.title}</span>
            <span>{item.price} VND</span>
          </Flex>
        </Flex>
      </>
    ),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Total price",
    dataIndex: "price",
    key: "price",
  },

  {
    title: "",
    key: "action",
    render: () => <a>Delete</a>,
  },
];
const data: CartItemType[] = [
  {
    id: 1,
    book: {
      id: "d6d239eb-481b-4a4b-b49a-b903eddf46fw",
      title: "Book Title 1",
      price: 100000,
      rate: 5,
      categoryId: "category 1",
      authorId: "author 1",
      isOutofStock: false,
      imageUrl:
        "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
    },
    quantity: 2,
    price: 10000,
  },
  {
    id: 2,
    book: {
      id: "d6d239eb-481b-4a4b-b49a-b903eddf46fw",
      title: "Book Title 1",
      price: 100000,
      rate: 5,
      categoryId: "category 1",
      authorId: "author 1",
      isOutofStock: false,
      imageUrl:
        "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
    },
    quantity: 2,
    price: 10000,
  },
  {
    id: 3,
    book: {
      id: "d6d239eb-481b-4a4b-b49a-b903eddf46fw",
      title: "Book Title 1",
      price: 100000,
      rate: 5,
      categoryId: "category 1",
      authorId: "author 1",
      isOutofStock: false,
      imageUrl:
        "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
    },
    quantity: 2,
    price: 10000,
  },
];
const CartView = () => {
  return (
    <>
      <span style={{ margin: "auto 0" }}>
        <b style={{ fontSize: 20 }}>Cart </b>(3 products)
      </span>
      <hr />
      <Row gutter={[10, 10]}>
        <Col md={15} sm={24} xs={24}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Col>
        <Col md={9} sm={24} xs={24} style={{ alignContent: 'flex-start'}}>
          <Card title="CHEKC OUT" bordered={false} style={{ width: '100%', border: '1px, solid' }}>
            <Flex justify="space-between" align="flex-start">
              <b>Total Price (VAT inclued)</b>
              <span style={{color: 'red'}}>300000 VND</span>
            </Flex>
            <hr/>
            <Flex vertical gap="small" style={{ width: '100%', padding: '0 10px' }}>
            <Button type="primary" danger>Check out</Button>
            </Flex>
            
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartView;

import { FC } from "react";
import {
  Button,
  Card,
  Col,
  Flex,
  InputNumber,
  Row,
  Table,
  TableColumnsType,
} from "antd";

import { CartItemType } from "../../shared/constants/types/cart.type";

interface CartViewProps {
  data: CartItemType[] | undefined;
  onChangeQuantity: (value: number, item: CartItemType) => void;
}

const CartView: FC<CartViewProps> = (props) => {
  const { data, onChangeQuantity } = props;
  const cartItems = data ?? [];
  const columns: TableColumnsType<CartItemType> = [
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
              justify="center"
              align="flex-start">
              <span>{item.book.title}</span>
              <span>${item.book.price}</span>
            </Flex>
          </Flex>
        </>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (_, item) => (
        <InputNumber
          type="number"
          min={1}
          value={item.quantity}
          onChange={(value) => onChangeQuantity(value as number, item)}
        />
      ),
    },
    {
      title: "Total price",
      dataIndex: "price",
      key: "price",
      render: (item) => <b style={{ color: "red" }}>$ {item}</b>,
    },

    {
      title: "",
      key: "action",
      render: () => <a>Delete</a>,
    },
  ];

  return (
    <>
      <span style={{ margin: "auto 0" }}>
        <b style={{ fontSize: 20 }}>Cart </b>({} products)
      </span>
      <hr />
      <Row gutter={[10, 10]}>
        <Col md={15} sm={24} xs={24}>
          <Table columns={columns} dataSource={cartItems} pagination={false} />
        </Col>
        <Col md={9} sm={24} xs={24} style={{ alignContent: "flex-start" }}>
          <Card
            title="CART TOTAL"
            bordered={false}
            style={{ width: "100%", border: "1px, solid" }}>
            <Flex justify="space-between" align="flex-start">
              <b>Total Price</b>
              <span style={{ color: "red" }}>$ 300000</span>
            </Flex>
            <hr />
            <Flex
              vertical
              gap="small"
              style={{ width: "100%", padding: "0 10px" }}>
              <Button type="primary" danger>
                Place Order
              </Button>
            </Flex>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartView;

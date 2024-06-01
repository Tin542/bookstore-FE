import { FC } from "react";
import {
  Affix,
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
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CUSTOMER_PATH } from "../../shared/constants/path";

interface CartViewProps {
  data: CartItemType[] | undefined;
  totalPrice: number | undefined;
  onChangeQuantity: (value: number, item: CartItemType) => void;
  onClickRemoveCartItem: (value: string) => void;
}

const CartView: FC<CartViewProps> = (props) => {
  const { data, onChangeQuantity, onClickRemoveCartItem, totalPrice } = props;
  const navigate = useNavigate();
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
          value={item.quantity ?? 1}
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
      render: (_, item) => (
        <>
          <Button
            onClick={() => onClickRemoveCartItem(item.id)}
            type="text"
            danger
            icon={<CloseOutlined />}
            size={"small"}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <span style={{ margin: "auto 0" }}>
        <b style={{ fontSize: 20 }}>Cart </b>({cartItems.length} products)
      </span>
      <hr />
      <Row gutter={[10, 10]}>
        <Col md={15} sm={24} xs={24}>
          <Table columns={columns} dataSource={cartItems} pagination={false} />
        </Col>
        <Col md={9} sm={24} xs={24} style={{ alignContent: "flex-start" }}>
          <Affix offsetTop={100}>
            <Card
              title="CART TOTAL"
              bordered={false}
              style={{ width: "100%", border: "1px, solid" }}>
              <Flex justify="space-between" align="flex-start">
                <b>Total Price</b>
                <span style={{ color: "red", fontWeight: 'bold' }}>$ {totalPrice}</span>
              </Flex>
              <hr />
              <Flex
                vertical
                gap="small"
                style={{ width: "100%", padding: "0 10px" }}>
                <Button disabled={cartItems.length < 1} type="primary" danger onClick={() => navigate(CUSTOMER_PATH.ORDER)}>
                  Place Order
                </Button>
              </Flex>
            </Card>
          </Affix>
        </Col>
      </Row>
    </>
  );
};

export default CartView;

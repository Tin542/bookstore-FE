import React, { FC, useState } from "react";
import { Book } from "../../shared/constants/types/book.type";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Flex,
  Image,
  InputNumber,
  Row,
  Typography,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface detailViewProps {
  data: Book | undefined;
  quantity: number | undefined;
  onChangeQuantity: (value: number | null) => void;
  addToCartButton: () => void;
}

const infoBookStyle: React.CSSProperties = {
  padding: 10,
  width: "100%",
  height: "auto",
  border: "1px solid",
  borderRadius: 5,
  backgroundColor: "white",
};

const DetailView: FC<detailViewProps> = (props) => {
  const { data, quantity, onChangeQuantity, addToCartButton } = props;
  const [expanded, setExpanded] = useState(false);

  const price = data?.price ?? 0;
  const qty = quantity ?? 1;

  return (
    <>
      <h1>{data?.category.name}</h1>
      <hr />
      <Row gutter={[10, 10]}>
        <Col md={15} sm={24} xs={24}>
          <div style={infoBookStyle}>
            <Row gutter={[10, 10]}>
              <Col
                md={9}
                sm={24}
                xs={24}
                style={{ alignContent: "flex-start" }}>
                <Flex vertical justify="center" align="center" gap={20}>
                  <Image width={200} src={data?.imageUrl} />
                  <div>
                    By <b>{data?.author.name}</b>
                  </div>
                </Flex>
              </Col>
              <Col md={15} sm={24} xs={24}>
                <Flex vertical justify="flex-start" align="flex-start">
                  <h2>{data?.title}</h2>
                  <div>
                    <Typography.Paragraph
                      ellipsis={{
                        rows: 10,
                        expandable: "collapsible",
                        expanded,
                        onExpand: (_, info) => setExpanded(info.expanded),
                      }}>
                      {data?.description}
                    </Typography.Paragraph>
                  </div>
                </Flex>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={9} sm={24} xs={24} style={{ alignContent: "flex-start" }}>
          <Card
            title="PRICE"
            bordered={false}
            style={{ width: "100%", border: "1px, solid" }}>
            <div style={{ textAlign: "center" }}>
              <InputNumber
                size="large"
                type="number"
                min={1}
                value={quantity}
                onChange={(value) => onChangeQuantity(value as number)}
              />
            </div>

            <hr />

            <Flex justify="space-between" align="flex-start">
              <b>Total Price</b>
              <span style={{ color: "red" }}>$ {price * qty}</span>
            </Flex>
            <hr />
            <Flex
              vertical
              gap="small"
              style={{ width: "100%", padding: "0 10px" }}>
              <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultColor: "#fff",
                        defaultBorderColor: "#001529",
                        defaultBg: "#001529",
                      },
                    },
                  }}>
                  <Button
                    onClick={addToCartButton}
                    style={{ borderRadius: 0 }}
                    icon={<ShoppingCartOutlined />}>
                    Add To Cart
                  </Button>
                </ConfigProvider>
            </Flex>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DetailView;

import React from "react";
import { Button, Card, ConfigProvider, Rate } from "antd";
import { IBook } from "../../constants/types/book.type";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface CardComponentProps {
  item: IBook;
}

const cardStyle: React.CSSProperties = {
  width: "12rem",
  borderRadius: 0,
  padding: "10px",
  overflow: "hidden",
};

const { Meta } = Card;
const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { item } = props;
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverColor: "#fff",
            defaultHoverBorderColor: "#001529",
            defaultHoverBg: "#001529",
          },
        },
      }}>
      <Card
        hoverable
        style={cardStyle}
        cover={
          <div style={{ width: "100%", height: "178px", textAlign: "center" }}>
            <img
              style={{ borderRadius: 0, height: "100%", objectFit: "cover" }}
              alt="example"
              src={item.imageUrl}
            />
          </div>
        }>
        <div>
          <Rate disabled value={item.rate} style={{ fontSize: 15 }} />
          <Meta title={item.title} description={`${item.price} VND`} />
        </div>
        <div style={{marginTop: 20, marginBottom: -20}}>
          <Button style={{borderRadius: 0}} icon={<ShoppingCartOutlined />}>Add To Cart</Button>
        </div>
      </Card>
    </ConfigProvider>
  );
};

export default CardComponent;

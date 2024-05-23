import React from "react";
import { Card } from "antd";

interface Item {
  imageUrl: string;
  title: string;
  price: number;
  rate: number;
  author: {
    name: string;
  };
}

interface CardComponentProps {
  item: Item;
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
      <Meta title={item.title} description={`${item.price} VND`} />
    </Card>
  );
};

export default CardComponent;

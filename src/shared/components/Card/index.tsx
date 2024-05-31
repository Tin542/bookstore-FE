import React from "react";
import { Card, Rate } from "antd";
import { useNavigate } from "react-router-dom";

import { CUSTOMER_PATH } from "../../constants/path";
import { IBook } from "../../constants/types/book.type";
import { PRODUCT_ID } from "../../constants/appConstants";

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
  const navigate = useNavigate();

  const onClickDetail = () => {
    localStorage.setItem(PRODUCT_ID, item.id);
    navigate(CUSTOMER_PATH.DETAIL_PRODUCT);
  };
  return (
    <Card
      onClick={onClickDetail}
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
        <Meta title={item.title} description={`$ ${item.price}`} />
      </div>
    </Card>
  );
};

export default CardComponent;

import React from "react";
import { Col, Flex, Row } from "antd";
import { Book } from "../../../../shared/constants/types/book.type";

interface CardProps {
  book: Book;
}

const contentStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
};

const imageStyle: React.CSSProperties = {
  width: "300px",
  height: "400px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

const CardCarouselComponent: React.FC<CardProps> = (props: CardProps) => {
  const { book } = props;
  return (
    <Row style={contentStyle}>
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={12}
        span={12}
        style={{ display: "flex", justifyContent: "center" }}>
        <img src={book.imageUrl} alt="book" style={imageStyle} />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} span={12}>
        <Flex vertical justify="flex-start" align="flex-start">
          <h1 style={{ color: "#007bff" }}>{book.title}</h1>
          <p style={{ color: "#595959" }}>{book.description}</p>
          <p style={{ color: "#595959" }}>Price: {book.price}</p>
        </Flex>
      </Col>
    </Row>
  );
};

export default CardCarouselComponent;

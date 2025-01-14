import React from "react";
import { Col, Flex, Row, Typography } from "antd";
import { Book } from "../../../../shared/constants/types/book.type";
import { calculateDiscount } from "../../../../shared/utils/calculateTotalPrice";

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

const { Text } = Typography;

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
          <p style={{ color: "#595959" }}>
            <Typography.Paragraph
              ellipsis={{
                rows: 5,
              }}>
              {book.description}
            </Typography.Paragraph>
          </p>
          {book.bookPromotion.length > 0 ? (
            <Flex justify="flex-start" gap={10}>
              <Text delete>${book.price}</Text>
              <Text strong type="danger">
                $
                {calculateDiscount(
                  book.limitDiscount,
                  book.price,
                  book.bookPromotion
                )}
              </Text>
            </Flex>
          ) : (
            <span>${book.price}</span>
          )}
        </Flex>
      </Col>
    </Row>
  );
};

export default CardCarouselComponent;

import { Button, Col, ConfigProvider, Empty, Flex, Row } from "antd";
import React, { FC } from "react";

import CardComponent from "../../shared/components/Card";
import { Book } from "../../shared/constants/types/book.type";
import { useNavigate } from "react-router-dom";
import { CUSTOMER_PATH } from "../../shared/constants/path";
import CarouselComponent from "./components/carousel/carousel";
import { ICategory } from "../../shared/constants/types/category.type";
import CategoryComponent from "./components/category/category";

interface HomeViewProps {
  data: Book[] | undefined;
  categories: ICategory[] | undefined;
  newBook: Book[] | undefined;
  popularBook: Book[] | undefined;
}

const contentStyle: React.CSSProperties = {
  height: "auto",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
  marginTop: "10px",
  padding: "10px",
};

const Homeview: FC<HomeViewProps> = (props) => {
  const { data, popularBook, newBook, categories } = props;
  const navigate = useNavigate();

  const onClickViewAllButton = () => {
    navigate(CUSTOMER_PATH.SHOP);
  };
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
      <Row gutter={[16, 16]} style={{ marginTop: "10px" }}>
        <Col xs={24} sm={24} md={8} lg={6} span={6}>
          <CategoryComponent categories={categories} />
        </Col>
        <Col xs={24} sm={24} md={16} lg={18} span={18}>
          <CarouselComponent book={popularBook} />
        </Col>
      </Row>

      <div style={contentStyle}>
        <Flex justify="space-between" align="center" gap="small">
          <img
            src="https://res.cloudinary.com/dyo7rdbmx/image/upload/v1717641347/Sale-Free-PNG-Image_bsimtf.png"
            width={100}
          />
          <Button
            onClick={onClickViewAllButton}
            style={{ width: "5rem", height: "3rem" }}
            type="link">
            View all
          </Button>
        </Flex>
        <hr />
        <Flex wrap justify="center" align="center" gap={10}>
          {data && data?.length > 0 ? (
            data?.map((item) => <CardComponent key={item.id} item={item} />)
          ) : (
            <Empty
              style={{ width: "40rem" }}
              description={<span>Sorry! No book discount now :(</span>}
            />
          )}
        </Flex>
      </div>
      <div style={contentStyle}>
        <Flex justify="space-between" align="center" gap="small">
          <img
            src="https://res.cloudinary.com/dyo7rdbmx/image/upload/v1736831699/a5v6f93glizpy1twwxpp.jpg"
            width={100}
          />
          <Button
            onClick={onClickViewAllButton}
            style={{ width: "5rem", height: "3rem" }}
            type="link">
            View all
          </Button>
        </Flex>
        <hr />
        <Flex wrap justify="center" align="center" gap={10}>
          <Flex wrap justify="center" align="center" gap={10}>
            {newBook && newBook?.length > 0 ? (
              newBook?.map((item) => (
                <CardComponent key={item.id} item={item} />
              ))
            ) : (
              <Empty
                style={{ width: "40rem" }}
                description={<span>Sorry! No book recomment now :(</span>}
              />
            )}
          </Flex>
        </Flex>
      </div>
    </ConfigProvider>
  );
};

export default Homeview;

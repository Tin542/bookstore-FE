import React from "react";
import { Carousel } from "antd";
import CardCarouselComponent from "./card";
import {books} from "../../../../shared/data/book";

const contentStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#fff",
};

const CarouselComponent: React.FC = () => {
  return (
    <Carousel style={contentStyle} arrows autoplay>
      {books.map((item) => (
        <div key={item.id}>
          <CardCarouselComponent book={item} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

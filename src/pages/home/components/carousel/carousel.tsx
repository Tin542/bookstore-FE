import React from "react";
import { Carousel } from "antd";
import CardCarouselComponent from "./card";
import { Book } from "../../../../shared/constants/types/book.type";
import "./carousel.css";

interface CarouselProps {
  book: Book[] | undefined;
}

const contentStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#fff",
};

const CarouselComponent: React.FC<CarouselProps> = (prop: CarouselProps) => {
  const { book } = prop;
  return (
    <Carousel dots={true} className="custom-dot" style={contentStyle} arrows autoplay>
      {book?.map((item) => (
        <div key={item.id}>
          <CardCarouselComponent book={item} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

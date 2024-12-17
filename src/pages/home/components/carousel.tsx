import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  width: "100%",
  objectFit: "contain",
  display: "block",
  margin: "auto",
};

const CarouselComponent: React.FC = () => (
  <Carousel arrows autoplay>
    <div>
      <img
        style={contentStyle}
        src="https://firebasestorage.googleapis.com/v0/b/neshtech-1b9aa.appspot.com/o/banner1.jpg?alt=media&token=b0ec23e7-0452-4f6a-aa5a-87a2c22cd4d7"
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://firebasestorage.googleapis.com/v0/b/neshtech-1b9aa.appspot.com/o/banner2.jpg?alt=media&token=e7218765-6215-440b-adf5-738419654ac9"
      />
    </div>
    <div>
      <img
        style={contentStyle}
        src="https://firebasestorage.googleapis.com/v0/b/neshtech-1b9aa.appspot.com/o/banner3.jpg?alt=media&token=4ef32bc9-73e8-40cc-bab0-19b167321e79"
      />
    </div>
  </Carousel>
);

export default CarouselComponent;

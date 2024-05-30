import React, { useState } from "react";
import DetailView from "./view";
import { PRODUCT_ID } from "../../shared/constants/appConstants";
import { Book } from "../../shared/constants/types/book.type";

const DetailPage = () => {
  const productId = localStorage.getItem(PRODUCT_ID);
  const [productDetail, setProductDetail] = useState<Book>();
  return <DetailView />;
};

export default DetailPage;

import React, { useEffect, useState } from "react";

import { fetchAllBooks } from "../../shared/services/book/book.service.ts";
import ShopView from "./view";

const ShopPage: React.FC = () => {
  const [category, setCategory] = useState();
  const [book, setBook] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [totalProducts, setTotalProducts] = useState();
  const [limit, setLimit] = useState();

  useEffect(() => {
    findAllBooks();
  }, []);
  const findAllBooks = () => {
    fetchAllBooks()
      .then((res) => {
        const responseData = res.data.data.findAllBooks;
        setBook(responseData.list);
        setLimit(responseData.limit);
        setTotalProducts(responseData.totalProducts);
        setCurrentPage(responseData.currentPage);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChangeRate = (val: number) => {
    console.log("Rate", val);
  };
  const onChangeSort = (val: string) => {
    console.log("Sort", val);
  };
  return (
    <ShopView
      item={book}
      currentPage={currentPage}
      totalItems={totalProducts}
      limit={limit}
      onChangeRate={onChangeRate}
      onChangeSort={onChangeSort}
      category={category}
    />
  );
};

export default ShopPage;

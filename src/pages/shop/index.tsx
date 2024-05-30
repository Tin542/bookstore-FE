import React, { useEffect, useState } from "react";

import { fetchAllBooks } from "../../shared/services/book/book.service.ts";

import ShopView from "./view";
import { BookQuery } from "../../shared/constants/types/book.type.ts";

const ShopPage: React.FC = () => {
  const [book, setBook] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [totalProducts, setTotalProducts] = useState();
  const [limit, setLimit] = useState();

  const [filter, setFilter] = useState<BookQuery>({
    title: "",
    rate: [],
    author: [],
    category: [],
    page: 1,
    limit: 12,
  });
  useEffect(() => {
    findAllBooks();
  }, [filter]);
  const findAllBooks = () => {
    fetchAllBooks(filter)
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

  const onChangeSort = (val: string) => {
    console.log("Sort", val);
  };
  const onChangePage = (val: number) => {
    setFilter({
      ...filter,
      page: val
    })
  }
  return (
    <ShopView
      item={book}
      currentPage={currentPage}
      totalItems={totalProducts}
      limit={limit}
      onChangeSort={onChangeSort}
      onChangePage={onChangePage}
      setFilter={setFilter}
      filter={filter}
    />
  );
};

export default ShopPage;

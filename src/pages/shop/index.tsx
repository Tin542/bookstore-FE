import React, { useEffect, useState } from "react";

import { fetchAllBooks } from "../../shared/services/book/book.service.ts";
import {fetchAllCategory} from "../../shared/services/category/category.service.ts";
import {fetchAllAuthor} from "../../shared/services/author/author.service.ts";
import ShopView from "./view";

const ShopPage: React.FC = () => {
  const [category, setCategory] = useState();
  const [author, setAuthor] = useState();
  const [book, setBook] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [totalProducts, setTotalProducts] = useState();
  const [limit, setLimit] = useState();

  useEffect(() => {
    findAllBooks();
    getAllCategory();
    getAllAUthor();
  }, []);
  const findAllBooks = () => {
    fetchAllBooks({})
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
  const getAllAUthor = () => {
    fetchAllAuthor()
      .then((res) => {
        const responseData = res.data.data.findAllAuthors;
        setAuthor(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const getAllCategory = () => {
    fetchAllCategory()
      .then((res) => {
        const responseData = res.data.data.findAllCategories;
        setCategory(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
      author={author}
    />
  );
};

export default ShopPage;

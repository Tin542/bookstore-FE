import { FC, useEffect, useState } from "react";
import Homeview from "./view";
import { fetchAllBooks } from "../../shared/services/book/book.service";
import {
  Book,
  SortBookByEnum,
} from "../../shared/constants/types/book.type";
import { ICategory } from "../../shared/constants/types/category.type";
import { fetchAllCategory } from "../../shared/services/category/category.service";

const HomePage: FC = () => {
  const [book, setBook] = useState<Book[]>();
  const [newBook, setNewBook] = useState<Book[]>();
  const [popularBook, setPopularBook] = useState<Book[]>();
  const [categories, setCategories] = useState<ICategory[]>();

  useEffect(() => {
    findAllBooksOnSale();
    findAllCategories();
    findPopularBook();
    findNewBook();
  }, []);

  const findAllBooksOnSale = () => {
    fetchAllBooks({
      sortByEnum: SortBookByEnum.ON_SALE,
      page: 1,
      limit: 5,
    })
      .then((res) => {
        const responseData = res.data.data.findAllBooks;
        setBook(responseData.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const findAllCategories = () => {
    fetchAllCategory().then((res) => {
      const responseData = res.data.data.findAllCategories;
      setCategories(responseData);
    }).catch((err) => {
      console.log(err);
    });
  }

  const findPopularBook = () => {
    fetchAllBooks({limit: 5, sortByEnum: SortBookByEnum.POPULAR})
      .then((res) => {
        const responseData = res.data.data.findAllBooks;
        setPopularBook(responseData.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const findNewBook = () => {
    fetchAllBooks({limit: 8, sortByEnum: SortBookByEnum.NEW})
      .then((res) => {
        const responseData = res.data.data.findAllBooks;
        setNewBook(responseData.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <Homeview categories={categories} newBook={newBook} popularBook={popularBook} data={book} />;
};

export default HomePage;

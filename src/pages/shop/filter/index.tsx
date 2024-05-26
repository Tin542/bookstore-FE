import React, { FC, useEffect, useState } from "react";

import FilterComponent from "./view";
import {fetchAllCategory} from "../../../shared/services/category/category.service.ts";
import {fetchAllAuthor} from "../../../shared/services/author/author.service.ts";

const Filter: FC = () => {
  const [category, setCategory] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    getAllCategory();
    getAllAUthor();
  }, []);

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

  return <FilterComponent category={category} author={author} />;
};
export default Filter;

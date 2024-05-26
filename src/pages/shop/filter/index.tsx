import { FC, useEffect, useState } from "react";

import FilterComponent from "./view";
import { fetchAllCategory } from "../../../shared/services/category/category.service.ts";
import { fetchAllAuthor } from "../../../shared/services/author/author.service.ts";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { SearchProps } from "antd/es/input/Search";

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
  };
  const getAllCategory = () => {
    fetchAllCategory()
      .then((res) => {
        const responseData = res.data.data.findAllCategories;
        setCategory(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeCategory = (checkedValues: CheckboxValueType[]) => {
    console.log("category = ", checkedValues);
  };

  const onChangeAuthor = (checkedValues: CheckboxValueType[]) => {
    console.log("author = ", checkedValues);
  };

  const onChangeRating = (checkedValues: CheckboxValueType[]) => {
    console.log("rate = ", checkedValues);
  };

  const onSearch: SearchProps['onSearch'] = (value) => console.log('search', value);

  return (
    <FilterComponent
      category={category}
      author={author}
      onChangeCategory={onChangeCategory}
      onChangeAuthor={onChangeAuthor}
      onChangeRating={onChangeRating}
      onSearch= {onSearch}
    />
  );
};
export default Filter;

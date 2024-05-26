import { FC, useEffect, useState } from "react";

import FilterComponent from "./view";
import { fetchAllCategory } from "../../../shared/services/category/category.service.ts";
import { fetchAllAuthor } from "../../../shared/services/author/author.service.ts";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { SearchProps } from "antd/es/input/Search";
import { IBookQuery } from "../../../shared/constants/types/book.type.ts";

interface FilterProps {
  filter: IBookQuery;
  setFilter: (value: IBookQuery) => void;
}

const Filter: FC<FilterProps> = (props) => {
  const { filter, setFilter } = props;
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
    const stringValues = checkedValues.map(value => value.toString());
    setFilter({
      ...filter,
      category: stringValues
    })
  };

  const onChangeAuthor = (checkedValues: CheckboxValueType[]) => {
    const stringValues = checkedValues.map(value => value.toString());
    setFilter({
      ...filter,
      author: stringValues
    })
  };

  const onChangeRating = (checkedValues: CheckboxValueType[]) => {
    console.log("rate = ", checkedValues);
  };

  const onSearch: SearchProps["onSearch"] = (value) =>{
    console.log("search", value);
    setFilter({
      ...filter,
      title: value
    })
  }
    

  return (
    <FilterComponent
      category={category}
      author={author}
      onChangeCategory={onChangeCategory}
      onChangeAuthor={onChangeAuthor}
      onChangeRating={onChangeRating}
      onSearch={onSearch}
    />
  );
};
export default Filter;
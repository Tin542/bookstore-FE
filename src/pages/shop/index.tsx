import React, { useState } from "react";
import type { SelectProps } from "antd";
import { useQuery } from "@apollo/client";

import { GET_ALL_BOOK } from "../../shared/services/book/graphql";
import ShopView from "./view";
import { useBookQuery } from "../../shared/services/book/bookRequest";

interface ItemProps {
  label: string;
  value: string;
}
const options: ItemProps[] = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}

const ShopPage: React.FC = () => {
  const [category, setCategory] = useState(["a10", "c12", "h17", "j19", "k20"]);
  const { loading, error, data } = useBookQuery(GET_ALL_BOOK);

  console.log('data', data?.findAllBooks.data);



  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const onChangeCategory: SelectProps = {
    value: category,
    onChange: setCategory,
  };

  const onChangeRate = (val: number) => {
    console.log("Rate", val);
  };
  const onChangeSort = (val: string) => {
    console.log("Sort", val);
  };
  return (
    <ShopView
      item={data?.findAllBooks.data}
      onChangeRate={onChangeRate}
      onChangeSort={onChangeSort}
      selectProps={onChangeCategory}
    />
  );
};

export default ShopPage;

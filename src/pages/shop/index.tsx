import React, { useState } from "react";
import type { SelectProps } from "antd";
import ShopView from "./view";
import book from "../../shared/data/book.json";

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
      item={book}
      onChangeRate={onChangeRate}
      onChangeSort={onChangeSort}
      selectProps={onChangeCategory}
    />
  );
};

export default ShopPage;

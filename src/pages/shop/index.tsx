import React from 'react'
import type { GetProp } from 'antd';
import { Checkbox } from 'antd';
import ShopView from './view';
import book from "../../shared/data/book.json";

const ShopPage = () => {
  const onChangeRate = (val: number) => {
    console.log('Rate', val)
  }
  const onChangeSort = (val: string) => {
    console.log('Sort', val)
  }
  const onChangeCategory: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  return (
    <ShopView item={book} onChangeCategory={onChangeCategory} onChangeRate={onChangeRate} onChangeSort={onChangeSort} />
  )
}

export default ShopPage;
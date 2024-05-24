import {
  Rate,
  Select,
  ConfigProvider,
  Flex,
  Pagination, 
  SelectProps,
} from "antd";
import React, { FC } from "react";

import CardComponent from "../../shared/components/Card";
import { DefaultOptionType } from "antd/es/select";

interface Item {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  rate: number;
  author: {
    name: string;
  };
}

interface ShopViewProps {
  item: Item[];
  selectProps: SelectProps<DefaultOptionType>;
  onChangeRate: (value: number) => void;
  onChangeSort: (value: string) => void;
}

const contentStyle: React.CSSProperties = {
  background: "#f5f5f5",
  padding: 10,
};
const filterContainerStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid",
  borderRadius: 5,
  padding: 5,
  height: "200px",
  width: "200px",
  textAlign: "center",
};
const { Option } = Select;
const ShopView: FC<ShopViewProps> = (props) => {
  const { onChangeRate, onChangeSort, item, selectProps } = props;

  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            titleMarginTop: 0,
            titleMarginBottom: 10,
          },
        },
        token: {
          padding: 5,
        },
      }}>
      <div style={contentStyle}>
        <Flex wrap justify="space-between" align="flex-start">
          <div style={{ padding: 5 }}>
            <Flex align="center" justify="center" gap={20} vertical>
              <div style={filterContainerStyle}>
                <h3>Category</h3>
                <Select {...selectProps} />
              </div>

              <div style={filterContainerStyle}>
                <h3>Author</h3>
                <Select {...selectProps} />
              </div>

              <div style={filterContainerStyle}>
                <h3>Rate</h3>
                <Rate onChange={onChangeRate} />
              </div>
            </Flex>
          </div>

          <div style={{ width: "63rem" }}>
            <Flex justify="space-between" align="center">
              <Select
                defaultValue="popular"
                style={{ width: 150, marginBottom: 5 }}
                onChange={onChangeSort}>
                <Option value="popular">Sort by Popular</Option>
                <Option value="onsale"> Sort by On Sale</Option>
                <Option value="all">All</Option>
              </Select>
            </Flex>

            <Flex wrap gap={5} justify="flex-start" align="center">
              {item.map((book) => (
                <CardComponent key={book.id} item={book} />
              ))}
            </Flex>
            <div style={{marginTop: 10, background: '#fff', padding: 5, width: '81.5%'}}>
            <Pagination defaultCurrent={6} total={500} />
            </div>
          </div>
        </Flex>
      </div>
    </ConfigProvider>
  );
};
export default ShopView;

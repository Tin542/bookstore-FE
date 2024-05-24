import {
  Rate,
  Select,
  Button,
  Space,
  ConfigProvider,
  Flex,
  Form,
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
  borderRadius: 2,
  padding: 5,
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
            <Form>
              <Flex align="flex-start" justify="center" vertical>
                <div style={filterContainerStyle}>
                  <h3>Category</h3>
                  <Select {...selectProps} />
                </div>

                <hr />
                <h3>Rate</h3>
                <Rate onChange={onChangeRate} />
                <hr />
                <Space size="middle">
                  <Button>submit</Button>
                  <Button>reset</Button>
                </Space>
              </Flex>
            </Form>
          </div>

          <div style={{ width: "63rem" }}>
            <Select
              defaultValue="popular"
              style={{ width: 120, marginBottom: 5 }}
              onChange={onChangeSort}>
              <Option value="popular">Popular</Option>
              <Option value="onsale">On Sale</Option>
              <Option value="all">All</Option>
            </Select>
            <Flex wrap gap={5} justify="center" align="center">
              {item.map((book) => (
                <CardComponent key={book.id} item={book} />
              ))}
            </Flex>
          </div>
        </Flex>
      </div>
    </ConfigProvider>
  );
};
export default ShopView;

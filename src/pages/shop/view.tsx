import { Select, ConfigProvider, Flex, Pagination, Empty } from "antd";
import React, { FC } from "react";

import CardComponent from "../../shared/components/Card";
import FilterComponent from "./filter/index";
import { IBook, BookQuery } from "../../shared/constants/types/book.type";

interface ShopViewProps {
  item: IBook[] | undefined;
  currentPage: number | undefined;
  totalItems: number | undefined;
  limit: number | undefined;
  onChangeSort: (value: string) => void;
  onChangePage: (value: number) => void;
  setFilter: (value: BookQuery) => void;
  filter: BookQuery;
}

const contentStyle: React.CSSProperties = {
  background: "#f5f5f5",
  padding: 10,
};

const { Option } = Select;
const ShopView: FC<ShopViewProps> = (props) => {
  const {
    onChangeSort,
    item,
    currentPage,
    totalItems,
    limit,
    onChangePage,
    setFilter,
    filter,
  } = props;

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
        <Flex gap={50} justify="flex-start" align="flex-start">
          <FilterComponent filter={filter} setFilter={setFilter} />
          <div style={{ margin: "0 -7px" }}>
            <Flex justify="space-between" align="center">
              <Select
                defaultValue="ALL"
                style={{ width: 150, marginBottom: 5 }}
                onChange={onChangeSort}>
                <Option value="ALL">All</Option>
                <Option value="NEW">Sort by New</Option>
                <Option value="ON_SALE"> Sort by On Sale</Option>
              </Select>
            </Flex>
            <div style={{ minHeight: "120vh" }}>
              <Flex wrap gap={5} justify="flex-start" align="center">
                {item && item.length > 0 ? (
                  item.map((book) => (
                    <CardComponent key={book.id} item={book} />
                  ))
                ) : (
                  <Empty style={{ width: "40rem" }} />
                )}
              </Flex>
            </div>
            <div
              style={{
                marginTop: 10,
                background: "#fff",
                padding: 5,
                width: "98%",
              }}>
              <Pagination
                defaultCurrent={currentPage ? currentPage : 1}
                total={totalItems}
                pageSize={limit}
                onChange={onChangePage}
              />
            </div>
          </div>
        </Flex>
      </div>
    </ConfigProvider>
  );
};
export default ShopView;

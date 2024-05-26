import { Select, ConfigProvider, Flex, Pagination, Empty } from "antd";
import React, { FC } from "react";

import CardComponent from "../../shared/components/Card";
import FilterComponent from "./filter/index";
import { IBook } from "../../shared/constants/types/book.type";

interface ShopViewProps {
  item: IBook[] | undefined;
  currentPage: number | undefined;
  totalItems: number | undefined;
  limit: number | undefined;
  onChangeSort: (value: string) => void;
}

const contentStyle: React.CSSProperties = {
  background: "#f5f5f5",
  padding: 10,
};

const { Option } = Select;
const ShopView: FC<ShopViewProps> = (props) => {
  const { onChangeSort, item, currentPage, totalItems, limit } = props;
  // const [data, setData] = useState(item.data.findAllBooks.data);

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
        <Flex gap={50} justify="center" align="flex-start">
          <FilterComponent />
          <div style={{ margin: "0 -7px" }}>
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
              {item && item.length > 0 ? (
                item.map((book) => <CardComponent key={book.id} item={book} />)
              ) : (
                <Empty style={{ width: "40rem" }} />
              )}
            </Flex>
            <div
              style={{
                marginTop: 10,
                background: "#fff",
                padding: 5,
                width: "81.5%",
              }}>
              <Pagination
                defaultCurrent={currentPage ? currentPage : 1}
                total={totalItems}
                pageSize={limit}
              />
            </div>
          </div>
        </Flex>
      </div>
    </ConfigProvider>
  );
};
export default ShopView;

import { Rate, Select, ConfigProvider, Flex, Pagination, Empty } from "antd";
import React, { FC } from "react";

import CardComponent from "../../shared/components/Card";
import { IBook } from "../../shared/types/book.type";
import { ICategory } from "../../shared/types/category.type";
import { IAuthor } from "../../shared/types/author.type";

interface ShopViewProps {
  item: IBook[] | undefined;
  currentPage: number | undefined;
  totalItems: number | undefined;
  limit: number | undefined;
  category: ICategory[] | undefined;
  author: IAuthor[] | undefined;
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
  overflow: "scroll",
};
const { Option } = Select;
const ShopView: FC<ShopViewProps> = (props) => {
  const {
    onChangeRate,
    onChangeSort,
    item,
    currentPage,
    totalItems,
    limit,
    category,
    author,
  } = props;
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
          <div style={{ padding: 5 }}>
            <Flex align="center" justify="center" gap={20} vertical>
              <div style={filterContainerStyle}>
                <h3>Category</h3>
                {category && category.length > 0
                  ? category.map((item) => (
                      <p>
                        <a>{item.name}</a>
                      </p>
                    ))
                  : ""}
              </div>

              <div style={filterContainerStyle}>
                <h3>Author</h3>
                {author && author.length > 0
                  ? author.map((item) => (
                      <p>
                        <a>{item.name}</a>
                      </p>
                    ))
                  : ""}
              </div>

              <div style={filterContainerStyle}>
                <h3>Rate</h3>
                <Rate onChange={onChangeRate} />
              </div>
            </Flex>
          </div>

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
                <Empty />
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

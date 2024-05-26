import { Flex, Rate } from "antd";
import React, { FC } from "react";
import { ICategory } from "../../../shared/constants/types/category.type";
import { IAuthor } from "../../../shared/constants/types/author.type";

interface FilterComponentProps {
  category: ICategory[] | undefined;
  author: IAuthor[] | undefined;
}

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

const FilterComponent: FC<FilterComponentProps> = (props) => {
  const { category, author } = props;
  return (
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
          <Rate />
        </div>
      </Flex>
    </div>
  );
};
export default FilterComponent;

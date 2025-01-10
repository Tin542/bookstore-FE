import React from "react";
import { Button, Flex } from "antd";
import './style.css';
import { ICategory } from "../../../../shared/constants/types/category.type";

interface CategoryProps {
  categories: ICategory[] | undefined;
}

const style: React.CSSProperties = {
  backgroundColor: "#333333",
  maxHeight: "440px",
  overflowY: "hidden",
};

const CategoryComponent: React.FC<CategoryProps> = (props: CategoryProps) => {
  const { categories } = props;
  return (
    <div style={style}>
      <Flex vertical gap={5} justify="center" align="center">
        {categories?.map((item, index) => (
          <Button className="button"
            key={index}>
            {item.name}
            
          </Button>
        ))}
      </Flex>
    </div>
  );
};

export default CategoryComponent;

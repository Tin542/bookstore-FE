import React from "react";
import { Button, Flex } from "antd";
import "./style.css";
import { ICategory } from "../../../../shared/constants/types/category.type";
import { useNavigate } from "react-router-dom";
import { CUSTOMER_PATH } from "../../../../shared/constants/path";

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
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    const queryParams = new URLSearchParams(location.search);

    // Nếu không có category nào được chọn thì xóa query param
    if (id.length === 0) {
      queryParams.delete("category");
    } else {
      queryParams.set("category", id);
    }

    navigate({
      pathname: CUSTOMER_PATH.SHOP,
      search: queryParams.toString(),
    });
  };

  return (
    <div style={style}>
      <Flex vertical gap={5} justify="center" align="center">
        {categories?.map((item, index) => (
          <Button className="button" onClick={() => handleClick(item.id || '')} key={index}>
            {item.name}
          </Button>
        ))}
      </Flex>
    </div>
  );
};

export default CategoryComponent;

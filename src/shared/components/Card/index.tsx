import React from "react";
import { Card, Flex, Rate, Tooltip, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import { AUTH_PATH, CUSTOMER_PATH } from "../../constants/path";
import { Book } from "../../constants/types/book.type";
import { PRODUCT_ID } from "../../constants/appConstants";
import { calculateDiscount } from "../../utils/calculateTotalPrice";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, userSelector } from "../../redux-flow/selector";
import { errorPopUpMessage, successPopUpMessage } from "../Notification";
import { addCartItem } from "../../services/cart/cart.service";
import { CartItemType } from "../../constants/types/cart.type";
import { handleStoreCart } from "../../redux-flow/action";

interface CardComponentProps {
  item: Book;
}

const cardStyle: React.CSSProperties = {
  width: "15rem",
  height: "auto",
  borderRadius: 0,
  paddingTop: "10px",
  overflow: "hidden",
};

const { Text } = Typography;

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStore = useSelector(userSelector);
  const cartStore = useSelector(cartSelector);
  

  const onClickDetail = () => {
    localStorage.setItem(PRODUCT_ID, item.id);
    navigate(CUSTOMER_PATH.DETAIL_PRODUCT);
  };

   const addToCartButton = async () => {
      if (!userStore) {
        errorPopUpMessage("Add to cart failed", "Signin required");
        navigate(AUTH_PATH.SIGNIN);
      } else {
        if (!item) {
          errorPopUpMessage("Add to cart failed", "Cannot find product ");
          return;
        }
        const actualPrice = calculateDiscount(
          item.limitDiscount,
          item.price,
          item.bookPromotion
        );
        const result = await addCartItem({
          bookId: item?.id,
          price:
            actualPrice > 0
              ? actualPrice * 1
              : item.price * 1,
          quantity: 1,
          userId: userStore.id,
        });
        if (!result.data.data) {
          errorPopUpMessage("Add to cart failed", result.data.errors[0].message);
          return;
        }
        const response = result.data.data.addToCart;
        if (cartStore) {
          const updatedCart: CartItemType[] = cartStore
            ? cartStore?.map((item) =>
                item.id === response.id
                  ? {
                      ...item,
                      quantity: response.quantity,
                      price: response.price,
                    }
                  : item
              )
            : [];
          // If the item was not found in the cart, add the new item to the cart
          if (!updatedCart.find((cartItem) => cartItem.id === response.id)) {
            updatedCart.push(response);
          }
          dispatch(handleStoreCart(updatedCart));
          successPopUpMessage("Added To Cart");
        } else {
          errorPopUpMessage("Add to cart failed", "Could not find cart");
        }
        await addCartItem({
          bookId: item?.id,
          price:
            actualPrice > 0
              ? actualPrice * 1
              : item.price * 1,
          quantity: 1,
          userId: userStore.id,
        });
      }
    };

  return (
    <Card
      hoverable
      style={cardStyle}
      cover={
        <div style={{ width: "100%", height: "178px", textAlign: "center" }}>
          <img
            style={{ borderRadius: 0, height: "100%", objectFit: "cover" }}
            alt="example"
            src={item.imageUrl}
          />
        </div>
      }
      actions={[
        <ShoppingCartOutlined onClick={addToCartButton} />,
        <HeartOutlined />,
      ]}>
      <Flex onClick={onClickDetail} vertical align="start" style={{ lineHeight: 2 }}>
        <Rate disabled value={item.rate} style={{ fontSize: 15 }} />
        <Tooltip title={item.title}>
          <Typography.Paragraph
            ellipsis={{
              rows: 2,
            }}
            style={{ textAlign: "left", fontWeight: "bold" }}>
            {item.title}
          </Typography.Paragraph>
        </Tooltip>
        {item.bookPromotion.length > 0 ? (
          <Flex justify="flex-start" gap={10}>
            <Text delete>${item.price}</Text>
            <Text strong type="danger">
              $
              {calculateDiscount(
                item.limitDiscount,
                item.price,
                item.bookPromotion
              )}
            </Text>
          </Flex>
        ) : (
          <span>${item.price}</span>
        )}
      </Flex>
    </Card>
  );
};

export default CardComponent;

import React from "react";
import { Button, Card, ConfigProvider, Rate } from "antd";
import { IBook } from "../../constants/types/book.type";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, userSelector } from "../../redux-flow/selector";
import { addCartItem } from "../../services/cart/cart.service";
import { useNavigate } from "react-router-dom";
import { AUTH_PATH } from "../../constants/path";
import { errorPopUpMessage, successPopUpMessage } from "../Notification";
import { handleStoreCart } from "../../redux-flow/action";
import { CartItemType } from "../../constants/types/cart.type";

interface CardComponentProps {
  item: IBook;
}

const cardStyle: React.CSSProperties = {
  width: "12rem",
  borderRadius: 0,
  padding: "10px",
  overflow: "hidden",
};

const { Meta } = Card;
const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { item } = props;
  const userStore = useSelector(userSelector);
  const cartStore = useSelector(cartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartButton = async () => {
    if (!userStore) {
      errorPopUpMessage("Failed to add cart item", "Authorzation required");
      navigate(AUTH_PATH.SIGNIN);
    } else {
      await addCartItem({
        bookId: item.id,
        price: item.price,
        quantity: 1,
        userId: userStore.id,
      }).then((rs) => {
        const response = rs.data.data.addToCart;

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
          successPopUpMessage("Added To Cart")
        } else {
          errorPopUpMessage("Failed to add cart item", "Could not find cart")
        }
      });
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverColor: "#fff",
            defaultHoverBorderColor: "#001529",
            defaultHoverBg: "#001529",
          },
        },
      }}>
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
        }>
        <div>
          <Rate disabled value={item.rate} style={{ fontSize: 15 }} />
          <Meta title={item.title} description={`${item.price} VND`} />
        </div>
        <div style={{ marginTop: 20, marginBottom: -20 }}>
          <Button
            onClick={addToCartButton}
            style={{ borderRadius: 0 }}
            icon={<ShoppingCartOutlined />}>
            Add To Cart
          </Button>
        </div>
      </Card>
    </ConfigProvider>
  );
};

export default CardComponent;

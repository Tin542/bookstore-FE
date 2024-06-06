import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DetailView from "./view";
import { PRODUCT_ID } from "../../shared/constants/appConstants";
import { Book } from "../../shared/constants/types/book.type";
import { fetchOneBook } from "../../shared/services/book/book.service";
import { errorPopUpMessage, successPopUpMessage } from "../../shared/components/Notification";
import { cartSelector, userSelector } from "../../shared/redux-flow/selector";
import { AUTH_PATH } from "../../shared/constants/path";
import { addCartItem } from "../../shared/services/cart/cart.service";
import { CartItemType } from "../../shared/constants/types/cart.type";
import { handleStoreCart } from "../../shared/redux-flow/action";
import { calculateDiscount } from "../../shared/utils/calculateTotalPrice";

const DetailPage = () => {
  const productId = localStorage.getItem(PRODUCT_ID);
  const userStore = useSelector(userSelector);
  const cartStore = useSelector(cartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState<Book>();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (productId) {
      loadDetail(productId);
    }
  }, []);

  const loadDetail = async (id: string) => {
    await fetchOneBook(id)
      .then((rs) => {
        setProductDetail(rs.data.data.getDetailBook);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addToCartButton = async () => {
    if (!userStore) {
      errorPopUpMessage("Add to cart failed", "Signin required");
      navigate(AUTH_PATH.SIGNIN);
    } else {
      if(!productDetail) {
        errorPopUpMessage("Add to cart failed", "Cannot find product ");
        return;
      }
      await addCartItem({
        bookId: productDetail?.id,
        price: calculateDiscount(productDetail.price, productDetail.bookPromotion) * quantity,
        quantity: quantity,
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
          successPopUpMessage("Added To Cart");
        } else {
          errorPopUpMessage("Add to cart failed", "Could not find cart");
        }
      });
    }
  };

  const onChange = (value: number | null) => {
    setQuantity(value as number);
  };
  return <>
  <DetailView data={productDetail} quantity={quantity} onChangeQuantity={onChange} addToCartButton={addToCartButton} />;
  </>
};

export default DetailPage;

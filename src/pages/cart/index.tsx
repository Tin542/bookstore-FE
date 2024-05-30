import CartView from './view';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../../shared/redux-flow/selector';
import { CartItemType, UpdateCartItemType } from '../../shared/constants/types/cart.type';
import { deleteCartItem, updateCartItem } from '../../shared/services/cart/cart.service';
import { handleStoreCart } from '../../shared/redux-flow/action';
import { errorPopUpMessage, successPopUpMessage } from '../../shared/components/Notification';

const CartPage = () => {
  const cartStore = useSelector(cartSelector);
  // const userStore = useSelector(userSelector);
  const dispatch = useDispatch();

  const updateQuantity = async (value: UpdateCartItemType) => {
    try {
      const response = await updateCartItem(value);
      const updatedItem = response.data.data.updateCart;

      // Update Store
      const updatedCart: CartItemType[] = cartStore ?  cartStore?.map((item) => 
        item.id === updatedItem.id ? { ...item, quantity: updatedItem.quantity, price: updatedItem.price } : item
      ) : [];
      dispatch(handleStoreCart(updatedCart));
    } catch (error) {
      errorPopUpMessage("Update Cart item failed", '');
      console.error('Error updating quantity:', error);
    }
  };

  const removeCartItem = async(cid: string) => {
    try {
      const response = await deleteCartItem(cid);
      const deletedItem = response.data.data.removeCart;

      // Update Store
      const updatedCart: CartItemType[] = cartStore ?  cartStore.filter((item) => item.id !== deletedItem.id) : [];
      dispatch(handleStoreCart(updatedCart));
      successPopUpMessage("Delete Cart  item successfully")
    } catch (error) {
      errorPopUpMessage("Remove Cart item failed", '');
      console.log('Error removing', error)
    }
  }

  const onChangeQuantity = async (value: number, item: CartItemType) => {
    await updateQuantity({ id: item.id, quantity: value });
  };

  const onClickRemoveCartItem = async(cartId: string) => {
    await removeCartItem(cartId);
  }

  return (
    <CartView data={cartStore} onChangeQuantity={onChangeQuantity} onClickRemoveCartItem={onClickRemoveCartItem} />
  );
};

export default CartPage;

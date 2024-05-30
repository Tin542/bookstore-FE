import CartView from './view';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../../shared/redux-flow/selector';
import { CartItemType, UpdateCartItemType } from '../../shared/constants/types/cart.type';
import { updateCartItem } from '../../shared/services/cart/cart.service';
import { handleStoreCart } from '../../shared/redux-flow/action';

const CartPage = () => {
  const cartStore = useSelector(cartSelector);
  // const userStore = useSelector(userSelector);
  const dispatch = useDispatch();

  const updateQuantity = async (value: UpdateCartItemType) => {
    try {
      const response = await updateCartItem(value);
      const updatedItem = response.data.data.updateCart;
      
      const updatedCart: CartItemType[] = cartStore ?  cartStore?.map((item) => 
        item.id === updatedItem.id ? { ...item, quantity: updatedItem.quantity, price: updatedItem.price } : item
      ) : [];
      
      dispatch(handleStoreCart(updatedCart));
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const onChangeQuantity = async (value: number, item: CartItemType) => {
    await updateQuantity({ id: item.id, quantity: value });
  };

  return (
    <CartView data={cartStore} onChangeQuantity={onChangeQuantity} />
  );
};

export default CartPage;

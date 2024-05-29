import { ACCESS_TOKEN, CART_STORE, USER_STORE } from "../constants/appConstants";
import { CartStoreType } from "../constants/types/cart.type";
import { CART, GetCartAction, LOGIN, LOGOUT, LoginAction, LogoutAction } from "../constants/types/redux.type";
import { UserStoreType } from "../constants/types/user.type";

export const handleLogin = (data: UserStoreType): LoginAction => {
  localStorage.setItem(USER_STORE, JSON.stringify(data));
  localStorage.setItem(ACCESS_TOKEN, data.accessToken);
  return {
    type: LOGIN,
    payload: data,
  };
};

export const handleLogout = (): LogoutAction => {
  localStorage.removeItem(USER_STORE);
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(CART_STORE);
  return {
    type: LOGOUT,
  };
};

export const handleStoreCart = (cart: CartStoreType[]): GetCartAction => {
  localStorage.setItem(CART_STORE, JSON.stringify(cart))
  return {
    type: CART,
    payload: cart
  }
}

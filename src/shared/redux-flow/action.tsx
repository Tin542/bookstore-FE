import { ACCESS_TOKEN, USER_STORE } from "../constants/appConstants";
import { LOGIN, LOGOUT, LoginAction, LogoutAction, User } from "../constants/types/redux.type";

export const handleLogin = (data: User): LoginAction => {
  localStorage.setItem(USER_STORE, JSON.stringify(data));
  localStorage.setItem(ACCESS_TOKEN, JSON.stringify(data.accessToken));
  return {
    type: LOGIN,
    payload: data,
  };
};

export const handleLogout = (): LogoutAction => {
  localStorage.removeItem(USER_STORE);
  localStorage.removeItem(ACCESS_TOKEN);
  return {
    type: LOGOUT,
  };
};

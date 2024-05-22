import { USER_STORE } from "../constants/appConstants";
import { LOGIN, LoginAction, LogoutAction, User } from "../constants/type";

export const handleLogin = (data: User): LoginAction => {
  localStorage.setItem(USER_STORE, JSON.stringify(data));
  return {
    type: LOGIN,
    payload: data,
  };
};

export const handleLogout = (): LogoutAction => {
  localStorage.setItem(USER_STORE, "{}");
  return {
    type: "auth/logout",
    payload: undefined,
  };
};

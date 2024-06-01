/* eslint-disable @typescript-eslint/no-explicit-any */
import { CART, LOGIN } from "../appConstants";
import { CartItemType } from "./cart.type";
import { UserStoreType } from "./user.type";

// Define the base action type
interface UnknownAction {
  type: string;
  [key: string]: any; // Index signature
}

// State type

export interface State {
  user: UserStoreType | undefined;
  cart: CartItemType[] | undefined;
}

//Actions Type
export interface LoginAction extends UnknownAction {
  type: typeof LOGIN;
  payload: UserStoreType;
}

export interface LogoutAction extends UnknownAction {
  type: string;
}

export interface GetCartAction extends UnknownAction {
  type: typeof CART;
  payload: CartItemType[]
}

export type AuthActionTypes = LoginAction | LogoutAction ;

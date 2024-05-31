/* eslint-disable react-refresh/only-export-components */
import { ComponentType, lazy } from "react";

import { AUTH_PATH, CUSTOMER_PATH } from "../shared/constants/path";

const HomePage = lazy(() => import("./home"));
const ShopPage = lazy(() => import("./shop"));
const AboutPage = lazy(() => import("./about"));
const CartPage = lazy(() => import("./cart"));
const SignInPage = lazy(() => import("./auth/signin"));
const SignUpPage = lazy(() => import("./auth/signup"));
const ProfilePage = lazy(() => import("./profile"));
const DetailPage = lazy(() => import("./detail"));
const OrderPage = lazy(() => import("./order"));

interface RouteObject {
  path: string;
  component: ComponentType;
  exact?: boolean; // Add other route-specific properties as needed
  protected?: boolean // check if routes is need to be protected
}

const pageRoutes: RouteObject[] = [
  {
    path: CUSTOMER_PATH.PROFILE,
    exact: true,
    component: ProfilePage,
    protected: true,
  },
  {
    path: CUSTOMER_PATH.CART,
    exact: true,
    component: CartPage,
    protected: true,
  },
  {
    path: CUSTOMER_PATH.ORDER,
    exact: true,
    component: OrderPage,
    protected: true,
  },
  {
    path: CUSTOMER_PATH.DETAIL_PRODUCT,
    exact: true,
    component: DetailPage,
  },
  {
    path: AUTH_PATH.SIGNIN,
    exact: true,
    component: SignInPage,
  },
  {
    path: AUTH_PATH.SIGNUP,
    exact: true,
    component: SignUpPage,
  },
  {
    path: CUSTOMER_PATH.HOME,
    exact: true,
    component: HomePage,
  },
  {
    path: CUSTOMER_PATH.SHOP,
    exact: true,
    component: ShopPage,
  },
  {
    path: CUSTOMER_PATH.ABOUT,
    exact: true,
    component: AboutPage,
  },
];

export default pageRoutes;

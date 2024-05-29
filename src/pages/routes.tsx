import { ComponentType, lazy } from "react";

import { AUTH_PATH, CUSTOMER_PATH } from "../shared/constants/path";

const HomePage = lazy(() => import("./home"));
const ShopPage = lazy(() => import("./shop"));
const AboutPage = lazy(() => import("./about"));
const CartPage = lazy(() => import("./cart"));
const SignInPage = lazy(() => import("./auth/signin"));
const SignUpPage = lazy(() => import("./auth/signup"));
const ProfilePage = lazy(() => import("./profile"));

interface RouteObject {
  path: string;
  component: ComponentType;
  exact?: boolean; // Add other route-specific properties as needed
}

const pageRoutes: RouteObject[] = [
  {
    path: CUSTOMER_PATH.PROFILE,
    exact: true,
    component: ProfilePage,
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
  {
    path: CUSTOMER_PATH.CART,
    exact: true,
    component: CartPage,
  },
];

export default pageRoutes;

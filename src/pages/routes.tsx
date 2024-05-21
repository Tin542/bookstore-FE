import { lazy } from "react";

const HomePage = lazy(() => import("./home"));
const ShopPage = lazy(() => import("./shop"));
const AboutPage = lazy(() => import("./about"));
const CartPage = lazy(() => import("./cart"));
const SignInPage = lazy(() => import("./authentication/signin"));
const SignUpPage = lazy(() => import("./authentication/signup"));

export default [
    {
        path: "/",
        exact: true,
        public: true,
        component: HomePage
    },
    {
        path: "/sign-in",
        exact: true,
        public: true,
        component: SignInPage
    },
    {
        path: "/sign-up",
        exact: true,
        public: true,
        component: SignUpPage
    },
    {
        path: "/shop",
        exact: true,
        public: true,
        component: ShopPage 
    },
    {
        path: "/about",
        exact: true,
        public: true,
        component: AboutPage 
    },
    {
        path: "/cart",
        exact: true,
        public: true,
        component: CartPage
    }
]
import { lazy } from "react";

const HomePage = lazy(() => import("./home"));
const ShopPage = lazy(() => import("./shop"));

export default [
    {
        path: "/",
        exact: true,
        public: true,
        component: HomePage
    },
    {
        path: "/shop",
        exact: true,
        public: true,
        component: ShopPage 
    }
]
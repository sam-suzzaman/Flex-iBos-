import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../Layout/MainLayout";
import ProductsLayout from "../Layout/ProductsLayout";

// Pages
import HomePage from "../page/HomePage";
import ProductsPage from "../page/ProductsPage";
import OrderPage from "../page/OrderPage";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";

// Private Routes

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/cart",
                element: <OrderPage />,
            },
            {
                path: "/products/:category",
                element: <ProductsLayout />,
                children: [
                    {
                        index: true,
                        element: <ProductsPage />,
                    },
                ],
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
        ],
    },
]);

export default router;

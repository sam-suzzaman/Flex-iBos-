import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import CartContextWrapper from "../context/CartContext";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    const location = useLocation();
    const isAuthRoute = location.pathname === "/login";
    const isRegisterRoute = location.pathname === "/register";

    if (isAuthRoute || isRegisterRoute) {
        return (
            <>
                <Toaster position="top-center" />
                <Outlet />
            </>
        );
    } else {
        return (
            <>
                <CartContextWrapper>
                    <Toaster position="top-center" />
                    <Navbar />
                    <Outlet />
                    <Footer />
                </CartContextWrapper>
            </>
        );
    }
};

export default MainLayout;

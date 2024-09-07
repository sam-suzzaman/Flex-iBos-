import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import CartContextWrapper from "../context/CartContext";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "../context/AuthContext";

const MainLayout = () => {
    const location = useLocation();
    const isAuthRoute = location.pathname === "/login";
    const isRegisterRoute = location.pathname === "/register";

    if (isAuthRoute || isRegisterRoute) {
        return (
            <AuthContextProvider>
                <Toaster position="top-center" />
                <Outlet />
            </AuthContextProvider>
        );
    } else {
        return (
            <>
                <AuthContextProvider>
                    <CartContextWrapper>
                        <Toaster position="top-center" />
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </CartContextWrapper>
                </AuthContextProvider>
            </>
        );
    }
};

export default MainLayout;

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    const location = useLocation();
    const isAuthRoute = location.pathname === "/login";
    const isResetRoute = location.pathname === "/register";

    if (isAuthRoute || isResetRoute) {
        return <Outlet />;
    } else {
        return (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        );
    }
};

export default MainLayout;

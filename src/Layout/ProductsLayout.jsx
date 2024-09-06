import React from "react";
import Sidebar from "../components/productsPageCom/Sidebar";
import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
    return (
        <section className="products-page-wrapper wrapper">
            <div className="products-page-container container">
                <div className="left-sidebar">
                    <Sidebar />
                </div>
                <div className="right-content">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default ProductsLayout;

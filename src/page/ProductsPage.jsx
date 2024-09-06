import React from "react";
import ProductCard from "../components/shared/ProductCard";
import Pagination from "../components/productsPageCom/Pagination";
import Sidebar from "../components/productsPageCom/Sidebar";

const ProductsPage = () => {
    return (
        <section className="products-page-wrapper wrapper">
            <div className="products-page-container container">
                <div className="left-sidebar">
                    <Sidebar />
                </div>
                <div className="right-content">
                    {/* card row */}
                    <div className="products-row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                    {/* paginantion row */}
                    <Pagination />
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;

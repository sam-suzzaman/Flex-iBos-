import React, { useState } from "react";
import ProductCard from "../components/shared/ProductCard";
import Pagination from "../components/productsPageCom/Pagination";
import Sidebar from "../components/productsPageCom/Sidebar";
import { useGetHook } from "../hooks/useGetHook";

const ProductsPage = () => {
    const { isLoading, data, isError, error } = useGetHook("/db/products.json");

    if (isLoading) {
        return <div className="">loading...</div>;
    }
    if (isError) {
        return <div className="">{error}</div>;
    }
    return (
        <>
            <div className="products-row">
                {data?.map((product) => (
                    <ProductCard key={product?._id} product={product} />
                ))}
            </div>

            {/* paginantion row */}
            <Pagination />
        </>
    );
};

// const a = (
//     <section className="products-page-wrapper wrapper">
//         <div className="products-page-container container">
//             <div className="left-sidebar">
//                 <Sidebar />
//             </div>
//             <div className="right-content">
//                 {/* card row */}
//                 <div className="products-row">
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                     <ProductCard />
//                 </div>

//                 {/* paginantion row */}
//                 <Pagination />
//             </div>
//         </div>
//     </section>
// );

export default ProductsPage;

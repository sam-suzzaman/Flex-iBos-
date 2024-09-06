import React from "react";
import product from "../../assets/p1.png";
import { BsHandbag } from "react-icons/bs";

const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={product} alt="product photo" />
            </div>
            <div className="content">
                <h3 className="title">Recliner Chair Wood</h3>
                <div className="price-row">
                    <span className="current">€299.00</span>
                    <span className="old">€350.00</span>
                    <span className="discount">30% OFF</span>
                </div>
                <p className="des">
                    It has a backrest that can be tilted back, and often a
                    footrest extended
                </p>
            </div>
            <div className="footer">
                <a href="#" className="btn-type-3">
                    <BsHandbag className="icon" />
                    Add to Cart
                </a>
            </div>
        </div>
    );
};

export default ProductCard;

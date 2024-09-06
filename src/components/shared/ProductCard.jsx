import React from "react";
import { BsHandbag } from "react-icons/bs";
import { useCartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
    const { state, handleItemAddToCart } = useCartContext();

    let isBtnDisabled = state?.cart?.some((item) => item._id === product?._id);

    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={product?.photo} alt="product photo" />
            </div>
            <div className="content">
                <h3 className="title">{product?.title}</h3>
                <div className="price-row">
                    <span className="current">€{product?.discountPrice}</span>
                    <span className="old">€{product?.oldPrice}</span>
                    <span className="discount">{product?.discount} OFF</span>
                </div>
                <p className="des">{product?.description}</p>
            </div>
            <div className="footer">
                <button
                    disabled={isBtnDisabled}
                    onClick={() => handleItemAddToCart(product)}
                    className="btn-type-3"
                >
                    <BsHandbag className="icon" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

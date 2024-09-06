import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useCartContext } from "../../context/CartContext";

const OrderRow = ({ product }) => {
    const {
        handleIncreaseItemQuantity,
        handleDecreaseItemQuantity,
        handleRemoveItemFromCart,
    } = useCartContext();

    return (
        <div className="row">
            <div className="inner-row-1">
                <div className="col-1">
                    <div className="controllers">
                        <button
                            className={`minus controller ${
                                product?.quantity == 1 && "disabled"
                            }`}
                            onClick={() =>
                                handleDecreaseItemQuantity(product?._id)
                            }
                        >
                            <FaMinus />
                        </button>
                        <span className="value">{product?.quantity}</span>
                        <button
                            className={`plus controller ${
                                product?.quantity == 10 && "disabled"
                            }`}
                            onClick={() =>
                                handleIncreaseItemQuantity(product?._id)
                            }
                        >
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div className="col-2">
                    <div className="thumb">
                        <img src={product?.photo} alt="product" />
                    </div>
                </div>
                <div className="col-3">
                    <h3 className="title">{product?.title}</h3>
                    <button
                        className="remove"
                        onClick={() => handleRemoveItemFromCart(product?._id)}
                    >
                        <RxCross1 />
                    </button>
                </div>
            </div>
            <div className="inner-row-2">
                <span className="price">€{product?.discountPrice}</span>
            </div>
        </div>
    );
};

export default OrderRow;

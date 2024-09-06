import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

import OrderRow from "../components/orderPageCom/OrderRow";
import { useCartContext } from "../context/CartContext";

const OrderPage = () => {
    const { state } = useCartContext();

    return (
        <section className="order-page-wrapper wrapper">
            <div className="order-page-container container">
                <div className="left-col">
                    <h4 className="sec-title">An overview of your order</h4>

                    {/* order list */}
                    <div className="order-table">
                        {state?.cart?.map((product) => (
                            <OrderRow key={product?._id} product={product} />
                        ))}
                    </div>
                </div>

                <div className="right-col">
                    <h4 className="sec-title">Order details</h4>
                    <div className="order-price-card">
                        <div className="cost-list">
                            <div className="item">
                                <span className="left">Subtotal</span>
                                <span className="right">
                                    € {state?.subTotalPrice}
                                </span>
                            </div>
                            <div className="item">
                                <span className="left">shipping</span>
                                <span className="right">Free</span>
                            </div>
                            <div className="item">
                                <span className="left with-icon">
                                    Estimated Tax
                                    <IoIosInformationCircleOutline className="icon" />
                                </span>
                                <span className="right">€ {state?.tax}</span>
                            </div>
                        </div>
                        <div className="total-price">
                            <span className="left">Total</span>
                            <span className="right">€ {state?.finalPrice}</span>
                        </div>
                    </div>
                    <div className="order-btn-row">
                        <button className="btn-type-1">go to checkout</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderPage;

import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

import thumb from "../../assets/p1.png";

const OrderRow = () => {
    return (
        <div className="row">
            <div className="inner-row-1">
                <div className="col-1">
                    <div className="controllers">
                        <button className="minus controller disabled">
                            <FaMinus />
                        </button>
                        <span className="value">00</span>
                        <button className="plus controller">
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div className="col-2">
                    <div className="thumb">
                        <img src={thumb} alt="product" />
                    </div>
                </div>
                <div className="col-3">
                    <h3 className="title">Recliner Chair Steel</h3>
                    <button className="remove">
                        <RxCross1 />
                    </button>
                </div>
            </div>
            <div className="inner-row-2">
                <span className="price">€1071.00</span>
            </div>
        </div>
    );
};

export default OrderRow;

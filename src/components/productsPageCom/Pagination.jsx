import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Pagination = () => {
    return (
        <div className="pagination-row">
            <button className="paginate-btn disabled">
                <FaAngleLeft />
            </button>
            <button className="paginate-btn active">1</button>
            <button className="paginate-btn">2</button>
            <button className="paginate-btn dot">...</button>
            <button className="paginate-btn ">9</button>
            <button className="paginate-btn ">10</button>
            <button className="paginate-btn disabled">
                <FaAngleRight />
            </button>
        </div>
    );
};

export default Pagination;

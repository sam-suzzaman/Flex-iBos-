import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
    { _id: 1, name: "rocking chair", value: "rocking-chair" },
    { _id: 2, name: "side chair", value: "side-chair" },
    { _id: 3, name: "lounge chair", value: "lounge-chair" },
];
const Sidebar = () => {
    return (
        <ul className="sidebar-menu">
            {categories?.map((category) => (
                <li className="item" key={category._id}>
                    <NavLink
                        to={`/products/${category?.value}`}
                        className="link"
                    >
                        {category?.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Sidebar;

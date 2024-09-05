import React from "react";
import logo from "../../assets/Logo.png";
import avatar from "../../assets/Account.png";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <nav className="navbar-wrapper">
            <div className="navbar-container">
                {/* Start Col */}
                <div className="navbar-start">
                    <a href="#" className="brand">
                        <img src={logo} alt="brand" />
                    </a>
                    <div className="navbar-toggler">
                        <RxHamburgerMenu className="icon" />
                    </div>
                </div>
                {/* Center Col */}
                <div className="navbar-center">
                    <ul className="main-menu">
                        <li className="item">
                            <a href="#" className="link active">
                                home
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">
                                products
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">
                                categories
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">
                                custom
                            </a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">
                                blog
                            </a>
                        </li>
                    </ul>
                </div>
                {/* End Col */}
                <div className="navbar-end">
                    <ul className="lists">
                        <li className="item cart-item">
                            <IoBagOutline className="cart-icon" />
                            <span className="cart-badge">13</span>
                        </li>
                        <li className="item">
                            <img
                                src={avatar}
                                alt="profile"
                                className="profile"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React from "react";
import logo4 from "../../assets/logo4.png";
import us from "../../assets/flag.png";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                {/* top row */}
                <div className="row-1">
                    <div className="col-1">
                        <a href="#" className="brand">
                            <img src={logo4} alt="brand" />
                        </a>
                    </div>
                    <div className="col-2">
                        <h6 className="name">About US</h6>
                        <ul className="footer-list">
                            <a href="#" className="list-item">
                                Master Plan
                            </a>
                            <a href="#" className="list-item">
                                jobs
                            </a>
                            <a href="#" className="list-item">
                                invest
                            </a>
                            <a href="#" className="list-item">
                                pressroom
                            </a>
                            <a href="#" className="list-item">
                                blog
                            </a>
                            <a href="#" className="list-item">
                                contact
                            </a>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="name">Explore EEVE</h6>
                        <ul className="footer-list">
                            <a href="#" className="list-item">
                                Unlock my Robot Power
                            </a>
                            <a href="#" className="list-item">
                                Starlight
                            </a>
                            <a href="#" className="list-item">
                                Robot Platform
                            </a>
                            <a href="#" className="list-item">
                                EEVE Roadmap
                            </a>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h6 className="name">Community & Support</h6>
                        <ul className="footer-list">
                            <a href="#" className="list-item">
                                Willow X Community
                            </a>
                            <a href="#" className="list-item">
                                Developer & Maker Access
                            </a>
                            <a href="#" className="list-item">
                                Special Cases
                            </a>
                        </ul>
                    </div>
                </div>

                {/* middle row */}
                <div className="row-2">
                    <div className="col-1">
                        <ul className="social-list">
                            <a href="#" className="item">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="item">
                                <FaInstagram />
                            </a>
                            <a href="#" className="item">
                                <FaXTwitter />
                            </a>
                            <a href="#" className="item">
                                <FaLinkedinIn />
                            </a>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className="lists">
                            <a href="#" className="list-item">
                                March22 Recap
                            </a>
                            <a href="#" className="list-item">
                                Privacy Policy
                            </a>
                            <a href="#" className="list-item">
                                General Terms
                            </a>
                            <a href="#" className="list-item">
                                Contact
                            </a>
                        </ul>
                    </div>
                    <div className="col-3">
                        <img src={us} alt="flag" /> United States (English)
                    </div>
                </div>

                {/* bottom row */}
                <div className="row-3">
                    <p className="copyright">
                        EEVE © 2024. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";

import logo from "../../assets/logo2.png";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const AuthForm = ({ children }) => {
    // destructures childrens
    const [first, second, third] = React.Children.toArray(children);

    return (
        <section className="auth-page-wrapper">
            <div className="auth-page-row">
                <div className="left-col">
                    <div className="left-card">
                        {/* Top row */}
                        {first}

                        {/* Form row */}
                        {second}

                        {/* Social row */}
                        <div className="social-row">
                            <div class="divider">OR</div>
                            <div className="social-btns">
                                <button className="btn-type-2">
                                    <FcGoogle className="icon" />
                                    Sign in with Google
                                </button>
                                <button className="btn-type-2">
                                    <FaApple className="icon" />
                                    Sign in with Apple
                                </button>
                            </div>
                        </div>

                        {/* Footer row */}
                        {third}
                    </div>
                </div>
                <div className="right-col">
                    <div className="right-card">
                        <div className="right-content">
                            <div className="logo">
                                <img src={logo} alt="brand" />
                            </div>
                            <p className="des">
                                Discover a seamless shopping experience with our
                                curated collection of products. From fashion to
                                electronics, we bring quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthForm;

import React, { useState } from "react";
import AuthForm from "../components/shared/AuthForm";
import logo2 from "../assets/logo3.png";

import { FiEye, FiEyeOff } from "react-icons/fi";

const RegisterPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <AuthForm>
            {/* top row */}
            <div className="register-top-row">
                <h5 className="subtitle">Welcome To</h5>
                <img src={logo2} alt="brand" className="logo" />
                <p className="des">Signup for purchase your desire products</p>
            </div>

            {/* Form row */}
            <form className="form-row">
                <div className="input-row">
                    <div className="input">
                        <label htmlFor="fname">first name (optional)</label>
                        <input type="text" placeholder="Type here" id="fname" />
                    </div>
                    <div className="input">
                        <label htmlFor="lname">last name (optional)</label>
                        <input type="text" placeholder="Type here" id="lname" />
                    </div>
                    <div className="input extend-input">
                        <label htmlFor="email">Email address</label>
                        <input type="text" placeholder="Type here" id="email" />
                    </div>
                    <div className="input extend-input password">
                        {isShowPassword ? (
                            <FiEye
                                className="icon"
                                onClick={() =>
                                    setIsShowPassword(!isShowPassword)
                                }
                            />
                        ) : (
                            <FiEyeOff
                                className="icon"
                                onClick={() =>
                                    setIsShowPassword(!isShowPassword)
                                }
                            />
                        )}
                        <label htmlFor="password">Password</label>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Type here"
                            id="password"
                        />
                    </div>
                </div>
                <div className="tac-row">
                    <input type="checkbox" id="tac" />
                    <label htmlFor="tac">
                        I agree to the
                        <a href="#" className="link">
                            Terms & Policy
                        </a>
                    </label>
                </div>
                <div className="btn-row">
                    <button type="submit" className="btn-type-1">
                        signup
                    </button>
                </div>
            </form>

            {/* Footer row */}
            <div className="form-footer">
                <span className="info">
                    Have an account?
                    <a href="#" className="link">
                        sign in
                    </a>
                </span>
            </div>
        </AuthForm>
    );
};

export default RegisterPage;

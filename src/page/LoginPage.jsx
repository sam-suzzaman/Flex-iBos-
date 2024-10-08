import React, { useState } from "react";
import AuthForm from "../components/shared/AuthForm";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext";

const LoginPage = () => {
    const { logInHandler, loading } = useAuthContext();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        logInHandler(data);
    };

    return (
        <AuthForm>
            {/* top row */}
            <div className="login-top-row">
                <h4 className="title">Welcome Back!</h4>
                <p className="des">
                    Enter your Credentials to access your account
                </p>
            </div>

            {/* Form row */}
            <form className="form-row" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-row">
                    <div className="input extend-input">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            id="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Valid email address is requird",
                                },
                            })}
                        />
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
                            placeholder="Enter your password"
                            id="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is requird",
                                },
                            })}
                        />
                    </div>
                </div>
                <div className="forgot-pass-row">
                    <a href="#" className="link">
                        forgot password
                    </a>
                </div>
                <div className="tac-row">
                    <input
                        type="checkbox"
                        id="tac"
                        {...register("tc", {
                            required: {
                                value: true,
                                message: "Accept all the Terms and Conditions",
                            },
                        })}
                    />
                    <label htmlFor="tac">
                        I agree to the
                        <a href="#" className="link">
                            Terms & Policy
                        </a>
                    </label>
                </div>
                <div className="btn-row">
                    <button
                        type="submit"
                        className="btn-type-1"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "sign in"}
                    </button>
                </div>
            </form>

            {/* Footer row*/}
            <div className="form-footer">
                <span className="info">
                    Don't have an account?
                    <Link to="/register" className="link">
                        sign up
                    </Link>
                </span>
            </div>
        </AuthForm>
    );
};

export default LoginPage;

import React, { useState } from "react";
import AuthForm from "../components/shared/AuthForm";
import logo2 from "../assets/logo3.png";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext";

const RegisterPage = () => {
    const { signUpHandler, loading } = useAuthContext();
    const [isShowPassword, setIsShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        signUpHandler(data);
    };

    return (
        <AuthForm>
            {/* top row */}
            <div className="register-top-row">
                <h5 className="subtitle">Welcome To</h5>
                <img src={logo2} alt="brand" className="logo" />
                <p className="des">Signup for purchase your desire products</p>
            </div>

            {/* Form row */}
            <form className="form-row" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-row">
                    <div className="input">
                        <label htmlFor="fname">first name (optional)</label>
                        <input
                            type="text"
                            placeholder="Type here"
                            id="fname"
                            {...register("firstName")}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="lname">last name (optional)</label>
                        <input
                            type="text"
                            placeholder="Type here"
                            id="lname"
                            {...register("lastName")}
                        />
                    </div>
                    <div className="input extend-input">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="text"
                            placeholder="Type here"
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
                            placeholder="Type here"
                            id="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password address is requird",
                                },
                            })}
                        />
                    </div>
                </div>
                <div className="tac-row">
                    <input
                        type="checkbox"
                        id="tac"
                        {...register("tc", {
                            required: {
                                value: true,
                                message: "Check all the Terms and Conditions",
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
                        {loading ? "Loading..." : "signup"}
                    </button>
                </div>
            </form>

            {/* Footer row */}
            <div className="form-footer">
                <span className="info">
                    Have an account?
                    <Link to="/login" className="link">
                        sign in
                    </Link>
                </span>
            </div>
        </AuthForm>
    );
};

export default RegisterPage;

import React, { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    // Check if user is logged in
    useEffect(() => {
        const loggedInUser = localStorage.getItem("furni-user");
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
        setLoading(false);
    }, []);

    // Sign up function
    const signUpHandler = async (user) => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://auth-api-beryl.vercel.app/user/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                }
            );
            const result = await response.json();
            if (result.status) {
                navigate("/login");
                toast.success("Successfully Registered");
            } else {
                console.log("error in register, ", result);
                toast.error(`${result?.message}(${result?.result})`);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(`${error?.message}`);
            console.error(error);
        }
    };

    // Log in function
    const logInHandler = async (credentials) => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://auth-api-beryl.vercel.app/user/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                }
            );
            const result = await response.json();
            if (result.status) {
                toast.success("Login Successfull");
                setUser(result?.result);
                localStorage.setItem(
                    "furni-token",
                    JSON.stringify(result?.token)
                );
                localStorage.setItem(
                    "furni-user",
                    JSON.stringify(result?.result)
                );
                navigate("/");
            } else {
                console.log("error in login, ", result);
                toast.error(`${result?.message}(${result?.result})`);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(`${error?.message}`);
            console.error(error);
        }
    };

    // Log out function
    const logOutHandler = () => {
        setUser(null);
        localStorage.removeItem("furni-user");
        localStorage.removeItem("furni-token");
        localStorage.removeItem("furni-cart");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signUpHandler,
                logInHandler,
                logOutHandler,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthContextProvider;

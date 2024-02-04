import React, { useState } from "react";
import "./LoginPage.scss";
import { loginUserEndpoint, currentUserEndpoint, singleUserEndpoint } from "../../utils/api-utils";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginForm = ({ setUser }) => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(loginUserEndpoint(), {
                identifier: event.target.identifier.value,
                password: event.target.password.value,
            });
            console.log(response.data);
            sessionStorage.setItem("token", response.data.token);

            //Below works!
            // const res = await axios.get(singleUserEndpoint(response.data.id))
            // const res = await axios.get("http://localhost:8080/api/users/account/current";
            const res = await axios.get(
                "http://localhost:8080/api/users/account/current", // this route is proteced, so need to pass headers with authorization (see backend
                {
                  headers: {
                    Authorization: `Bearer ${response.data.token}`,
                  },
                }
              );
            
            console.log(res.data.id)

            // navigate("/");
        } catch (error) {
            console.log("Login failed: " + error);
        }
    };

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-form__title">Login</h2>
                <div className="login-form__input-group">
                    <label
                        className="login-form__input-group__label"
                        htmlFor="identifier"
                    >
                        Email or Username:
                    </label>
                    <input
                        className="login-form__input-group__input"
                        type="text"
                        name="identifier"
                    />
                </div>
                <div className="login-form__input-group">
                    <label
                        className="login-form__input-group__label"
                        htmlFor="password"
                    >
                        Password:
                    </label>
                    <input
                        className="login-form__input-group__input"
                        type="password"
                        name="password"
                    />
                </div>
                <button className="login-form__button">Login</button>
                <Link className="login-form__link">
                    Don't have an account? Create one here
                </Link>
            </form>
        </div>
    );
};

export default LoginForm;

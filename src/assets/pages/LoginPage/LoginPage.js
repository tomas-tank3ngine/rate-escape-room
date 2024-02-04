import React, { useState } from "react";
import "./LoginPage.scss";
import { allUsersEndpoint } from "../../utils/api-utils";

const LoginForm = ({ setUserId }) => {
    const [loginData, setLoginData] = useState({
        usernameOrEmail: "",
        password: "",
    });

    const handleLogin = async () => {
        const { usernameOrEmail, password } = loginData;

        // Fetch all users from the API
        const usersResponse = await fetch(allUsersEndpoint());
        const users = await usersResponse.json();

        // Check if the entered usernameOrEmail already exists
        const existingUser = users.find(
            (user) =>(user.username === usernameOrEmail || user.email === usernameOrEmail)
        );

        if (existingUser && existingUser.password === password) {
            // Successful login
            localStorage.setItem('token', response.token);
            console.log("token is:: "+ response.token);
            // console.log("Login successful! User id is: "+ existingUser.id);
            // setUserId(existingUser.id)
        } else {
            // Unsuccessful login 
            console.log("Invalid credentials. Please try again.");
            
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="login-page">
            <div className="login-form">
                <h2 className="login-form__title">Login</h2>
                <div className="login-form__input-group">
                    <label
                        className="login-form__input-group__label"
                        htmlFor="email"
                    >
                        Email or Username:
                    </label>
                    <input
                        className="login-form__input-group__input"
                        type="text"
                        name="usernameOrEmail"
                        value={loginData.usernameOrEmail}
                        onChange={handleInputChange}
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
                        value={loginData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="login-form__button" onClick={handleLogin}>
                    Login
                </button>
                <p className="login-form__link">
                    Don't have an account? Create one here
                </p>
            </div>
        </div>
    );
};

export default LoginForm;

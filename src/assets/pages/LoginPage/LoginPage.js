import "./LoginPage.scss";
import { loginUserEndpoint, currentUserEndpoint, singleUserFavoriteRoomsEndpoint } from "../../utils/api-utils";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../utils/context-utils";
import { useContext } from "react";

const LoginForm = () => {
    const navigate = useNavigate();
    const { userInfoContext, userFavoritesContext } = useContext(Context);
    const [userInfo, setUserInfo] = userInfoContext;
    const [userFavorites, setUserFavorites] = userFavoritesContext;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(loginUserEndpoint(), {
                identifier: event.target.identifier.value,
                password: event.target.password.value,
            });
            console.log('response is: ' + response.data.token);
            localStorage.setItem("token", response.data.token);

            const userResponse = await axios.get(currentUserEndpoint(), {
                headers: {
                    Authorization: `Bearer ${response.data.token}`,
                },
            });

            // const userFavoritesResponse = await axios.get(singleUserFavoriteRoomsEndpoint(response.data), {
            //     headers: {
            //         Authorization: `Bearer ${response.data.token}`,
            //     },
            // })

            setUserInfo(userResponse.data);
            // setUserFavorites(userFavoritesResponse)
            

            setTimeout(() => {
                navigate("/");
            }, 500);
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
                <Link to="/accountCreate" className="login-form__link">
                    Don't have an account? Create one here
                </Link>
            </form>
        </div>
    );
};

export default LoginForm;

import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../../icons/menu_fill.svg";
import closeIcon from "../../icons/close_fill.svg";
import { Context } from "../../utils/context-utils";
import { useContext } from "react";



function Header() {
    const [userInfo, setUserInfo] = useContext(Context)
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUserInfo(null);
        alert("You have been logged out. You will be returned to the homepage");
        navigate("/"); //return to homepage
    };

    return (
        <>
            <section className="header">
                <nav className="nav-bar">
                    <button className="menu" onClick={menuHandler}>
                        <img
                            src={isMenuOpen ? closeIcon : menuIcon}
                            alt="menuIcon"
                            className="menu__icon"
                        />
                    </button>
                    <ul className="pages">
                        <li className="pages__link">
                            <Link to="/" className="pages__link--text">
                                Homepage
                            </Link>
                        </li>
                        <li className="pages__link">
                            <Link to="/rooms" className="pages__link--text">
                                Rooms
                            </Link>
                        </li>
                        {userInfo ? (
                            <li className="pages__link">
                                {userInfo && userInfo.is_owner ? (
                                    <Link
                                        to="/roomCreate"
                                        className="mobile-menu-pages__link--text"
                                    >
                                        Upload Room
                                    </Link>
                                ) : (
                                    <Link
                                        to="/rooms"
                                        className="mobile-menu-pages__link--text"
                                    >
                                        My Favorites
                                    </Link>
                                )}
                            </li>
                        ) : (
                            <li className="pages_link"></li>
                        )}
                    </ul>
                </nav>
                <Link to="/" className="logo">
                    <img
                        src={
                            require("../../images/rate-escape-logo.svg").default
                        }
                        alt="Rate Escape Rooms"
                        className="logo__image"
                    />
                </Link>
                <section className="login">
                    {userInfo ? (
                        <button onClick={handleLogout} className="login__link">
                            log out
                        </button>
                    ) : (
                        <Link to="/accountLogin" className="login__link">
                            log in
                        </Link>
                    )}

                    <div className="login__profile">
                        {userInfo ? (
                            <p className="login__link">{`${userInfo.username}`}</p>
                        ) : (
                            <p className="login__link"></p>
                        )}
                    </div>
                </section>
            </section>
            <section
                className={`${
                    isMenuOpen ? "mobile-menu-active" : "mobile-menu-inactive"
                }`}
            >
                <ul className="mobile-menu-pages">
                    <li className="mobile-menu-pages__link">
                        <Link to="/" className="mobile-menu-pages__link--text">
                            Homepage
                        </Link>
                    </li>
                    <li className="mobile-menu-pages__link">
                        <Link
                            to="/rooms"
                            className="mobile-menu-pages__link--text"
                        >
                            Rooms
                        </Link>
                    </li>
                    {userInfo ? (
                        <li className="mobile-menu-pages__link">
                            {userInfo && userInfo.is_owner ? (
                                <Link
                                    to="/roomCreate"
                                    className="mobile-menu-pages__link--text"
                                >
                                    Upload Room
                                </Link>
                            ) : (
                                <Link
                                    to="/"
                                    className="mobile-menu-pages__link--text"
                                >
                                    My Favorites
                                </Link>
                            )}
                        </li>
                    ) : (
                        <li className="mobile-menu-pages__link"></li>
                    )}
                </ul>
            </section>
        </>
    );
}

export default Header;

import Headshot from "../Headshot/Headshot";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import menuIcon from "../../icons/menu_fill.svg";
import closeIcon from "../../icons/close_fill.svg";
import logo from '../../images/rate-escape-logo.svg'

function Header({ setUser, user }) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [ownerLoggedIn, setOwnerLoggedIn] = useState(false);

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        alert("You have been logged out. You will be returned to the homepage");
        navigate('/'); //return to homepage
    };

    // console.log(user)

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
                        {user ? (
                            <li className="pages__link">
                            {user && user.is_owner ? (
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
                        src={require("../../images/rate-escape-logo.svg").default}
                        alt="Rate Escape Rooms"
                        className="logo__image"
                    />
                </Link>
                <section className="login">
                    {user ? (
                        <button onClick={handleLogout} className="login__link">
                            log out
                        </button>
                    ) : (
                        <Link to="/accountLogin" className="login__link">
                            log in
                        </Link>
                    )}

                    <div className="login__profile">
                        {user ? (
                            <p className="login__link">{`${user.username}`}</p>
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
                    {user ? (
                            <li className="mobile-menu-pages__link">
                            {user && user.is_owner ? (
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

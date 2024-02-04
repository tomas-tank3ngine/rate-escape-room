import Headshot from "../Headshot/Headshot";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../../icons/menu_fill.svg";
import closeIcon from "../../icons/close_fill.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    console.log("menu button clicked");
    setIsMenuOpen(!isMenuOpen);
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
            <li className="pages__link">
              <Link to="/" className="pages__link--text">
                My Favourites
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/" className="logo">
          <img src="" alt="Rate Escape Rooms" className="logo__image" />
        </Link>
        <section className="login">
          <Link to="/accountLogin" className="login__link">
            log-in
          </Link>
          <div className="login__profile">
            <Headshot />
          </div>
        </section>
      </section>
      <section className={`${isMenuOpen ? "mobile-menu-active" : "mobile-menu-inactive"}`}>
        <ul className="mobile-menu-pages">
          <li className="mobile-menu-pages__link">
            <Link to="/" className="mobile-menu-pages__link--text">
              Homepage
            </Link>
          </li>
          <li className="mobile-menu-pages__link">
            <Link to="/rooms" className="mobile-menu-pages__link--text">
              Rooms
            </Link>
          </li>
          <li className="mobile-menu-pages__link">
            <Link to="/" className="mobile-menu-pages__link--text">
              My Favourites
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Header;

import Headshot from "../Headshot/Headshot";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../../icons/menu_fill.svg";
import closeIcon from "../../icons/close_fill.svg";

function Header({ setUser, user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    console.log("menu button clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // IMPORTANT: when logging out remove the token from sessionStorage
    // or else the user will still be authenticated because the token is in sessionStorage
    // and the token is being sent to the backend on each page request via useEffect
    sessionStorage.removeItem("token");
    setUser(null);
    alert("You have been logged out")
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
          {user? 
            <button onClick={handleLogout} className="login__link">log out</button>
            :
            <Link to="/accountLogin" className="login__link">log in</Link>
          }
          
          <div className="login__profile">
          {user? 
            <p className="login__link">{`${user.username}`}</p>
            :
            <p className="login__link"></p>
          }
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

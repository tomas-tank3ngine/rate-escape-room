import Headshot from '../Headshot/Headshot';
import './Header.scss'
import { Link } from 'react-router-dom';
import menuIcon from '../../icons/menu_fill.svg'

function Header(){

    const menuHandler = (()=>{
        console.log("menu button clicked");
    })

    return(
        <section className="header">
            <nav className="nav-bar">
                <button className="menu" onClick={menuHandler}>
                    <img src={menuIcon} alt="menuIcon" className="menu__icon" />
                </button>
                <ul className="pages">
                    <li className="pages__link">
                        <Link to="/" className="pages__link--text">Homepage</Link>
                    </li>
                    <li className="pages__link">
                        <Link to="/rooms" className="pages__link--text">Rooms</Link>
                    </li>
                    <li className="pages__link">
                        <Link to="/" className="pages__link--text">My Favourites</Link>
                    </li>
                </ul>

            </nav>
            <Link to="/"className="logo">
                <img src="" alt="Rate Escape Rooms" className="logo__image" />
            </Link>
            <section className="login">
                <Link to="/login" className='login__link'>sign-in</Link>
                <Headshot />
            </section>
        </section>
    )
}

export default Header;
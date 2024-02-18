import "./Hero.scss";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <section className="hero__container">
                <Link to="/rooms" className="cta">
                    <p className="cta__p">Room Rankings</p>
                </Link>
            </section>
            <section className="hero__container">
                <Link to="/nearbyRooms" className="cta">
                    <p className="cta__p">Rooms Near Me</p>
                </Link>
            </section>
        </section>
    );
}

export default Hero;

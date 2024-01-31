import './Hero.scss';
import HeroImage from '../../images/b&wherokeys2.png'
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <section className="hero">
            <section className="hero__container">
                <Link to="/rooms" className="cta">
                    <p className="cta__p">Room Rankings</p>
                </Link>
            </section>
            <section className="hero__container">
            <Link to="/rooms-nearby" className="cta">
                <p className="cta__p">Rooms Near Me</p>
            </Link>
            </section>
        </section>
    )
}

export default Hero;
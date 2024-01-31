import './Banner.scss'
import { Link } from 'react-router-dom';

function Banner(){
    return(
        <section className="banner">
            <Link className='banner__link'>
                <p className="banner__p">Discover a Random Room</p>
            </Link>
        </section>
    )
}

export default Banner;
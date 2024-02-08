import './Title-Section.scss'
import Icons from '../IconHolder/IconHolder';
import { Link } from 'react-router-dom';


function TitleSection({ title, linkRoute }){
    
    return(
        <section className="title-section">
            <Link to={`${linkRoute}`} className={`title-section__back-link ${linkRoute? "" : "hidden"}`}>
                <img src={Icons().BackArrowIcon} alt="back arrow" className="title-section__back-link--icon" />
            </Link>
            <h1 className="title-section__header">{`${title}`}</h1>
        </section>
    );
}

export default TitleSection
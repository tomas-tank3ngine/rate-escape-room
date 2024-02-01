import { Link } from 'react-router-dom';
import './RoomOverview.scss'
import StarRating from '../StarRating/StarRating';

function RoomOverview(){
    // Dont forget to link the room id properly in the return()
    return(
        <section className="room-overview">
            <Link to="//rooms/:roomId"className="details-link">
                <h2 className="details-link__text">Room Details</h2>
                <img src="" alt="thumbnail" className="details-link__thumbnail" />
            </Link>
            <section className="selected-info">
                <section className="selected-info__top-section">
                    
                    <StarRating />
                </section>
                <p className="selected-info__description-text">DESCRIPTION</p>
                <section className="selected-info__top-section">
                    
                </section>
            </section>
        </section>
    );
}

export default RoomOverview;
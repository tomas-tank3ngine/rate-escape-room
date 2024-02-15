import { Link } from "react-router-dom";
import "./RoomOverview.scss";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";
import Icons from "../IconHolder/IconHolder";
import thumbnail from '../../images/placeholder2.png'
import { useEffect } from "react";

function RoomOverview({ room }) {

    useEffect(()=>{
        if (!room){
            <p className="loading">Loading...</p>
        }

    },[room])

    return (
        <section className="room-overview">
            <Link to={`/rooms/${room.id}`} className="details-link">
                <button className="details-link__text">                    
                    Room Details
                </button>
                <img
                    src={thumbnail}
                    alt={thumbnail}
                    className="details-link__thumbnail"
                />
            </Link>
            <section className="selected-info">
                <section className="selected-info__top-section">
                    <FavRoomButton room={room}/>
                    <h2 className="selected-info__name">{`${room.name}`}</h2>
                    <StarRating roomId={room.id} targetRating="overall_rating" />
                </section>
                <p className="selected-info__description-text">{`${room.description}`}</p>
                <section className="selected-info__bottom-section">
                    <Link to={room.website_url} className="selected-info__website-link">
                        {`${room.website_url}`}
                    </Link>
                    <Link className="selected-info__share-link">
                    <img
                        src={Icons().ShareUrlIcon}
                        alt="share link"
                        className="selected-info__share-link--icon"
                    />
                        SHARE URL
                    </Link>
                </section>
            </section>
        </section>
    );
}

export default RoomOverview;

import { Link, useParams } from "react-router-dom";
import "./RoomOverview.scss";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";
import { useEffect } from "react";
import Icons from "../IconHolder/IconHolder";

function RoomOverview({ room }) {

    if (!room){
        <p className="loading">Loading...</p>
    }

    return (
        <section className="room-overview">
            <Link to={`/rooms/${room.id}`} className="details-link">
                <button className="details-link__text">
                    
                    Room Details
                </button>
                <img
                    src={`${room.thumbnail}`}
                    alt={`${room.thumbnail}`}
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
                    <Link className="selected-info__share-link">SHARE URL</Link>
                </section>
            </section>
        </section>
    );
}

export default RoomOverview;

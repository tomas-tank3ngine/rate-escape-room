import { Link, useParams } from "react-router-dom";
import "./RoomOverview.scss";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";
import { useEffect } from "react";
import Icons from "../IconHolder/IconHolder";

function RoomOverview({ room }) {
    // Dont forget to link the room id properly in the return()

    return (
        <section className="room-overview">
            <Link to={`/rooms/${room.id}`} className="details-link">
                <button className="details-link__text">
                    <img
                        className="details-link__icon"
                        src={Icons().EditLineIcon}
                        alt="Upload button icon"
                    />
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
                    <FavRoomButton />
                    <h2 className="selected-info__name">{`${room.name}`}</h2>
                    <StarRating rating={room.overall_rating} />
                </section>
                <p className="selected-info__description-text">{`${room.description}`}</p>
                <section className="selected-info__bottom-section">
                    <Link className="selected-info__website-link">
                        {`${room.website_url}`}
                    </Link>
                    <Link className="selected-info__share-link">SHARE URL</Link>
                </section>
            </section>
        </section>
    );
}

export default RoomOverview;

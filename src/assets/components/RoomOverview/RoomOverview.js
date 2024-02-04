import { Link } from "react-router-dom";
import "./RoomOverview.scss";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";
import { useEffect } from "react";

function RoomOverview({ room }) {
    // Dont forget to link the room id properly in the return()

    <>
        <section className="room-overview">
            <Link to="/rooms/:1" className="details-link">
                <p className="details-link__text">Room Details</p>
                <img
                    src=""
                    alt="thumbnail"
                    className="details-link__thumbnail"
                />
            </Link>
            <section className="selected-info">
                <section className="selected-info__top-section">
                    <FavRoomButton />
                    <h2 className="selected-info__name">ROOM NAME</h2>
                    <StarRating rating={room.overall_rating}/>
                </section>
                <p className="selected-info__description-text">DESCRIPTION</p>
                <section className="selected-info__bottom-section">
                    <Link className="selected-info__website-link">
                        WEBSITE URL
                    </Link>
                    <Link className="selected-info__share-link">SHARE URL</Link>
                </section>
            </section>
        </section>
    </>;
}

export default RoomOverview;

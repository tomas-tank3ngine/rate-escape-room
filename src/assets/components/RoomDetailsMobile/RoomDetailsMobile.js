import "./RoomDetailsMobile.scss";
// import FavRoomButton from "../FavRoomButton/FavRoomButton";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function RoomDetailsMobile({room}) {
    const location = useLocation();

    const [currentURL, setCurrentURL] = useState("");

    useEffect(() => {
        setCurrentURL(window.location.href);
      }, [location.pathname]);

      const handleShare = async () => {
        try {
          await navigator.clipboard.writeText(currentURL);
          alert(currentURL+" URL copied to clipboard!");
        } catch (error) {
          console.error("Error copying to clipboard: ", error);
        }
      };

    return (
        <section className="room-details-mobile">
            <section className="section-one">
                <h2 className="section-one__room-name">{`${room.name}`}</h2>
                <button className="section-one__fav-button">
                    <p className="section-one__fav-button--p">
                        Add to Favourites
                    </p>
                    <img
                        src={Icons().HeartEmptyIcon}
                        alt="Favourite Icon"
                        className="section-one__fav-button--icon"
                    />
                </button>
            </section>
            <section className="section-two">
                <section className="section-two__left-wrapper">
                    <img
                        src={`${room.thumbnail}`}
                        alt={`${room.thumbnail}`}
                        className="room-thumbnail"
                    />
                    <p className="room-theme">{`${room.theme}`}</p>
                </section>
                <section className="section-two__right-wrapper">
                    <p className="section-two__right-wrapper--room-description">{`${room.description}`}</p>
                    <p className="section-two__right-wrapper--address">{`${room.description}`}</p>
                </section>
            </section>
            <section className="section-three">
                <section className="section-three__wrapper">
                    <p className="info-item">{`Price Range: `}</p>
                    <p className="info-item">{`Location: remote`}</p>
                    <p className="info-item">{`Group Size: `}</p>
                </section>
                <hr className="section-three__vertical-break" />
                <section className="section-three__wrapper section-three__wrapper--right">
                    <p className="info-item">{`Duration: `}</p>
                    <p className="info-item">{`Difficulty: `}</p>
                    <p className="info-item">{`Completion: 78%`}</p>
                </section>
            </section>
            <section className="section-four">
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Overall:
                    </p>
                    <StarRating />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Storyline:
                    </p>
                    <StarRating />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Technology:
                    </p>
                    <StarRating />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Atmosphere:
                    </p>
                    <StarRating />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Puzzles:
                    </p>
                    <StarRating />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Staff:
                    </p>
                    <StarRating />
                </section>
            </section>

            <section className="section-five">
                <Link className="section-five__website-link">
                    www.website.com
                </Link>
                <button className="section-five__share-url-button">
                    <img
                        src={Icons().ShareUrlIcon}
                        alt="share link"
                        className="section-five__share-url-button--icon"
                    />
                    <p className="section-five__share-url-button--p">
                        Share Link
                    </p>
                </button>
            </section>
            <button className="rate-room-button">
                <img
                    className="rate-room-button__icon"
                    src={Icons().EditLineIcon}
                    alt="Upload button icon"
                />
                <p className="rate-room-button__p">Rate room</p>
            </button>
        </section>
    );
}
export default RoomDetailsMobile;

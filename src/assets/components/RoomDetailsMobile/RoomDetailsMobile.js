import "./RoomDetailsMobile.scss";
// import FavRoomButton from "../FavRoomButton/FavRoomButton";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalReviewQA from "../ModalReviewQA/ModalReviewQA";

function RoomDetailsMobile({ room, user }) {
    const location = useLocation();

    const [currentURL, setCurrentURL] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleContinue = () => {
        setIsModalOpen(false);
    };

    const handleOwnerWarning = () => {
        alert("Owners are not allowed to review rooms.");
    };

    useEffect(() => {
        setCurrentURL(window.location.href);
    }, [location.pathname]);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(currentURL);
            alert(currentURL + " URL copied to clipboard!");
            
        } catch (error) {
            console.error("Error copying to clipboard: ", error);
        }
    };

    return (
        <section className="room-details-mobile">
            {user? <ModalReviewQA
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                room_id={room.id}
                user={user}
            />
        :        
        <></>}
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
                    <p className="info-item">{`Price Range: ${room.cost}`}</p>
                    <p className="info-item">{`Location: in-person`}</p>
                    <p className="info-item">{`Group Size: ${room.group_size}`}</p>
                </section>
                <hr className="section-three__vertical-break" />
                <section className="section-three__wrapper section-three__wrapper--right">
                    <p className="info-item">{`Duration: ${room.duration}`}</p>
                    <p className="info-item">{`Difficulty: ${room.difficulty}`}</p>
                    <p className="info-item">{`Completion: ${room.completion_rate}`}</p>
                </section>
            </section>
            <section className="section-four">
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Overall:
                    </p>
                    <StarRating rating={room.overall_rating} />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Storyline:
                    </p>
                    <StarRating rating={room.storyline_rating} />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Technology:
                    </p>
                    <StarRating rating={room.tech_rating} />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Atmosphere:
                    </p>
                    <StarRating rating={room.atmosphere_rating} />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Puzzles:
                    </p>
                    <StarRating rating={room.puzzle_fairness_rating} />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Staff:
                    </p>
                    <StarRating rating={room.staff_rating} />
                </section>
            </section>

            <section className="section-five">
                <Link
                    to={`${room.website_url}`}
                    className="section-five__website-link"
                >{`${room.website_url}`}</Link>
                <button
                    onClick={handleShare}
                    className="section-five__share-url-button"
                >
                    <img
                        src={Icons().ShareUrlIcon}
                        alt="share link"
                        className="section-five__share-url-button--icon"
                    />
                    <p className="section-five__share-url-button--p">
                        Share Room
                    </p>
                </button>
            </section>
            {user ? (
                    user.is_owner ? (
                        <button
                            onClick={handleOwnerWarning}
                            className="rate-room-button"
                        >
                            Review Unavailable
                        </button>
                    ) : (
                        <button
                            onClick={handleOpenModal}
                            className="rate-room-button"
                        >
                            <img
                                className="rate-room-button__icon"
                                src={Icons().EditLineIcon}
                                alt="Upload button icon"
                            />
                            Review Room
                        </button>
                    )
                ) : (
                    <Link
                        to="/accountLogin"
                        className="rate-room-button"
                    >
                        Login to Review
                    </Link>
                )}
            
        </section>
    );
}
export default RoomDetailsMobile;

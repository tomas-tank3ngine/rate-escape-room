import "./RoomDetailsTabletPlus.scss";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalReviewQA from "../ModalReviewQA/ModalReviewQA";

function RoomDetailsTabletPlus({ room, user }) {
    const location = useLocation();

    const [currentURL, setCurrentURL] = useState("");

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        console.log("open clicked: " + isModalOpen);
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

    console.log(room);
    return (
        <section className="room-details-tablet-plus">
            {user ? (
                <ModalReviewQA
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    roomId={room.id}
                    user={user}
                />
            ) : (
                <></>
            )}

            <section className="left-wrapper">
                <img
                    src={`${room.thumbnail}`}
                    alt={`${room.thumbnail}`}
                    className="left-wrapper__thumbnail"
                />
                <p className="left-wrapper__theme">{`${room.theme}`}</p>
                <p className="left-wrapper__address">{`${room.address}`}</p>
                {user ? (
                    user.is_owner ? (
                        <button
                            onClick={handleOwnerWarning}
                            className="left-wrapper__review-room-button"
                        >
                            Review Unavailable
                        </button>
                    ) : (
                        <button
                            onClick={handleOpenModal}
                            className="left-wrapper__review-room-button"
                        >
                            <img
                                className="left-wrapper__review-room-button--icon"
                                src={Icons().EditLineIcon}
                                alt="Upload button icon"
                            />
                            Review Room
                        </button>
                    )
                ) : (
                    <Link
                        to="/accountLogin"
                        className="left-wrapper__review-room-button"
                    >
                        Login to Review
                    </Link>
                )}
            </section>
            <section className="right-wrapper">
                <section className="right-wrapper__header-section">
                    <h2 className="room-name">{`${room.name}`}</h2>
                    <button className="fav-button">
                        <p className="fav-button__p">Add to Favourites</p>
                        <img
                            src={Icons().HeartEmptyIcon}
                            alt="Favourite Icon"
                            className="fav-button__icon"
                        />
                    </button>
                </section>
                <p className="right-wrapper__description">{`${room.description}`}</p>
                <section className="right-wrapper__room-details">
                    <section className="room-info">
                        <p className="room-info__info-item">{`Price Range: ${room.cost}`}</p>
                        <p className="room-info__info-item">{`Location: in-person`}</p>
                        <p className="room-info__info-item">{`Group Size: ${room.group_size}`}</p>
                        <p className="room-info__info-item">{`Duration: ${room.duration} mins`}</p>
                        <p className="room-info__info-item">{`Difficulty: ${room.difficulty}`}</p>
                        <p className="room-info__info-item">{`Success Rate: ${room.completion_rate}`}</p>
                    </section>
                    <section className="room-ratings">
                        <section className="room-ratings__wrapper">
                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Overall:
                                </p>
                                <StarRating rating={room.overall_rating} />
                            </section>

                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Atmosphere:
                                </p>
                                <StarRating rating={room.atmosphere_rating} />
                            </section>
                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Puzzles:
                                </p>
                                <StarRating
                                    rating={room.puzzle_fairness_rating}
                                />
                            </section>
                        </section>
                        <section className="room-ratings__wrapper">
                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Technology:
                                </p>
                                <StarRating rating={room.tech_rating} />
                            </section>

                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Storyline:
                                </p>
                                <StarRating rating={room.storyline_rating} />
                            </section>
                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Staff:
                                </p>
                                <StarRating rating={room.staff_rating} />
                            </section>
                        </section>
                    </section>
                    <section className="room-links">
                        {room.instagram_url && (
                            <Link
                                to={room.instagram_url}
                                className="room-links__social-media"
                            >
                                Instagram
                            </Link>
                        )}
                        {room.facebook_url && (
                            <Link
                                to={room.facebook_url}
                                className="room-links__social-media"
                            >
                                Facebook
                            </Link>
                        )}
                        {room.twitter_url && (
                            <Link
                                to={room.twitter_url}
                                className="room-links__social-media"
                            >
                                Twitter (X)
                            </Link>
                        )}
                        {room.website_url && (
                            <Link
                                to={room.website_url}
                                className="room-links__social-media"
                            >
                                Website
                            </Link>
                        )}

                        <button
                            onClick={handleShare}
                            className="room-links__share-url"
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
                </section>
            </section>
        </section>
    );
}
export default RoomDetailsTabletPlus;

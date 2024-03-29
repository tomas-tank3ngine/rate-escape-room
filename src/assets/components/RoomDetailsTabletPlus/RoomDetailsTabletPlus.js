import "./RoomDetailsTabletPlus.scss";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalReviewQA from "../ModalReviewQA/ModalReviewQA";
import thumbnail from "../../images/placeholder2.png";
import { Context } from "../../utils/context-utils";
import { useContext } from "react";
import FavRoomButton from "../FavRoomButton/FavRoomButton";


function RoomDetailsTabletPlus({ room }) {
    const { userInfoContext } = useContext(Context);
    const [userInfo, setUserInfo] = userInfoContext;
    const location = useLocation();

    const { roomId } = useParams();

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
        setTimeout(setIsModalOpen(true), 2000);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOwnerWarning = () => {
        alert("Owners are not allowed to review rooms.");
    };

    if (!roomId) {
        <p className="loading">Loading...</p>;
    }

    return (
        <>
            <section className="room-details-tablet-plus">
                {userInfo ? (
                    <ModalReviewQA
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        roomId={room.id}
                        user={userInfo}
                    />
                ) : (
                    <></>
                )}

                <section className="left-wrapper">
                    <img
                        src={thumbnail}
                        alt={`${room.thumbnail}`}
                        className="left-wrapper__thumbnail"
                    />
                    <p className="left-wrapper__theme">{`${room.theme}`}</p>
                    <p className="left-wrapper__address">{`${room.address}`}</p>
                    {userInfo ? (
                        userInfo.is_owner ? (
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
                        <p className="fav-button__p">Add to Favourites </p>
                        <FavRoomButton room={room} />
                        
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
                                    <StarRating
                                        roomId={roomId}
                                        targetRating="overall_rating"
                                    />
                                </section>

                                <section className="room-ratings__rating-container">
                                    <p className="room-ratings__rating-container--header">
                                        Atmosphere:
                                    </p>
                                    <StarRating
                                        roomId={roomId}
                                        targetRating="atmosphere_rating"
                                    />
                                </section>
                                <section className="room-ratings__rating-container">
                                    <p className="room-ratings__rating-container--header">
                                        Puzzles:
                                    </p>
                                    <StarRating
                                        roomId={roomId}
                                        targetRating="puzzle_fairness_rating"
                                    />
                                </section>
                            </section>
                            <section className="room-ratings__wrapper">
                                <section className="room-ratings__rating-container">
                                    <p className="room-ratings__rating-container--header">
                                        Technology:
                                    </p>
                                    <StarRating
                                        roomId={roomId}
                                        targetRating="tech_rating"
                                    />
                                </section>

                                <section className="room-ratings__rating-container">
                                    <p className="room-ratings__rating-container--header">
                                        Storyline:
                                    </p>
                                    <StarRating
                                        roomId={roomId}
                                        targetRating="storyline_rating"
                                    />
                                </section>
                                <section className="room-ratings__rating-container">
                                    <p className="room-ratings__rating-container--header">
                                        Staff:
                                    </p>
                                    <StarRating
                                        roomId={roomId}
                                        targetRating="staff_rating"
                                    />
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="room-links">
                    {room.website_url && (
                        <Link
                            to={room.website_url}
                            className="room-links__website"
                        >
                            {`${room.website_url}`}
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
        </>
    );
}
export default RoomDetailsTabletPlus;

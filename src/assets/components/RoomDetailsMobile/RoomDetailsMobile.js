import "./RoomDetailsMobile.scss";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalReviewQA from "../ModalReviewQA/ModalReviewQA";
import thumbnail from "../../images/placeholder2.png";
import { Context } from "../../utils/context-utils";
import { useContext } from "react";
import FavRoomButton from "../FavRoomButton/FavRoomButton";

function RoomDetailsMobile({ room }) {
    const { userInfoContext } = useContext(Context);
    const [userInfo, setUserInfo] = userInfoContext;
    const navigate = useNavigate();
    const location = useLocation();

    const { roomId } = useParams();

    const [currentURL, setCurrentURL] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
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

    useEffect(() => {
        navigate(location.pathname);
    }, [isModalOpen]);

    if (!roomId) {
        <p className="loading">Loading...</p>;
    }

    return (
        <section className="room-details-mobile">
            {userInfo ? (
                <ModalReviewQA
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    room_id={room.id}
                    user={userInfo}
                />
            ) : (
                <></>
            )}
            <section className="section-one">
                <h2 className="section-one__room-name">{`${room.name}`}</h2>
                <p className="fav-button__p">Add to Favourites </p>
                <FavRoomButton room={room} />
            </section>
            <section className="section-two">
                <section className="section-two__left-wrapper">
                    <img
                        src={thumbnail}
                        alt={`${room.thumbnail}`}
                        className="room-thumbnail"
                    />
                    <p className="room-theme">{`${room.theme}`}</p>
                </section>
                <section className="section-two__right-wrapper">
                    <p className="section-two__right-wrapper--room-description">{`${room.description}`}</p>
                    <p className="section-two__right-wrapper--address">{`${room.address}`}</p>
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
                    <p className="info-item">{`Duration: ${room.duration} mins`}</p>
                    <p className="info-item">{`Difficulty: ${room.difficulty}`}</p>
                    <p className="info-item">{`Completion: ${
                        room.completion_rate * 100
                    }%`}</p>
                </section>
            </section>
            <section className="section-four">
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Overall:
                    </p>
                    <StarRating roomId={roomId} targetRating="overall_rating" />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Storyline:
                    </p>
                    <StarRating
                        roomId={roomId}
                        targetRating="storyline_rating"
                    />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Technology:
                    </p>
                    <StarRating roomId={roomId} targetRating="tech_rating" />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Atmosphere:
                    </p>
                    <StarRating
                        roomId={roomId}
                        targetRating="atmosphere_rating"
                    />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Puzzles:
                    </p>
                    <StarRating
                        roomId={roomId}
                        targetRating="puzzle_fairness_rating"
                    />
                </section>
                <section className="section-four__rating-container">
                    <p className="section-four__rating-container--header">
                        Staff:
                    </p>
                    <StarRating roomId={roomId} targetRating="staff_rating" />
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
            {userInfo ? (
                userInfo.is_owner ? (
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
                <Link to="/accountLogin" className="rate-room-button">
                    Login to Review
                </Link>
            )}
        </section>
    );
}
export default RoomDetailsMobile;

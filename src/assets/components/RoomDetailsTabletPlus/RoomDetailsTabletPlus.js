import "./RoomDetailsTabletPlus.scss";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import { Link } from "react-router-dom";

function RoomDetailsTabletPlus() {
    return (
        <section className="room-details-tablet-plus">
            <section className="left-wrapper">
                <img
                    src=""
                    alt="thumbnail"
                    className="left-wrapper__thumbnail"
                />
                <p className="left-wrapper__theme">THEME</p>
                <p className="left-wrapper__address">Address</p>
                <button className="left-wrapper__review-room-button">
                    Review Room
                </button>
            </section>
            <section className="right-wrapper">
                <section className="right-wrapper__header-section">
                    <h2 className="room-name">ROOM NAME</h2>
                    <button className="fav-button">
                        <p className="fav-button__p">Add to Favourites</p>
                        <img
                            src={Icons().HeartEmptyIcon}
                            alt="Favourite Icon"
                            className="fav-button__icon"
                        />
                    </button>
                </section>
                <p className="right-wrapper__description">DESCRIPTION</p>
                <section className="right-wrapper__room-details">
                    <section className="room-info">
                        <p className="room-info__info-item">{`Price Range: ${"placeholder"}`}</p>
                        <p className="room-info__info-item">{`Location: ${"placeholder"}`}</p>
                        <p className="room-info__info-item">{`Group Size: ${"placeholder"}`}</p>
                        <p className="room-info__info-item">{`Duration: ${"placeholder"}`}</p>
                        <p className="room-info__info-item">{`Difficulty: ${"placeholder"}`}</p>
                        <p className="room-info__info-item">{`Success Rate: ${"placeholder"}`}</p>
                    </section>
                    <section className="room-ratings">
                    <section className="room-ratings__wrapper">
                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Overall:
                                </p>
                                <StarRating />
                            </section>

                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Atmosphere:
                                </p>
                                <StarRating />
                            </section>
                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Puzzles:
                                </p>
                                <StarRating />
                            </section>
                        </section>
                        <section className="room-ratings__wrapper">
                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Technology:
                                </p>
                                <StarRating />
                            </section>

                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Storyline:
                                </p>
                                <StarRating />
                            </section>
                            <section className="room-ratings__rating-container">
                                <p className="room-ratings__rating-container--header">
                                    Staff:
                                </p>
                                <StarRating />
                            </section>
                        </section>
                    </section>
                    <section className="room-links">
                        <Link className="room-links__social-media">link</Link>
                        <Link className="room-links__social-media">link</Link>
                        <button className="room-links__share-url">link</button>
                        <Link className="room-links__website">link</Link>
                    </section>
                </section>
            </section>
        </section>
    );
    // <section className="room-details-tablet-plus">
    //   <section className="section-one">
    //     <h2 className="section-one__room-name">ROOM NAME</h2>
    //     <button className="section-one__fav-button">
    //       <p className="section-one__fav-button--p">Add to Favourites</p>
    //       <img
    //         src={Icons().HeartEmptyIcon}
    //         alt="Favourite Icon"
    //         className="section-one__fav-button--icon"
    //       />
    //     </button>
    //   </section>
    //   <section className="section-two">
    //     <section className="section-two__left-wrapper">
    //       <img src="" alt="room thumbnail" className="room-thumbnail" />
    //       <p className="room-theme">THEME</p>
    //     </section>
    //     <section className="section-two__right-wrapper">
    //       <p className="section-two__right-wrapper--room-description">
    //         DESCRIPTION DESCRIPTION
    //       </p>
    //       <p className="section-two__right-wrapper--address">Address</p>
    //     </section>
    //   </section>
    //   <section className="section-three">
    //     <section className="section-three__wrapper">
    //       <p className="info-item">{`Price Range: `}</p>
    //       <p className="info-item">{`Location: remote`}</p>
    //       <p className="info-item">{`Group Size: `}</p>
    //     </section>
    //     <hr className="section-three__vertical-break" />
    //     <section className="section-three__wrapper section-three__wrapper--right">
    //       <p className="info-item">{`Duration: `}</p>
    //       <p className="info-item">{`Difficulty: `}</p>
    //       <p className="info-item">{`Completion Rate: 78%`}</p>
    //     </section>
    //   </section>
    //   <section className="section-four">
    //     <section className="section-four__rating-container">
    //       <p className="section-four__rating-container--header">Overall: </p>
    //       <StarRating />
    //     </section>
    //     <section className="section-four__rating-container">
    //       <p className="section-four__rating-container--header">Storyline: </p>
    //       <StarRating />
    //     </section>
    //     <section className="section-four__rating-container">
    //       <p className="section-four__rating-container--header">Technology: </p>
    //       <StarRating />
    //     </section>
    //     <section className="section-four__rating-container">
    //       <p className="section-four__rating-container--header">Atmosphere: </p>
    //       <StarRating />
    //     </section>
    //     <section className="section-four__rating-container">
    //       <p className="section-four__rating-container--header">Puzzle Fairness: </p>
    //       <StarRating />
    //     </section>
    //     <section className="section-four__rating-container">
    //       <p className="section-four__rating-container--header">Staff: </p>
    //       <StarRating />
    //     </section>
    //   </section>

    //   <section className="section-five">
    //     <Link className="section-five__website-link">www.website.com</Link>
    //     <button className="section-five__share-url-button">
    //       <img
    //         src={Icons().ShareUrlIcon}
    //         alt="share link"
    //         className="section-five__share-url-button--icon"
    //       />
    //       <p className="section-five__share-url-button--p">Share Link</p>
    //     </button>
    //   </section>
    //   <button className="rate-room-button">
    //     <img
    //       className="rate-room-button__icon"
    //       src={Icons().EditLineIcon}
    //       alt="Upload button icon"
    //     />
    //     <p className="rate-room-button__p">Rate room</p>
    //   </button>
    // </section>
}
export default RoomDetailsTabletPlus;

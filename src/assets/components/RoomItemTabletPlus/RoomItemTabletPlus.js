import "./RoomItemTabletPlus.scss";
import Icons from "../IconHolder/IconHolder";

function RoomItemTabletPlus() {
  return (
    <li className="table-item-tablet-plus">
      <button className="fav-button">
        <img
          src={Icons().HeartEmptyIcon}
          alt="favourites icon"
          className="fav-button__fav-icon"
        />
      </button>
      <div className="table-item-tablet-plus__label">
        <p className="table-item-tablet-plus__text">Room Name</p>
      </div>
      <div className="table-item-tablet-plus__label">
        <p className="table-item-tablet-plus__text">Ancient Egypt</p>
      </div>
      <div className="table-item-tablet-plus__label">
        <div className="table-item-tablet-plus__rating-container">
          <img
            src={Icons().StarEmptyIcon}
            alt="star icon"
            className="star-rating"
          />
          <img
            src={Icons().StarEmptyIcon}
            alt="star icon"
            className="star-rating"
          />
          <img
            src={Icons().StarEmptyIcon}
            alt="star icon"
            className="star-rating"
          />
          <img
            src={Icons().StarEmptyIcon}
            alt="star icon"
            className="star-rating"
          />
          <img
            src={Icons().StarEmptyIcon}
            alt="star icon"
            className="star-rating"
          />
        </div>
      </div>
      <div className="table-item-tablet-plus__label">
        <p className="table-item-tablet-plus__text">78%</p>
      </div>
    </li>
  );
}

export default RoomItemTabletPlus;

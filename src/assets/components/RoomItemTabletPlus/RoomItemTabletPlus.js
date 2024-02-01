import "./RoomItemTabletPlus.scss";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";

function RoomItemTabletPlus() {
  return (
    <li className="table-item-tablet-plus">
      <div className="table-item-tablet-plus__label fav-label">
        <FavRoomButton />
      </div>
      <div className="table-item-tablet-plus__label">
        <p className="table-item-tablet-plus__text">Room Name</p>
      </div>
      <div className="table-item-tablet-plus__label">
        <p className="table-item-tablet-plus__text">Ancient Egypt</p>
      </div>
      <div className="table-item-tablet-plus__label rating-label">
        <StarRating />
      </div>
      <div className="table-item-tablet-plus__label completion-label">
        <p className="table-item-tablet-plus__text">78%</p>
      </div>
    </li>
  );
}

export default RoomItemTabletPlus;

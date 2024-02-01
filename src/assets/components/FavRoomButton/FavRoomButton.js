import "./FavRoomButton.scss";
import Icons from "../IconHolder/IconHolder";

function FavRoomButton() {
  return (
    <button className="fav-room-button">
      <img
        src={Icons().HeartEmptyIcon}
        alt="Favourite Icon"
        className="fav-room-button__icon"
      />
    </button>
  );
}

export default FavRoomButton;

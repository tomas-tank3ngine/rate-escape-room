import "./FavRoomButton.scss";
import Icons from "../IconHolder/IconHolder";

function FavRoomButton({ room }) {
    const handleFav = () => {};

    return (
        <button onClick={handleFav} className="fav-room-button">
            <img
                src={Icons().HeartEmptyIcon}
                alt="Favourite Icon"
                className="fav-room-button__icon"
            />
        </button>
    );
}

export default FavRoomButton;

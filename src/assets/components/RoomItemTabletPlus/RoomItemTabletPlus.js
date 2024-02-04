import "./RoomItemTabletPlus.scss";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";

function RoomItemTabletPlus({room, setSelectedRoom}) {
    const handleSelected = ()=>{
        setSelectedRoom(room);
      }
  return (
    <li onClick={handleSelected} className="table-item-tablet-plus">
      <div className="table-item-tablet-plus__label fav-label">
        <FavRoomButton />
      </div>
      <div className="table-item-tablet-plus__label">
        <p className="table-item-tablet-plus__text">{`${room.name}`}</p>
      </div>
      <div className="table-item-tablet-plus__label">
        <p className="table-item-tablet-plus__text">{`${room.theme}`}</p>
      </div>
      <div className="table-item-tablet-plus__label rating-label">
        <StarRating rating={room.overall_rating}/>
      </div>
      <div className="table-item-tablet-plus__label completion-label">
        <p className="table-item-tablet-plus__text">{`${room.completion_rate}`}%</p>
      </div>
    </li>
  );
}

export default RoomItemTabletPlus;

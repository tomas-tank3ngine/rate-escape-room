import "./RoomItemMobile.scss";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";

function RoomItemMobile({room, setSelectedRoom}) {
  const handleSelected = ()=>{
    setSelectedRoom(room);
  }
  
    return (
    <li onClick={handleSelected} className="table-item-mobile">
      <section className="item-container-top">
        <div className="item-container-top__left">
          <FavRoomButton />
          <p className="item-name">{`${room.name}`}</p>
        </div>
        <StarRating rating={room.overall_rating}/>
      </section>
      <section className="item-container-middle">
        <p className="item-container-middle__theme">{`${room.theme}`}</p>
        <p className="item-container-middle__difficulty">{`${room.difficulty}`}</p>
        <p className="item-container-middle__completion-rate">{`${room.completion_rate}`}%</p>
      </section>
      <section className="item-container-bottom">
        <p className="item-container-bottom__description">{`${room.description}`}</p>
      </section>
    </li>
  );
}

export default RoomItemMobile;

import "./RoomItemMobile.scss";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";

function RoomItemMobile() {
  return (
    <li className="table-item-mobile">
      <section className="item-container-top">
        <div className="item-container-top__left">
          <FavRoomButton />
          <p className="item-name">Room Name</p>
        </div>
        <StarRating />
      </section>
      <section className="item-container-middle">
        <p className="item-container-middle__theme">Ancient Egypt</p>
        <p className="item-container-middle__difficulty">Intermediate</p>
        <p className="item-container-middle__completion-rate">78%</p>
      </section>
      <section className="item-container-bottom">
        <p className="item-container-bottom__description">Description</p>
      </section>
    </li>
  );
}

export default RoomItemMobile;

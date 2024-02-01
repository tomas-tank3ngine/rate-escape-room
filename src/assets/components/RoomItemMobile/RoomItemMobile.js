import "./RoomItemMobile.scss";
import Icons from "../IconHolder/IconHolder";

function RoomItemMobile() {
  return (
    <li className="table-item-mobile">
      <section className="item-container-top">
        <div className="item-container-top__left">
          <button className="fav-button">
            <img
              src={Icons().HeartEmptyIcon}
              alt="favourites icon"
              className="fav-button__fav-icon"
            />
          </button>
          <p className="item-name">Room Name</p>
        </div>
        <div className="item-container-top__right">
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

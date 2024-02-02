import "./StarRating.scss";
import Icons from "../IconHolder/IconHolder";

function StarRating() {
  return (
    <div className="star-rating">
      <img
        src={Icons().StarEmptyIcon}
        alt="star icon"
        className="star-rating__icon"
      />
      <img
        src={Icons().StarEmptyIcon}
        alt="star icon"
        className="star-rating__icon"
      />
      <img
        src={Icons().StarEmptyIcon}
        alt="star icon"
        className="star-rating__icon"
      />
      <img
        src={Icons().StarEmptyIcon}
        alt="star icon"
        className="star-rating__icon"
      />
      <img
        src={Icons().StarEmptyIcon}
        alt="star icon"
        className="star-rating__icon"
      />
    </div>
  );
}

export default StarRating;
import "./StarRating.scss";
import Icons from "../IconHolder/IconHolder";

function StarRating({ rating }) {
    // Convert rating to a percentage
    const percentageRating = (rating / 5) * 100;
  
    // Determine the number of full, half, and empty stars
    const fullStars = Math.floor((percentageRating / 100) * 5);
    const hasHalfStar = percentageRating % 100 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    // Generate stars based on the percentage rating
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= fullStars; i++) {
        stars.push(
          <img
            key={i}
            src={Icons().StarFullIcon}
            alt="star icon"
            className="star-rating__icon star-rating__icon--full"
          />
        );
      }
  
      if (hasHalfStar) {
        stars.push(
          <img
            key="half"
            src={Icons().StarHalfIcon}
            alt="star icon"
            className="star-rating__icon star-rating__icon--half"
          />
        );
      }
  
      for (let i = 1; i <= emptyStars; i++) {
        stars.push(
          <img
            key={`empty-${i}`}
            src={Icons().StarEmptyIcon}
            alt="star icon"
            className="star-rating__icon star-rating__icon--empty"
          />
        );
      }
  
      return stars;
    };
  
    return <div className="star-rating">{renderStars()}</div>;
  }
export default StarRating;
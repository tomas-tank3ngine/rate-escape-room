import "./StarRating.scss";
import Icons from "../IconHolder/IconHolder";
import { allReviewsOfRoomEndpoint } from "../../utils/api-utils";
import { useState, useEffect } from "react";
import axios from "axios";

function StarRating({ roomId, targetRating }) {
  const [allRatings, setAllRatings] = useState([]);
  const [ratingType, setRatingType] = useState(targetRating);

  useEffect(() => {
    setRatingType(targetRating);
  }, [targetRating]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(allReviewsOfRoomEndpoint(roomId));
        setAllRatings(response.data.averageRatings);
      } catch (error) {}
    };
    fetchData();
  }, [roomId, ratingType]);

  const rating = allRatings[`${ratingType}`];
  console.log(`rating type: ${ratingType} rating value: ${rating}`);

  // Convert rating to a percentage
  const percentageRating = (rating / 5) * 100;

  const roundedRating = Math.round(rating * 2) / 2;

  // Determine the number of full, half, and empty stars
  const fullStars = Math.floor((roundedRating / 5) * 5);
  const hasHalfStar = (roundedRating * 10) % 10 >= 5;
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

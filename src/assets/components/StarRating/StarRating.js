import "./StarRating.scss";
import Icons from "../IconHolder/IconHolder";
import { useParams } from "react-router";
import { allReviewsOfRoomEndpoint } from "../../utils/api-utils";
import { useState, useEffect } from "react";
import axios from "axios";


function StarRating({ roomId, targetRating }) {
    
    const [allRatings, setAllRatings] = useState([])
    const [ratingType, setRatingType] = useState(targetRating)

    
    useEffect(()=>{
        setRatingType(targetRating)
    },[targetRating])

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                console.log(roomId)
                const response = await axios.get(allReviewsOfRoomEndpoint(roomId))
                setAllRatings(response.data.averageRatings)
            } catch (error) {
                
            }
        }
        fetchData();
    },[ratingType])

    console.log(allRatings)
    console.log(ratingType)

    const rating = allRatings[`${ratingType}`];
    
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
        // console.log("stars are: "+stars)
        stars.push(
          <img
            key={i}
            src={Icons().StarFullIcon}
            alt="star icon"
            className="star-rating__icon star-rating__icon--full"
          />
        );
      }
    //   console.log("stars are: "+stars)
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
    
    // if(!allRatings){
    //     <p className="loading">Loading...</p>
    // }
    // return(
    //     <section className="star-rating">
    //         <img src={Icons().StarFullIcon} alt="star" className="star-rating__icon" />
    //         <img src={Icons().StarFullIcon} alt="star" className="star-rating__icon" />
    //         <img src={Icons().StarFullIcon} alt="star" className="star-rating__icon" />
    //         <img src={Icons().StarFullIcon} alt="star" className="star-rating__icon" />
    //         <img src={Icons().StarFullIcon} alt="star" className="star-rating__icon" />
    //     </section>
    // )
}
export default StarRating;
import { useEffect, useState } from 'react';
import './ModalReviewQA.scss';
import { API_URL, singleRoomEndpoint} from '../../utils/api-utils';
import axios from 'axios';
import { useParams} from 'react-router';
import { useNavigate } from 'react-router-dom';


function ModalReviewQA({ isOpen, onClose, user}) {
    const navigate = useNavigate()
    const {roomId} = useParams();
    const [ratings, setRatings] = useState({
    user_id: user? user.id : null,
    atmosphere_rating: 'neutral',
    storyline_rating: 'neutral',
    tech_rating: 'neutral',
    puzzle_fairness_rating: 'neutral',
    staff_rating: 'neutral',
    comment: '',
    room_id: null,
  });

  useEffect(()=>{
    setRatings((prev)=>({
        ...prev,
        room_id: roomId,
    }));
    console.log("ratings at modal reviewQA: "+ratings.room_id);
  },[roomId])


  const handleRatingChange = (question, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [question]: value,
    }));
  };

  const handleReviewChange = (event) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      comment: event.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}/rooms/${roomId}/reviews`, ratings);
      console.log("response is: "+response)
      
      if (response.status == 201) {
        // Form submitted successfully, close the questionnaire
        navigate(`/rooms/`)
        
      } else {
        // Handle error cases
        console.error('Form submission failed');
        alert("Please fill out all fields")
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error submitting form:', error.message);
    }
  };

  

  return (
    <div className={`modal-review-qa ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-review-qa__content">
        <h2 className="modal-review-qa__title">Escape Room Experience Questionnaire</h2>

        <div className="modal-review-qa__question">
          <p className="modal-review-qa__question-text">To what degree do you agree with the following questions:</p>
        </div>


        {/* Question 1 */}
        <div className="modal-review-qa__question">
          <p className="modal-review-qa__question-text">
            1. The room's atmosphere and set design were immersive and eye-catching.
          </p>
          <div className="modal-review-qa__rating">
          {['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'].map((value) => (
              <label htmlFor={`${value}-atmosphere`} key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="atmosphere_rating"
                  id={`${value}-atmosphere`}
                  value={value}
                  checked={ratings.atmosphere_rating === value}
                  onChange={() => handleRatingChange('atmosphere_rating', value)}
                  className="modal-review-qa__rating-input"
                />
                <span className="modal-review-qa__rating-value">{value}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className="modal-review-qa__question">
          <p className="modal-review-qa__question-text">
            2. The room's storyline was interesting and engaging.
          </p>
          <div className="modal-review-qa__rating">
          {['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'].map((value) => (
              <label htmlFor={`${value}-storyline`} key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="storyline_rating"
                  id={`${value}-storyline`}
                  value={value}
                  checked={ratings.storyline_rating === value}
                  onChange={() => handleRatingChange('storyline_rating', value)}
                  className="modal-review-qa__rating-input"
                />
                <span className="modal-review-qa__rating-value">{value}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 3 */}
        <div className="modal-review-qa__question">
          <p className="modal-review-qa__question-text">
            3. The technology used in the room was impressive; I don't know how they did what they did.
          </p>
          <div className="modal-review-qa__rating">
          {['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'].map((value) => (
              <label htmlFor={`${value}-tech`} key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="tech_rating"
                  id={`${value}-tech`}
                  value={value}
                  checked={ratings.tech_rating === value}
                  onChange={() => handleRatingChange('tech_rating', value)}
                  className="modal-review-qa__rating-input"
                />
                <span className="modal-review-qa__rating-value">{value}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 4 */}
        <div className="modal-review-qa__question">
          <p className="modal-review-qa__question-text">
            4. The puzzles were fair and enjoyable; I felt like I had a good chance to solve them without any help.
          </p>
          <div className="modal-review-qa__rating">
          {['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'].map((value) => (
              <label htmlFor={`${value}-puzzle`} key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="puzzle_fairness_rating"
                  id={`${value}-puzzle`}
                  value={value}
                  checked={ratings.puzzle_fairness_rating === value}
                  onChange={() => handleRatingChange('puzzle_fairness_rating', value)}
                  className="modal-review-qa__rating-input"
                />
                <span className="modal-review-qa__rating-value">{value}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 5 */}
        <div className="modal-review-qa__question">
          <p className="modal-review-qa__question-text">
            5. The staff were helpful, understanding, and polite.
          </p>
          <div className="modal-review-qa__rating">
          {['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'].map((value) => (
              <label htmlFor={`${value}-staff`} key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="staff_rating"
                  id={`${value}-staff`}
                  value={value}
                  checked={ratings.staff_rating === value}
                  onChange={() => handleRatingChange('staff_rating', value)}
                  className="modal-review-qa__rating-input"
                />
                <span className="modal-review-qa__rating-value">{value}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 6 */}
        <div className="modal-review-qa__question">
          <p className="modal-review-qa__question-text">
            6. Leave a review below:
          </p>
          <div className="modal-review-qa__rating">
            <textarea
              value={ratings.comment}
              onChange={handleReviewChange}
              className="modal-review-qa__review-textarea"
              required
            />
          </div>
        </div>

        <div className="modal-review-qa__buttons">
          <button className="modal-review-qa__button--submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="modal-review-qa__button--cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalReviewQA;

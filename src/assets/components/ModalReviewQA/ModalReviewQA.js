import { useState } from 'react';
import './ModalReviewQA.scss';
import { API_URL } from '../../utils/api-utils';
import axios from 'axios';

function ModalReviewQA({ isOpen, onClose, onContinue, roomId }) {
  const [ratings, setRatings] = useState({
    atmosphere: 3,
    storyline: 3,
    technology: 3,
    puzzles: 3,
    staff: 3,
    review: '',
    cost: 'affordable',
  });

  const handleRatingChange = (question, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [question]: value,
    }));
  };

  const handleReviewChange = (event) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      review: event.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Assuming you have an API endpoint for submitting the form data
      const response = await axios.post(`${API_URL}/${roomId}/reviews`);

      if (response.ok) {
        // Form submitted successfully, you can close the questionnaire
        onClose();
      } else {
        // Handle error cases
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={`modal-review-qa ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-review-qa__content">
        <h2 className="modal-review-qa__title">Escape Room Experience Questionnaire</h2>

        <div className="modal-review-qa__question">
          <p className="modal-review-qa__question-text">To what degree do you agree with the following questions?</p>
        </div>

        {/* Question 1 */}
        <div className="modal-review-qa__question">
          <p className="modal-review-qa__question-text">
            1. The room's atmosphere and set design were immersive and eye-catching.
          </p>
          <div className="modal-review-qa__rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="atmosphere_rating"
                  value={value}
                  checked={ratings.atmosphere === value}
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
            2. The room's atmosphere and set design were immersive and eye-catching.
          </p>
          <div className="modal-review-qa__rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="atmosphere"
                  value={value}
                  checked={ratings.atmosphere === value}
                  onChange={() => handleRatingChange('atmosphere', value)}
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
            3. The room's storyline was interesting and engaging.
          </p>
          <div className="modal-review-qa__rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="storyline"
                  value={value}
                  checked={ratings.storyline === value}
                  onChange={() => handleRatingChange('storyline', value)}
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
            4. The technology used in the room was impressive; I don't know how they did what they did.
          </p>
          <div className="modal-review-qa__rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="technology"
                  value={value}
                  checked={ratings.technology === value}
                  onChange={() => handleRatingChange('technology', value)}
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
            5. The puzzles were fair and enjoyable; I felt like I had a good chance to solve them without any help.
          </p>
          <div className="modal-review-qa__rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="puzzles"
                  value={value}
                  checked={ratings.puzzles === value}
                  onChange={() => handleRatingChange('puzzles', value)}
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
            6. The staff were helpful, understanding, and polite.
          </p>
          <div className="modal-review-qa__rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="modal-review-qa__rating-label">
                <input
                  type="radio"
                  name="staff"
                  value={value}
                  checked={ratings.staff === value}
                  onChange={() => handleRatingChange('staff', value)}
                  className="modal-review-qa__rating-input"
                />
                <span className="modal-review-qa__rating-value">{value}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 7 */}
        <div className="modal-review-qa__question">
          <p className="modal-review-qa__question-text">
            7. Leave a review below:
          </p>
          <div className="modal-review-qa__rating">
            <textarea
              value={ratings.review}
              onChange={handleReviewChange}
              className="modal-review-qa__review-textarea"
            />
          </div>
        </div>

        <div className="modal-review-qa__buttons">
          <button className="modal-review-qa__button" onClick={handleSubmit}>
            Submit
          </button>
          <button className="modal-review-qa__button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalReviewQA;

import "./CommentsSection.scss";
import CommentsList from "../CommentsList/CommentsList";
import Headshot from "../Headshot/Headshot";
import Icons from "../IconHolder/IconHolder";

function CommentsSection({ videoDetails }) {
  return (
    <section className="comments-section">
      <h2 className="comments-section__title">
        {/* {videoDetails.comments.length + " Comments"} */}
      </h2>
      <section className="comment-section__container">
        <section className="new-comment">
          <div className="new-comment__profile-picture">
            <Headshot />
          </div>

          <form className="new-comment__form">
            <fieldset className="fieldset">
              <h3 className="fieldset__title">join the conversation</h3>
              <input
                type="text"
                name="commentText"
                placeholder="Add a new comment"
                required={true}
              />
              <textarea
                rows="3"
                name="commentText"
                placeholder="Add a new comment"
                required={true}
              />
            </fieldset>

            <button className="new-comment__button">
              <img
                className="new-comment__icon"
                src={Icons().AddCircleIcon}
                alt="Upload button icon"
              />
              comment
            </button>
          </form>
        </section>

        {/* <CommentsList commentsList={videoDetails.comments} /> */}
      </section>
    </section>
  );
}

export default CommentsSection;

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

        {/* <CommentsList commentsList={videoDetails.comments} /> */}
      </section>
    </section>
  );
}

export default CommentsSection;

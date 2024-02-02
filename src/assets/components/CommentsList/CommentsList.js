import Headshot from "../Headshot/Headshot";
import "./CommentsList.scss";
import { convertedTimestamp } from "../TimestampConverter/TimestampConverter";

function CommentsList({ commentsList }) {
  const allComments = commentsList.map((commentItem) => (
    <li className="comment-entry" key={commentItem.id}>
      <div className="comment-entry__profile-picture">
        <Headshot />
      </div>
      <div className="comment-entry__comment-container">
        <div className="comment-entry__info">
          <h3 className="comment-entry__name">{commentItem.name}</h3>
          <h3 className="comment-entry__timestamp">
            {convertedTimestamp(commentItem.timestamp)}
          </h3>
        </div>
        <div className="comment-entry__comment">
          <p className="comment-entry__text">{commentItem.comment}</p>
        </div>
      </div>
    </li>
  ));

  return <ul className="comment-entry__container">{allComments}</ul>;
}

export default CommentsList;

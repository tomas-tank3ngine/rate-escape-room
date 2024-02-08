import "./CommentsList.scss";
import { convertedTimestamp } from "../TimestampConverter/TimestampConverter";
import { useEffect, useState } from "react";
import {
    allReviewsOfRoomEndpoint,
    singleRoomEndpoint,
} from "../../utils/api-utils";
import axios from "axios";
import { useParams } from "react-router";

function CommentsList() {
    const { roomId } = useParams();
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    allReviewsOfRoomEndpoint(roomId)
                );

                setAllReviews(response.data.reviews);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [roomId]);

    if (allReviews.length === 0) {
        <p className="loading">Loading...</p>;
    }

    return (
        <ul className="comment-entry__container">
            {allReviews.map((commentItem) => (
                <li className="comment-entry" key={commentItem.id}>
                    <div className="comment-entry__comment-container">
                        <div className="comment-entry__info">
                            <h3 className="comment-entry__name">Anonymous</h3>
                            <h3 className="comment-entry__timestamp">
                                {convertedTimestamp(commentItem.created_at)}
                            </h3>
                        </div>
                        <div className="comment-entry__comment">
                            <p className="comment-entry__text">
                                {commentItem.comment}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CommentsList;

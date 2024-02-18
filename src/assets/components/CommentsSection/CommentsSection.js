import "./CommentsSection.scss";
import CommentsList from "../CommentsList/CommentsList";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { allReviewsOfRoomEndpoint } from "../../utils/api-utils";
import axios from "axios";

function CommentsSection() {
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
        <section className="comments-section">
            <h2 className="comments-section__title">
                {allReviews.length + " Reviews"}
            </h2>
            <section className="comment-section__container">
                <CommentsList allReviews={allReviews} />
            </section>
        </section>
    );
}

export default CommentsSection;

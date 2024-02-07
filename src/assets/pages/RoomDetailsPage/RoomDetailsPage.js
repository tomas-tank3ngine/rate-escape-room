import "./RoomDetailsPage.scss";
import RoomDetailsMobile from "../../components/RoomDetailsMobile/RoomDetailsMobile";
import RoomDetailsTabletPlus from "../../components/RoomDetailsTabletPlus/RoomDetailsTabletPlus";
import CommentsList from "../../components/CommentsList/CommentsList";
import { singleRoomEndpoint, allReviewsOfRoomEndpoint } from "../../utils/api-utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function RoomDetailsPage({ responsive, user }) {
    const { roomId } = useParams();

    const [room, setRoom] = useState({});
    const [allReviews, setAllReviews] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(singleRoomEndpoint(roomId));
                console.log(console.log("data fetched in room details page" + response.data))
                setRoom(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [roomId]);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get((allReviewsOfRoomEndpoint(roomId)))
                setAllReviews(response.data)
                console.log(allReviews)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[roomId])

    if (!roomId || allReviews){
        <p className="loading">Loading...</p>
    }

    return (
        <main className="room-details-page">
            <section className="room-details">
                {responsive.isTablet ? (
                    <RoomDetailsTabletPlus room={room} user={user}/>
                ) : (
                    <RoomDetailsMobile room={room} user={user}/>
                )}
            </section>
            <section className="room-reviews">
            <section className="comments-section">
      <h2 className="comments-section__title">
        {allReviews.length + " Reviews"}
      </h2>
      <section className="comment-section__container">

        <CommentsList/>
      </section>
    </section>
            </section>
        </main>
    );
}

export default RoomDetailsPage;

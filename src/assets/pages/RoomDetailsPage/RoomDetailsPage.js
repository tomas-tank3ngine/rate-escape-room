import "./RoomDetailsPage.scss";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import RoomDetailsMobile from "../../components/RoomDetailsMobile/RoomDetailsMobile";
import RoomDetailsTabletPlus from "../../components/RoomDetailsTabletPlus/RoomDetailsTabletPlus";
import ModalReviewQA from "../../components/ModalReviewQA/ModalReviewQA";
import { singleRoomEndpoint } from "../../utils/api-utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function RoomDetailsPage({ responsive, user }) {
    const { roomId } = useParams();

    const [room, setRoom] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(singleRoomEndpoint(roomId));
                console.log(response.data)
                setRoom(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [roomId]);

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
                <CommentsSection />
            </section>
        </main>
    );
}

export default RoomDetailsPage;

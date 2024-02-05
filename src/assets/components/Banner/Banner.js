import "./Banner.scss";
import { Link } from "react-router-dom";
import { singleRoomEndpoint } from "../../utils/api-utils";
import { useState, useEffect } from "react";
import axios from "axios";

function Banner({ allRooms }) {
    const [randomRoom, setRandomRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const randomIndex = Math.floor(Math.random() * allRooms.length);
                const rollRoom = allRooms[randomIndex];

                const response = await axios.get(singleRoomEndpoint(rollRoom.id));
                setRandomRoom(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [allRooms]);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className="banner">
                    {randomRoom && (
                        <Link
                            to={`/rooms/${randomRoom.id}`}
                            className="banner__link"
                        >
                            <p className="banner__p">Discover a Random Room</p>
                        </Link>
                    )}
                </section>
            )}
        </>
    );
}

export default Banner;

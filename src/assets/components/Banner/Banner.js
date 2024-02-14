import "./Banner.scss";
import { Link } from "react-router-dom";
import { allRoomsEndpoint } from "../../utils/api-utils";
import { useState, useEffect } from "react";
import axios from "axios";

function Banner() {
    const [randomRoom, setRandomRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(allRoomsEndpoint());

                const randomIndex = Math.floor(
                    Math.random() * response.data.length
                );
                const randomRoom = response.data[randomIndex];
                setRandomRoom(randomRoom);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <p className="loading">Loading...</p>
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

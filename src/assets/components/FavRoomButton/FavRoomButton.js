import "./FavRoomButton.scss";
import Icons from "../IconHolder/IconHolder";
import { useEffect, useState } from "react";
import axios from "axios";
import { currentUserEndpoint, singleUserFavoriteRoomsEndpoint } from "../../utils/api-utils";

function FavRoomButton({ room }) {
    const [allFavorites, setAllFavorites] = useState(false);
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(currentUserEndpoint(), {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    },
                });

                setUser(response.data);
                
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);



    const handleFav = async () => {
        const fetchData = async () =>{
            try {
                const response = await axios.get(singleUserFavoriteRoomsEndpoint)
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }
    

  

    return (
        <button onClick={handleFav} className="fav-room-button">
            <img
                src={Icons().HeartEmptyIcon}
                alt="Favourite Icon"
                className="fav-room-button__icon"
            />
        </button>
    );
}

export default FavRoomButton;

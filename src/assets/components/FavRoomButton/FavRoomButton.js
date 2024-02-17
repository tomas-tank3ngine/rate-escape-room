import "./FavRoomButton.scss";
import Icons from "../IconHolder/IconHolder";
import { useEffect, useState } from "react";
import axios from "axios";
import { currentUserEndpoint, singleUserFavoriteRoomsEndpoint } from "../../utils/api-utils";

function FavRoomButton({ room }) {
    const [allFavorites, setAllFavorites] = useState(false);
    const [user, setUser] = useState({})

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(currentUserEndpoint(), {
    //                 headers: {
    //                     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //                 },
    //             });

    //             setUser(response.data);
    //             console.log(response.data.id)
                
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //             // alert("you are not logged in")
    //         }
    //     };

    //     fetchData();
    // }, []);

    const handleFav = async () => {
        const fetchData = async () =>{
            try {
                const response = await axios.get(currentUserEndpoint(), {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                

                // setUser(response.data);
                console.log(response.data)
                const userResponse = await axios.get(singleUserFavoriteRoomsEndpoint(response.data.id), {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                console.log("userResponse is: "+userResponse.data)
            } catch (error) {
                console.log(error);
                // alert("you are not logged in")
                
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

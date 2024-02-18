import "./FavRoomButton.scss";
import Icons from "../IconHolder/IconHolder";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    currentUserEndpoint,
    userFavoritesEndpoint,
    singleUserFavoriteRoomsEndpoint,
} from "../../utils/api-utils";
import { Context } from "../../utils/context-utils";
import { useContext } from "react";

function FavRoomButton({ room }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const { userInfoContext, userFavoritesContext } = useContext(Context);
    const [userInfo, setUserInfo] = userInfoContext;
    const [userFavorites, setUserFavorites] = userFavoritesContext;
    const [roomState, setRoomState] = useState(null);

    useEffect(() => {
        if (!userInfo || !room) {
            return;
        }
        setRoomState(room);

        const fetchData = async () => {
            const favoritesResponse = await axios.get(
                singleUserFavoriteRoomsEndpoint(userInfo),
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            console.log(favoritesResponse.data);
            let foundFavorite = false;
            favoritesResponse.data.forEach((favoriteRoom) => {
                if (favoriteRoom.id === room.id) {
                    setIsFavorite(true);
                    console.log(`set room ${room.name} to favorite`);
                    foundFavorite = true;
                    return;
                }
            });
            if (!foundFavorite) {
                setIsFavorite(false);
                console.log(`set room ${room.name} to not favorite`);
            }
        };
        fetchData();
    }, [userInfo, room]);

    const handleFav = async () => {
        if (!userInfo) {
            console.log("User info not available");
            return;
        }
        console.log("userInfo is: " + userInfo.id);
        console.log("room is: " + roomState.id);
        if (isFavorite) {
            const deleteFromFavorites = async () => {
                try {
                    await axios.delete(userFavoritesEndpoint(), {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                        data: {
                            user_id: userInfo.id,
                            room_id: roomState.id,
                        },
                    });
                } catch (error) {
                    console.log(error);
                }
            };
            deleteFromFavorites();
            setIsFavorite(false);
        } else {
            const addToFavorites = async () => {
                const data = {
                    user_id: userInfo.id,
                    room_id: roomState.id,
                };
                try {
                    const response = await axios.post(
                        userFavoritesEndpoint(),
                        data,
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                    "token"
                                )}`,
                            },
                        }
                    );
                } catch (error) {
                    console.log(error);
                }
            };
            addToFavorites();
            setIsFavorite(true);
        }
    };

    const handleNoUser = () => {
        alert("Please login to add rooms to favorites");
    };

    return (
        <button
            onClick={userInfo ? handleFav : handleNoUser}
            className="fav-room-button"
        >
            <img
                src={
                    isFavorite ? Icons().HeartFullIcon : Icons().HeartEmptyIcon
                }
                alt="Favourite Icon"
                className="fav-room-button__icon"
            />
        </button>
    );
}

export default FavRoomButton;

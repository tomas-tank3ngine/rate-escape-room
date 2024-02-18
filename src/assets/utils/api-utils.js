export const API_URL = process.env.REACT_APP_API_URL;

export const allRoomsEndpoint = () => API_URL + "rooms";

export const singleRoomEndpoint = (roomId) => API_URL + "rooms/" + roomId;

export const allReviewsOfRoomEndpoint = (roomId) => API_URL + "rooms/" + roomId + "/reviews";

export const allUsersEndpoint = () => API_URL + "users";

export const singleUserEndpoint = (userId) => API_URL + "users/" + userId;

export const singleUserFavoriteRoomsEndpoint = (userId) => API_URL + "users/" + userId + "/favorites";

export const userFavoritesEndpoint = () => API_URL + "favorites";

export const currentUserEndpoint = () => API_URL + "users/account/current"

export const registerUserEndpoint = () => API_URL + "users/account/register"

export const loginUserEndpoint = () => API_URL + "users/account/login"



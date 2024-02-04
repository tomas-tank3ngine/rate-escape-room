const API_URL = "http://localhost:8080/api"

export const allRoomsEndpoint = () => API_URL + "/rooms";

export const singleRoomEndpoint = (roomId) => API_URL + "/rooms/" + roomId;

export const allReviewsOfRoom = (roomId) => API_URL + "/rooms/" + roomId + "/reviews";

export const allUsersEndpoint = () => API_URL + "/users";

export const singleUserEndpoint = (userId) => API_URL + "/users/" + userId;

export const allFavoritesOfUserEndpoint = () => API_URL + "/favorites";

export const currentUserEndpoint = () => API_URL + "/users/account/current"

export const registerUserEndpoint = () => API_URL + "/users/account/register"

export const loginUserEndpoint = () => API_URL + "/users/account/login"

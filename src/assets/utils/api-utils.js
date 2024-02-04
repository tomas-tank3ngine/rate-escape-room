const API_URL = "http://localhost:8080"

export const allRoomsEndpoint = () => API_URL + "/rooms";

export const singleRoomEndpoint = (roomId) => API_URL + "/rooms/" + roomId;

export const allReviewsOfRoom = (roomId) => API_URL + "/rooms/" + roomId + "/reviews";

export const allUsersEndpoint = () => API_URL + "/users";

export const singleUserEndpoint = (userId) => API_URL + "/users/" + userId;

export const allFavoritesOfUser = () => API_URL + "/favorites";
// export as a function
// Get the room data by accessing it through the room's id (param)
// get all the reviews for a room
// review rating divided by num of reviews

import { allReviewsOfRoomEndpoint } from "../../utils/api-utils"

const roomRatings = async (roomId)=>{
    try {
        const response = await axios.get(allReviewsOfRoomEndpoint(roomId))

        const allReview
    }
}

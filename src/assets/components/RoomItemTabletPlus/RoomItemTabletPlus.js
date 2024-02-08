import "./RoomItemTabletPlus.scss";
import Icons from "../IconHolder/IconHolder";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";
import { useEffect, useState } from "react";
import { allReviewsOfRoomEndpoint } from "../../utils/api-utils";
import axios from "axios";

function RoomItemTabletPlus({room, setSelectedRoom}) {
       
    
    const handleSelected = ()=>{
        setSelectedRoom(room);
      }

      if (!room){
        <p className="loading">Loading...</p>
    }
  return (
    <li onClick={handleSelected} className="table-item-tablet-plus">
      <div className="table-item-tablet-plus__label fav-label">
        <FavRoomButton />
      </div>
      <div className="table-item-tablet-plus__label">
        <p className="table-item-tablet-plus__text">{`${room.name}`}</p>
      </div>
      <div className="table-item-tablet-plus__label theme-label">
        <p className="table-item-tablet-plus__text">{`${room.theme}`}</p>
      </div>
      <div className="table-item-tablet-plus__label rating-label">
        <StarRating roomId={room.id} targetRating="overall_rating"/>
      </div>
      <div className="table-item-tablet-plus__label completion-label">
        <p className="table-item-tablet-plus__text">{`${room.difficulty}`}</p>
      </div>
    </li>
  );
}

export default RoomItemTabletPlus;

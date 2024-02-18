import "./RoomItemMobile.scss";
import StarRating from "../StarRating/StarRating";
import FavRoomButton from "../FavRoomButton/FavRoomButton";
import ModalPopup from "../ModalPopup/ModalPopup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RoomItemMobile({ room }) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleContinue = () => {
        navigate(room.id);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setTimeout(() => {
            setIsModalOpen(false);
        }, 10);
    };

    const handleSelected = () => {
        setModalContent(`Continue to ${room.name} details?`);
        setIsModalOpen(true);
    };

    if (!room) {
        <p className="loading">Loading...</p>;
    }

    return (
        <li onClick={handleSelected} className="table-item-mobile">
            <ModalPopup
                content={modalContent}
                isOpen={isModalOpen}
                onClose={handleCancel}
                onContinue={handleContinue}
            />
            <section className="item-container-top">
                <div className="item-container-top__left">
                    <FavRoomButton room={room}/>
                    <p className="item-name">{`${room.name}`}</p>
                </div>
                <StarRating roomId={room.id} targetRating="overall_rating" />
            </section>
            <section className="item-container-middle">
                <p className="item-container-middle__theme">{`${room.theme}`}</p>
                <p
                    className={`item-container-middle__difficulty ${room.difficulty}`}
                >{`${room.difficulty}`}</p>
                <p className="item-container-middle__completion-rate">
                    {`${room.completion_rate * 100}%`}
                </p>
            </section>
            <section className="item-container-bottom">
                <p className="item-container-bottom__description">{`${room.description}`}</p>
            </section>
        </li>
    );
}

export default RoomItemMobile;

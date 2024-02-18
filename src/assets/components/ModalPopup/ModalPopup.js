import "./ModalPopup.scss";

function ModalPopup({ content, isOpen, onClose, onContinue }) {
    return (
        <div className={`popup-modal ${isOpen ? "open" : "closed"}`}>
            <div className="popup-modal__content">
                <p className="popup-modal__content__text">{content}</p>
                <div className="popup-modal__content__buttons">
                    <button
                        className="popup-modal__content__buttons__button"
                        onClick={onContinue}
                    >
                        Continue
                    </button>
                    <button
                        className="popup-modal__content__buttons__button"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalPopup;

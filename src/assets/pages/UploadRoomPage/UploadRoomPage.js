import "./UploadRoomPage.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { allRoomsEndpoint } from "../../utils/api-utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadRoomPage({ user }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        user_id: user ? user.id : "",
        description: "",
        theme: "",
        group_size: "",
        duration: "",
        address: "",
        website_url: "",
        cost: "",
        difficulty: "",
        thumbnail: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (
            !formData.name ||
            !formData.theme ||
            !formData.group_size ||
            !formData.duration ||
            !formData.description ||
            !formData.cost
        ) {
            alert("Please fill in all required fields.");
            return;
        }
        try {
            const response = await axios.post(allRoomsEndpoint(), formData);

            alert("form submitted. Rooms have been updated.");

            navigate('/')
            
        } catch (error) {
            console.log("error submitting form: " + error);
        }
    };

    return (
        <>
            {user ? (
            <section className="upload-page">
                <h1 className="upload-page__header">Upload Room</h1>
                <form onSubmit={handleSubmit} className="upload-form">
                    <label htmlFor="name" className="upload-form__label">
                        <p className="upload-form__field-p">* Room Name: </p>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="theme" className="upload-form__label">
                        <p className="upload-form__field-p">* Theme: </p>
                        <input
                            type="text"
                            name="theme"
                            value={formData.theme}
                            id="theme"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="duration" className="upload-form__label">
                        <p className="upload-form__field-p">
                            * Playtime Duration (in minutes):{" "}
                        </p>
                        <input
                            type="number"
                            name="duration"
                            id="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            min="0"
                            required
                        />
                    </label>
                    <label htmlFor="group_size" className="upload-form__label">
                        <p className="upload-form__field-p">
                            * Number of Players:{" "}
                        </p>
                        <input
                            type="number"
                            name="group_size"
                            id="group_size"
                            value={formData.group_size}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                    </label>
                    <label htmlFor="cost" className="upload-form__label">
                        <p className="upload-form__field-p">* Cost: </p>
                        <select
                            name="cost"
                            id="cost"
                            value={formData.cost}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select cost
                            </option>
                            <option value="Premium">Premium</option>
                            <option value="Affordable">Affordable</option>
                            <option value="Budget">Budget</option>
                        </select>
                    </label>
                    <label htmlFor="difficulty" className="upload-form__label">
                        <p className="upload-form__field-p">* Difficulty: </p>
                        <select
                            name="difficulty"
                            id="difficulty"
                            value={formData.difficulty}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select difficulty
                            </option>
                            <option value="Expert">Expert</option>
                            <option value="Challenging">Challenging</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Beginner">Beginner</option>
                        </select>
                    </label>
                    <label htmlFor="description" className="upload-form__label">
                        <p className="upload-form__field-p">* Description: </p>
                        <textarea
                            name="description"
                            id="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="address" className="upload-form__label">
                        <p className="upload-form__field-p">Address: </p>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </label>

                    <label htmlFor="website_url" className="upload-form__label">
                        <p className="upload-form__field-p">Website URL: </p>
                        <input
                            type="text"
                            name="website_url"
                            id="website_url"
                            value={formData.website_url}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="thumbnail" className="upload-form__label">
                        <p className="upload-form__field-p">Upload Image: </p>
                        <input
                            type="file"
                            name="thumbnail"
                            id="thumbnail"
                            value={formData.thumbnail}
                            onChange={handleChange}
                        />
                    </label>
                    <p className="upload-form__warning-p">
                        Fields marked by * are required{" "}
                    </p>

                    <button className="upload-form__submit-button">
                        Submit
                    </button>
                </form>
            </section>
            ) : (
                <p className="unAuth">
                    You are not authorized to view this page. Please{" "}
                    <Link to="/accountLogin" className="login">
                        login
                    </Link>{" "}
                    or return to the <Link className="/">Homepage</Link>
                </p>
            )}
        </>
    );
}

export default UploadRoomPage;

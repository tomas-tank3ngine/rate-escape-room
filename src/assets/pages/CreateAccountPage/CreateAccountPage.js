import './CreateAccountPage.scss'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { registerUserEndpoint, currentUserEndpoint } from '../../utils/api-utils';
import axios from 'axios';
import { useNavigate } from "react-router";




const CreateAccountPage = ({ user, setUser }) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isOwner: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            return;
        }

        try {
            const newUser = {
                username: formData.username,
                password: formData.password,
                email: formData.email,
                isOwner: formData.isOwner,
            };

            const response = await axios.post("http://localhost:8080/api/users/account/register", newUser);

            if (response) {
                setSuccess(true);
                event.target.reset();

                const userResponse = await axios.get(
                    currentUserEndpoint(),
                    {
                        headers: {
                            Authorization: `Bearer ${response.data.token}`,
                        },
                    }
                );

                setUser(userResponse.data);
                navigate("/");
            } else {
                setSuccess(false);
                setError("");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(
                    currentUserEndpoint(),
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );

                setUser(userResponse.data);

                
                setTimeout(() => {
                    navigate("/");
                }, 1000);

            } catch (error) {
                console.log(error);
            }
        };

        if (success) {
            fetchData();
        }
    }, [success, setUser, navigate]);

    return (
        <div className="create-user-page">
            <form className="create-user-form" onSubmit={handleSubmit}>
                <h2 className="create-user-form__title">Create User</h2>
                <div className="create-user-form__input-group">
                    <label
                        className="create-user-form__input-group--label"
                        htmlFor="username"
                    >
                        Username:
                    </label>
                    <input
                        className="create-user-form__input-group--input"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="create-user-form__input-group">
                    <label
                        className="create-user-form__input-group--label"
                        htmlFor="email"
                    >
                        Email:
                    </label>
                    <input
                        className="create-user-form__input-group--input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="create-user-form__input-group">
                    <label
                        className="create-user-form__input-group__label"
                        htmlFor="password"
                    >
                        Password:
                    </label>
                    <input
                        className="create-user-form__input-group__input"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="create-user-form__input-group">
                    <label
                        className="create-user-form__input-group--label"
                        htmlFor="confirmPassword"
                    >
                        Confirm Password:
                    </label>
                    <input
                        className="create-user-form__input-group--input"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="create-user-form__input-group">
                    <input
                        className="create-user-form__input-group--checkbox"
                        type="checkbox"
                        name="isOwner"
                        checked={formData.isOwner}
                        onChange={handleChange}
                    />
                    <label
                        className="create-user-form__input-group--label create-user-form__input-group__label--checkbox"
                        htmlFor="isOwner"
                    >
                        I am an owner
                    </label>
                </div>
                <button className="create-user-form__button" type="submit">
                    Create User
                </button>
                {success && <div className="signup__message">Signed up!</div>}
        {error && <div className="signup__message">{error}</div>}
                <Link className="create-user-form__link" to="/accountLogin">
                    Already have an account? Log in here
                </Link>
            </form>
        </div>
    );
};

export default CreateAccountPage;
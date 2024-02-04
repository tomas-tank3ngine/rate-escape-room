import "./Signup.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input/Input";
import { registerUserEndpoint } from "../../utils/api-utils";

function Signup() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make a post request to http://localhost:8080/api/users/register"
    const response = await axios.post(
        registerUserEndpoint,
      {
        email: event.target.email.value,
        password: event.target.password.value,
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        phone: event.target.phone.value,
        address: event.target.address.value,
      }
    );
    // POST requires email, password, first_name, last_name, phone, address
    // setSuccess to true upon successful response
    if (response) {
      setSuccess(true);
      event.target.reset();
    }
    // setError to empty string
    // reset form with event.target.reset()
    // if theres an error setError setSuccess to false
    try {
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <main className="signup-page">
      <form className="signup" onSubmit={handleSubmit}>
        <h1 className="signup__title">Sign up</h1>

        <Input type="text" name="first_name" label="First name" />
        <Input type="text" name="last_name" label="Last name" />
        <Input type="text" name="phone" label="Phone" />
        <Input type="text" name="address" label="Address" />
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />

        <button className="signup__button">Sign up</button>

        {success && <div className="signup__message">Signed up!</div>}
        {error && <div className="signup__message">{error}</div>}
      </form>
      <p>
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </main>
  );
}

export default Signup;

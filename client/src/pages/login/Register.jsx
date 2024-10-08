import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useRef, useState } from "react";
import axios from "axios";

const Register = () => {
  const imageInput = useRef(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageClick = () => {
    imageInput.current.click(); // Triggers the file input click
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        inputs
      );
      console.log(res);
      navigate("/login");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" ref={imageInput} hidden /> {/* Hidden file input */}
        <img src="/user-upload.png" alt="" onClick={handleImageClick} /> {/* Trigger file input */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you already have an account?{" "}
          <Link style={{ textDecoration: "none" }} to={"/login"}>
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;

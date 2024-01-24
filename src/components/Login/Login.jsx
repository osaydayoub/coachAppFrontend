import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../pages/LoginPage/LoginPage.css";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import axios from "axios";
import loginImg from "../../assets/msaCoach.jpeg";
//TODO handel is afunc for moving to signup page oe login... so do it
function Login({ handle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const { setCurrentClient } = useData();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_LINK}/users/login`,
        {
          email,
          password,
        }
      );
      // console.log(`${res.data.name} LoggedIn`);

      console.log(res.data);

      setCurrentUser(res.data);
      console.log(res.data.client);
      setCurrentClient(res.data.client);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Faild to login");
    }
    setLoading(false);
  }

  return (
    <div className="login-container">
      <img className="img-login" src={loginImg} alt="logo-img" />
      <h2>Welcome</h2>
      {/* <h3>M.S.A</h3> */}
      {error && <div className="error-container">{error}</div>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button disabled={loading} type="submit">
            Login
          </button>
        </div>
      </form>

      <div>
        Need an account?<Link onClick={handle}>Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;

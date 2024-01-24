import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
// import { GiWeightLiftingUp } from "react-icons/gi";
import { useAuth } from "../../context/AuthContext.jsx";
import { useData } from "../../context/DataContext.jsx";
import { useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import logo from "../../assets/images/logo.jpeg";
export default function Navbar() {
  const { currentUser, setCurrentUser, setIsLoggedIn } = useAuth();
  const { setClientsData, setWorkoutsData, setCurrentClient } = useData();
  const [menuOpen, setmenuOpen] = useState(false);
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      // await logout();
      setCurrentUser(null);
      setIsLoggedIn(false);
      setClientsData(null);
      setWorkoutsData(null);
      setCurrentClient(null);
      navigate("./login");
    } catch {
      console.log("failed to log out");
    }
  }
  return (
    <nav>
      <Link to="/" className="title">
        <img className="logo-img" src={logo} alt="img" />
      </Link>
      <div
        className="menu"
        onClick={() => {
          setmenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {currentUser.isAdmin && (
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/timetable">Training Timetable</NavLink>
        </li>
        {!currentUser.isAdmin && (
          <li>
            <NavLink to="/tracking">Tracking</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/meals">Meals</NavLink>
        </li>
        <li>
          <button onClick={handleLogout}>
            <GrLogout />
          </button>
        </li>
      </ul>
    </nav>
  );
}

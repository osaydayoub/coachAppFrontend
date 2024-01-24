import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Homepage.css";
function Homepage() {
  const percentage1 = 10;
  const percentage2 = 50;
  const percentage3 = 80;
  const { currentUser, isLoggedIn } = useAuth();
  return (
    <div className="Homepage page">
      <h1>{`Hello ${currentUser.name} !`}</h1>
      {!currentUser.isAdmin && (
        <div className="progress-container">
          <div className="progress">
            <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
          </div>
          <div className="progress">
            <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
          </div>
          <div className="progress">
            <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;

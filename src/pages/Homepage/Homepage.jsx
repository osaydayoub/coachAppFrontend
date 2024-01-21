import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";
function Homepage() {
  const { currentUser, isLoggedIn } = useAuth();
  return (
    <div className="page">
      <h1>{`Hello ${currentUser.name}`}</h1>
    </div>
  );
}

export default Homepage;

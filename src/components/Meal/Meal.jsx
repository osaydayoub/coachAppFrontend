import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Meal() {
  const location = useLocation();
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <>
      <button onClick={handleBack}>Back</button>
      <h1>{location.state.name}</h1>
      <p>{`You can choose from a variety of options for your ${location.state.name}, ensuring your meal fits your preferences and nutritional needs.`}</p>
    </>
  );
}

export default Meal;

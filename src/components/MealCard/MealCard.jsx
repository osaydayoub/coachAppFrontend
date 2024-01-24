import React from "react";
import "./MealCard.css";
function MealCard({ meal }) {
  return (
    <div className="card-container">
      {/* <img className='card-img' src={meal.img} alt="img" /> */}
      <h2>{meal}</h2>

      <div>
        <button>Select!</button>
      </div>
    </div>
  );
}

export default MealCard;

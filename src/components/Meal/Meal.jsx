import React from "react";
import "./Meal.css";
function Meal({ mealOption }) {
  return (
    <div className="meal-box">
      <ul>
        {mealOption.ingredients.map((ingredient) => {
          return (
            <li
              key={ingredient.name}
            >{`${ingredient.name} - ${ingredient.amount} ${ingredient.unit}`}</li>
          );
        })}
      </ul>
      <h4>Total Calories {mealOption.totalCalories}</h4>
    </div>
  );
}

export default Meal;

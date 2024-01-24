import React from "react";
import "./MealsPage.css";
import MealCard from "../../components/MealCard/MealCard";
function MealsPage() {
  const mealsData = ["Breakfast", "Lunch", "Snack", "Dinner"];
  return (
    <div className="MealsPage page">
      <div className="meals-container">
        <h1>Meals for Today</h1>
        <p>
          Feel free to choose any meal from the four options - Breakfast, Lunch,
          Snack, or Dinner. Customize your Daily Tracking with the meals that
          best suit your preferences and nutritional goals
        </p>
      </div>
      <div className="cards-container" id="cards-id">
        {mealsData.map((meal, index) => {
          return <MealCard key={index} meal={meal} />;
        })}
      </div>
    </div>
  );
}

export default MealsPage;

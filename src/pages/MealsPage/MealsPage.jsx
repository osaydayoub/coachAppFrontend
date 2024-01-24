import React from "react";
import "./MealsPage.css";
import MealCard from "../../components/MealCard/MealCard";
function MealsPage() {
  const mealsData = [
    { name: "Breakfast", img: "1.jpg" },
    { name: "Lunch", img: "2.jpg" },
    { name: "Snack", img: "3.jpg" },
    { name: "Dinner", img: "4.jpg" },
  ];
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

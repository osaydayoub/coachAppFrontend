import React, { useEffect, useState } from "react";
import "./MealOptionsPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext.jsx";
import Meal from "../../components/Meal/Meal.jsx";

function MealOptionsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mealOptions, setMealOptions] = useState(null);
  const { getAllMealsByType } = useData();

  useEffect(() => {
    const getMelas = async () => {
      try {
        const MealOptions = await getAllMealsByType(
          location.state.name.toLowerCase()
        );
        console.log(MealOptions);
        setMealOptions(MealOptions);
      } catch (error) {
        console.log(error);
      }
    };
    getMelas();
  }, []);
  function handleBack() {
    navigate(-1);
  }
  return (
    <div className="page">
      <button className="back-btn" onClick={handleBack}>
        Back
      </button>
      <h1>{location.state.name}</h1>
      <p>{`You can choose from a variety of options for your ${location.state.name}, ensuring your meal fits your preferences and nutritional needs.`}</p>
      <div>
        <div>
          <button className="add-meal-btn">+</button>
        </div>
        {mealOptions && (
          <div className="meals-container">
            {mealOptions.map((mealOption) => {
              return <Meal mealOption={mealOption} key={mealOption._id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MealOptionsPage;

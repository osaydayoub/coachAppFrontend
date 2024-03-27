import React, { useState } from "react";
import { useData } from "../../context/DataContext.jsx";
import "./AddMeal.css";
function AddMeal({ handeleAddMealDisplay, type, handleMealsChanged }) {
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [amount, setAmount] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const unitOptions = [
    { value: "kg", label: "kg" },
    { value: "g", label: "g" },
    { value: "ml", label: "ml" },
    { value: "units", label: "units" },
  ];
  const [selectedUnit, setSelectedUnit] = useState(unitOptions[0].value);
  //TODO done
  const [adding, setAdding] = useState(false);
  const { addNewMeal } = useData();

  const handleAddMeal = async (e) => {
    e.preventDefault();
    try {
      setAdding(true);
      const newMeal = {
        ingredients: ingredientsArray,
        type: type,
        totalCalories: totalCalories,
      };
      await addNewMeal(newMeal);
      handleMealsChanged(true);
    } catch (error) {}
    console.log("handleAddMeal");
    setAdding(false);
    setTotalCalories(0);
    handeleAddMealDisplay(false);
  };
  const handleAddIngredient = (e) => {
    e.preventDefault();
    const ingredient = {
      name: ingredientName,
      amount: amount,
      unit: selectedUnit,
    };
    setIngredientsArray([...ingredientsArray, ingredient]);
    setIngredientName("");
    setAmount(0);
    setSelectedUnit(unitOptions[0].value);
  };
  return (
    <div className="addPackage-container">
      <button onClick={() => handeleAddMealDisplay(false)}>X</button>
      <h3>Add a Meal</h3>
      <ul>
        {ingredientsArray.map((ingredient, index) => {
          return (
            <li
              key={index}
            >{`${ingredient.name} - ${ingredient.amount} ${ingredient.unit}`}</li>
          );
        })}
      </ul>

      <form onSubmit={(e) => handleAddIngredient(e)}>
        <div>
          <label htmlFor="ingredient-name">Ingredient Name</label>
          <br />
          <input
            type="string"
            id="ingredient-name"
            onChange={(e) => setIngredientName(e.target.value)}
            value={ingredientName}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <br />
          <input
            type="number"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          />
        </div>
        <div>
          <label>
            {`Choose a Unit: `}
            <select
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
            >
              {unitOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <button type="submit">Add Ingredient</button>
        </div>
      </form>

      <form onSubmit={(e) => handleAddMeal(e)}>
        <div>
          <label htmlFor="total-calories">Total Calories</label>
          <br />
          <input
            type="number"
            id="total-calories"
            onChange={(e) => setTotalCalories(e.target.value)}
            value={totalCalories}
            required
          />
        </div>

        <div>
          <button type="submit" disabled={adding}>
            Add Meal
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMeal;

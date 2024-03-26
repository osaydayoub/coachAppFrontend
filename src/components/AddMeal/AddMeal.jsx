import React, { useState } from "react";
import { useData } from "../../context/DataContext.jsx";
import "./AddMeal.css";
function AddMeal({ handeleAddMealDisplay }) {
  const [ingredientName, setIngredientName] = useState("");
  const [amount, setAmount] = useState(0);

  const unitOptions = [
    { value: "kg", label: "kg" },
    { value: "g", label: "g" },
    { value: "ml", label: "ml" },
    { value: "units", label: "units" },
  ];
  const [selectedUnit, setSelectedUnit] = useState(unitOptions[0].value);
  //TODO done
  const [adding, setAdding] = useState(false);
  const { addPackage } = useData();

  const handleAddPackage = async (e) => {
    e.preventDefault();
    try {
      setAdding(true);
      await addPackage();
    } catch (error) {}
    console.log("handleAddPackage");
    setAdding(false);
  };
  return (
    <div className="addPackage-container">
      <button onClick={() => handeleAddMealDisplay(false)}>X</button>
      <h3>Add a Meal</h3>
      <form onSubmit={(e) => handleAddPackage(e)}>
        <div>
          <label htmlFor="workouts-number">Ingredient Name</label>
          <br />
          <input
            type="string"
            id="ingredient-name"
            onChange={(e) => setIngredientName(e.target.value)}
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
          {/* disabled={adding} TODO implement the change*/}
          <button type="submit" disabled={adding}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMeal;

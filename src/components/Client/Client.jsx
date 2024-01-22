import React, { useState } from "react";
import "./Client.css";
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";
import { getFullDate } from "../../utils/helpers.js";
import { useData } from "../../context/DataContext.jsx";
function Client({ client, index }) {
  const [moreInfo, setMoreInfo] = useState(false);
  const [workoutsNumber, setWorkoutsNumber] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [caloricIntake, setCaloricIntake] = useState(0);

  const [adding, setAdding] = useState(false);
  const { addPackage } = useData();

  const handleAddPackage = async (e) => {
    e.preventDefault();
    try {
      await addPackage(client._id, {
        numberOfWorkouts: workoutsNumber,
        totalCost: totalCost,
        paidAmount: paidAmount,
        caloricIntake: caloricIntake,
      });
    } catch (error) {}
    console.log("handleAddPackage");
  };

  return (
    <div className="client-container">
      <div className="basic-data">
        <div>{`Name: ${client.name}`}</div>
        <div>{`Age: ${client.age}`}</div>
        <div>{`Caloric Intake: ${client.caloricIntake}`}</div>
        <button>Add a Package</button>

        <button>Add a Workout</button>
        {!moreInfo && (
          <button onClick={() => setMoreInfo(true)}>
            <MdOutlineExpandMore />
          </button>
        )}
      </div>
      {moreInfo && (
        <div className="more-data">
          <div>{`Start Date: ${getFullDate(new Date(client.startDate))}`}</div>
          <div>{`Email: ${client.email}`}</div>
          <div>{`Workouts Number: ${client.numberOfWorkouts}`}</div>
          <div>{`Total Cost: ${client.totalCost}`}</div>
          <div>{`Paid Amount: ${client.paidAmount}`}</div>
          <button onClick={() => setMoreInfo(false)}>
            <MdExpandLess />
          </button>
        </div>
      )}
      {/* //Add a Package--------------------------------------------------------------------------------------- */}

      <div className="addPackage-container">
        <h3>Add a Package</h3>
        <form onSubmit={(e) => handleAddPackage(e)}>
          <div>
            <label htmlFor="workouts-number">Workouts Number</label>
            <br />
            <input
              type="number"
              id="workouts-number"
              onChange={(e) => setWorkoutsNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="total-cost">Total Cost</label>
            <br />
            <input
              type="number"
              id="total-cost"
              onChange={(e) => setTotalCost(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="paid-amount">Paid Amount</label>
            <br />
            <input
              type="number"
              id="paid-amount"
              onChange={(e) => setPaidAmount(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="caloric-intake">Caloric Intake</label>
            <br />
            <input
              type="number"
              id="caloric-intake"
              onChange={(e) => setCaloricIntake(e.target.value)}
              required
            />
          </div>

          <div>
            {/* disabled={adding} TODO implement the change*/}
            <button type="submit" disabled={adding}>
              Add
            </button>
          </div>
        </form>
      </div>

      {/* //Add a Package--------------------------------------------------------------------------------------- */}
    </div>
  );
}

export default Client;

// { "numberOfWorkouts":10,
//  "totalCost":100,
// "paidAmount":20,
//  "caloricIntake":2500 }

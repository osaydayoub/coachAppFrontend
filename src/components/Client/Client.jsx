import React, { useState } from "react";
import "./Client.css";
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";
import { getFullDate } from "../../utils/helpers.js";
import AddPackage from "../AddPackage/AddPackage.jsx";
import AddWorkout from "../AddWorkout/AddWorkout.jsx";

function Client({ client, index }) {
  const [moreInfo, setMoreInfo] = useState(false);
  const [addPackageDisplay, setAddPackageDisplay] = useState(false);
  const [addWorkoutDisplay, setAddWorkoutDisplay] = useState(false);

  return (
    <div className="client-container">
      <div className="basic-data">
        <div>{`Name: ${client.name}`}</div>
        <div>{`Age: ${client.age}`}</div>
        <div>{`Caloric Intake: ${client.caloricIntake}`}</div>
        <button onClick={() => setAddPackageDisplay(true)}>
          Add a Package
        </button>

        <button onClick={() => setAddWorkoutDisplay(true)}>
          Add a Workout
        </button>
        {!moreInfo && (
          <button onClick={() => setMoreInfo(true)}>
            <MdOutlineExpandMore />
          </button>
        )}
        {moreInfo && (
          <button onClick={() => setMoreInfo(false)}>
            <MdExpandLess />
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
          {/* <button onClick={() => setMoreInfo(false)}>
            <MdExpandLess />
          </button> */}
        </div>
      )}
      <div className="add-container">
        {/* //Add a Package--------------------------------------------------------------------------------------- */}
        {addPackageDisplay && <AddPackage client={client} packageDisplay={setAddPackageDisplay} />}
        {/* //Add a Workout--------------------------------------------------------------------------------------- */}
        {addWorkoutDisplay && <AddWorkout client={client} workoutDisplay={setAddWorkoutDisplay} />}
      </div>
    </div>
  );
}

export default Client;

// { "numberOfWorkouts":10,
//  "totalCost":100,
// "paidAmount":20,
//  "caloricIntake":2500 }

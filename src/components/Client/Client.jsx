import React, { useState } from "react";
import "./Client.css";
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";
function Client({ client, index }) {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <div className="client-container">
      <div className="basic-data">
        <div>{`Name: ${client.name}`}</div>
        <div>{`Age: ${client.age}`}</div>
        <div>{`Caloric intake: ${client.caloricIntake}`}</div>
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
          
          <div>{`Email: ${client.email}`}</div>
          <div>{`Workouts Number: ${client.numberOfWorkouts}`}</div>
          <div>{`Total Cost: ${client.totalCost}`}</div>
          <div>{`Paid Amount: ${client.paidAmount}`}</div>
          <button onClick={() => setMoreInfo(false)}>
            <MdExpandLess />
          </button>
        </div>
      )}
    </div>
  );
}

export default Client;


// numberOfWorkouts
// 10
// totalCost
// 100
// paidAmount
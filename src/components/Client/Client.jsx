import React from "react";
import "./Client.css";
import { MdOutlineExpandMore } from "react-icons/md";
function Client({ client,index}) {
  return (
    <div className="client-container">
        <div>{`Name: ${client.name}`}</div>
        <div>{`Workouts Number: ${client.numberOfWorkouts}`}</div>
        <div>{`Caloric intake: ${client.caloricIntake}`}</div>
        
        
      <button>Add a Package</button>
      <button>Add a Workout</button>
      <button><MdOutlineExpandMore/></button>

      

    </div>
  );
}

export default Client;

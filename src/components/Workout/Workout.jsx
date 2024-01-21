import React from "react";
import "./Workout.css"
import { getFullDate, getTime } from "../../utils/helpers.js";
function Workout({ workout, isAdmin ,index}) {
  return (
    <div className={(index%2===0)?"workout-1 workout-container":"workout-2 workout-container"}>
      {isAdmin && <div>{`Exercise:${workout.exercise}`} </div>}
      <div>{`Exercise:${workout.exercise}`}</div>
      <div>{`Date:${getFullDate(new Date(workout.date))}`}</div>
      <div>{`Time:${getTime(new Date(workout.date))}`}</div>
    </div>
  );
}

export default Workout;

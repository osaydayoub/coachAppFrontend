import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TimetablePage.css";
import { useAuth } from "../../context/AuthContext.jsx";
import { getFullDate, getTime } from "../../utils/helpers.js";
function TimetablePage() {
  const [value, onchange] = useState(new Date());
  const { currentUser, isLoggedIn } = useAuth();
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    if (!currentUser.isAdmin) {
      //TODO get all work outs in week form a given date
      //for now i will get all of them !
      setWorkouts(currentUser.client.workouts);
    } else {
    }
  }, []);

  return (
    <div className="TimetablePage page">
      <div className="workouts-container">
        {!currentUser.isAdmin && <h3>Workouts in the upcoming 7 days</h3>}
        {!currentUser.isAdmin && workouts && (
          <>
            {workouts.map((workout, index) => {
              return (
                <h3 key={index}>{`Exercise:${
                  workout.exercise
                } Date:${getFullDate(new Date(workout.date))} Time:${getTime(
                  new Date(workout.date)
                )}`}</h3>
              );
            })}
          </>
        )}
        {currentUser.isAdmin && <h3>Today's Workouts</h3>}
      </div>

      <div className="calendar-message-container">
        <Calendar value={value} onChange={onchange} />
        <div className="message-container">
          <h3>{getFullDate(value)}</h3>
        </div>
      </div>
    </div>
  );
}

export default TimetablePage;

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TimetablePage.css";
import { useAuth } from "../../context/AuthContext.jsx";
import {
  getFullDate,
  dateIsWithinSevenDays,
  isSameDay,
} from "../../utils/helpers.js";
import Workout from "../../components/Workout/Workout.jsx";
function TimetablePage() {
  const [value, onchange] = useState(new Date());
  const { currentUser, isLoggedIn } = useAuth();
  const [workouts, setWorkouts] = useState(null);
  const [highlightedDates, setHighlightedDates] = useState(null);
  const [workoutWithinSevenDays, setWorkoutWithinSevenDays] = useState(null);
  useEffect(() => {
    if (!currentUser.isAdmin) {
      //TODO get all work outs in week form a given date
      //for now i will get all of them !
      const array = currentUser.client.workouts;
      const highlightArray = [];
      array.forEach((element) => {
        highlightArray.push(new Date(element.date));
      });
      console.log(highlightArray);
      setHighlightedDates(highlightArray);
      const currentUserWorkouts = currentUser.client.workouts;
      setWorkouts(currentUserWorkouts);

      const res = currentUserWorkouts.filter((workout) => {
        return dateIsWithinSevenDays(workout.date);
      });
      console.log(res);

      setWorkoutWithinSevenDays(res);
    } else {
    }
  }, []);

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const isHighlighted = highlightedDates?.some((highlightedDate) =>
        isSameDay(date, highlightedDate)
      );

      return isHighlighted ? <div className="highlighted-date"></div> : null;
    }
  };

  return (
    <div className="TimetablePage page">
      <div className="workouts-container">
        {!currentUser.isAdmin && <h3>Workouts in the upcoming 7 days</h3>}
        {!currentUser.isAdmin && workouts && (
          <>
            {workoutWithinSevenDays.map((workout, index) => {
              return (
                <Workout
                  key={index}
                  workout={workout}
                  isAdmin={currentUser.isAdmin}
                  index={index}
                />
              );
            })}
          </>
        )}
        {currentUser.isAdmin && <h3>Today's Workouts</h3>}
      </div>

      <div className="calendar-message-container">
        <Calendar value={value} onChange={onchange} tileContent={tileContent} />
        <div className="message-container">
          {/*To do find the workout in date=value*/}
          <h3>{getFullDate(value)}</h3>
        </div>
      </div>
    </div>
  );
}

export default TimetablePage;

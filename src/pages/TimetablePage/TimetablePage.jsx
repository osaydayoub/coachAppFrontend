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
  const { currentUser } = useAuth();
  //may be no ned for that
  const [workouts, setWorkouts] = useState(null);
  // const [workoutsForOneDay, setWorkoutsForOneDay] = useState(null);
  const [highlightedDates, setHighlightedDates] = useState(null);
  // const [workoutWithinSevenDays, setWorkoutWithinSevenDays] = useState(null);
  const [workoutsToDisply, setWorkoutsToDisply] = useState(null);
  useEffect(() => {
    if (!currentUser.isAdmin) {
      const currentUserWorkouts = currentUser.client.workouts;

      const highlightArray = [];
      currentUserWorkouts.forEach((element) => {
        highlightArray.push(new Date(element.date));
      });
      const res = currentUserWorkouts.filter((workout) => {
        return dateIsWithinSevenDays(workout.date);
      });
      setWorkouts(currentUserWorkouts);
      setHighlightedDates(highlightArray);
      // setWorkoutWithinSevenDays(res);
      setWorkoutsToDisply(res);
    } else {
      // const res = currentUserWorkouts.filter((workout) => {
      //   return dateIsWithinSevenDays(workout.date);
      // });
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

  const getWorkout = (date) => {
    const res = workouts?.find((workout) => {
      return isSameDay(new Date(date), new Date(workout.date));
    });
    return res;
  };

  return (
    <div className="TimetablePage page">
      <div className="workouts-container">
        {!currentUser.isAdmin && <h3>Workouts in the upcoming 7 days</h3>}
        {currentUser.isAdmin && <h3>Today's Workouts</h3>}
        {!currentUser.isAdmin && workouts && (
          <>
            {workoutsToDisply.map((workout, index) => {
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
        
      </div>

      {!currentUser.isAdmin && (
        <div className="calendar-message-container">
          <Calendar
            value={value}
            onChange={onchange}
            tileContent={tileContent}
          />
          <div className="message-container">
            <h3>{getFullDate(value)}</h3>
            {getWorkout(new Date(value)) && (
              <Workout
                workout={getWorkout(new Date(value))}
                isAdmin={currentUser.isAdmin}
                index={1}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TimetablePage;

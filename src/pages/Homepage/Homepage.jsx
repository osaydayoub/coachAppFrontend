import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Homepage.css";
import { useData } from "../../context/DataContext.jsx";
import { isSameDay } from "../../utils/helpers.js";
function Homepage() {
  const { currentUser, isLoggedIn } = useAuth();
  const { currentClient } = useData();
  const [dailyTracking, setDailyTracking] = useState(null);
  useState(() => {
    if (currentClient != null) {
      let track = currentClient.dailyTracking.find((track) => {
        return isSameDay(new Date(track.date), new Date());
      });
      if (track === undefined) {
        console.log("stil no data");
        const t = {
          date: new Date(),
          calories: 0,
          waterAmount: 0,
          sleepHours: 0,
        };
        track = t;
      }
      setDailyTracking(track);
    }
  }, []);

  return (
    <div className="Homepage page">
      <h2>{`Hello ${currentUser.name} !`}</h2>
      {dailyTracking && (
        <p>{`Your caloric intake is currently at ${currentClient.caloricIntake}
      , and you have consumed ${dailyTracking.calories} calories so far.`}</p>
      )}
      {!currentUser.isAdmin && (
        <div className="homepage-message-container">
          <p className="daily-message-container">
            Don't forget to log your calorie intake in your Daily Tracking.
            Whether you're maintaining, gaining, or losing, keeping an eye on
            your calories helps you stay on track with your health and fitness
            goals.
          </p>

          {dailyTracking && (
            <div className="progress-container">
              <div className="progress">
                <CircularProgressbar
                  value={
                    Math.floor((dailyTracking.calories / currentClient.caloricIntake)* 100)
                  }
                  text={`${
                    Math.floor((dailyTracking.calories / currentClient.caloricIntake)* 100)
                  }%`}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Homepage;

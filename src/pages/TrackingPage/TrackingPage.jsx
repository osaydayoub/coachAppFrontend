import React from "react";
import "./TrackingPage.css";
import { useAuth } from "../../context/AuthContext.jsx";
import { useData } from "../../context/DataContext.jsx";
import DailyTracking from "../../components/DailyTracking/DailyTracking";

function TrackingPage() {
  const { currentUser } = useAuth();
  const { workoutsData, setWorkoutsData, getWorkouts } = useData();
  return (
    <div className="TrackingPage page">
      <div className="add-track-container">
        <h2>Daily Tracking</h2>
        <p className="daily-message-container">
          Please take a moment to add or update your Daily Tracking to keep a
          record of your progress and maintain a comprehensive overview of your
          daily activities and goals.
        </p>

        <DailyTracking client={currentUser.client} />
      </div>
    </div>
  );
}

export default TrackingPage;

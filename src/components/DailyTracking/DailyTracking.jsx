import React, { useEffect, useRef, useState } from "react";
import { isSameDay } from "../../utils/helpers.js";
import "./DailyTracking.css";
import { useData } from "../../context/DataContext.jsx";

function DailyTracking() {
  const [adding, setAdding] = useState(false);
  const [calories, setCalories] = useState(0);
  const [waterAmount, setWaterAmount] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [dailyTracking, setDailyTracking] = useState(null);
  const { currentClient, addDailyTracking, getCurrentClient } = useData();
  const inputRef = useRef(null);
  // const [client, setClient] = useState(currentClient);

  //for style use!
  const [addCalories, setAddCalories] = useState(false);
  const [addWaterAmount, setAddWaterAmount] = useState(false);
  const [addSleepHours, setAddSleepHours] = useState(false);

  useState(() => {
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
  }, []);

  // useState(() => {
  //   const track = currentClient.dailyTracking.find((track) => {
  //     return isSameDay(new Date(track.date), new Date());
  //   });
  //   setDailyTracking(track);
  // }, [currentClient]);

  const handleUpdateDailyTracking = async (e) => {
    e.preventDefault();
    console.log("handleUpdateDailyTracking");
    try {
      setAdding(true);
      const newTrack = {
        date: dailyTracking.date,
        calories: dailyTracking.calories,
        waterAmount: dailyTracking.waterAmount,
        sleepHours: dailyTracking.sleepHours,
      };
      const updatednewTrack = {
        date: dailyTracking.date,
        calories: Number(dailyTracking.calories) + Number(calories),
        waterAmount: Number(dailyTracking.waterAmount) + Number(waterAmount),
        sleepHours: Number(dailyTracking.sleepHours) + Number(sleepHours),
      };
      await addDailyTracking(currentClient._id, updatednewTrack);
      const resTrack = await getCurrentClient(currentClient._id);
      const track = resTrack.dailyTracking.find((track) => {
        return isSameDay(new Date(track.date), new Date());
      });
      setDailyTracking(track);
    } catch (error) {
      console.log(error);
      console.log("error in handleDailyTracking");
    }
    setAdding(false);
    // setCalories(0);
    // setSleepHours(0);
    // setWaterAmount(0);
  };
  useEffect(() => {
    if (addCalories) {
      inputRef.current.focus();
    }
  }, [addCalories]);

  return (
    <div className="daily-tracking-container">
      <h3>add here!</h3>
      {dailyTracking && (
        <div className="change-container">
          <div className="change-box">
            <p>{`Calories: ${dailyTracking.calories}`}</p>
            <button
              onClick={() => {
                setAddCalories(true);
              }}
            >
              +
            </button>
            {addCalories && (
              <input
                ref={inputRef}
                type="number"
                id="calories-input"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
              />
            )}
          </div>

          <div className="change-box">
            <p>{`Water Amount: ${dailyTracking.waterAmount}`}</p>
            <button onClick={() => setAddWaterAmount(true)}>+</button>
            {addWaterAmount && (
              <input
                type="number"
                id="water-input"
                value={waterAmount}
                onChange={(e) => setWaterAmount(e.target.value)}
                required
              />
            )}
          </div>

          <div className="change-box">
            <p>{`Sleep Hours: ${dailyTracking.sleepHours}`}</p>
            <button onClick={() => setAddSleepHours(true)}>+</button>
            {addSleepHours && (
              <input
                type="number"
                id="sleep-hours"
                value={sleepHours}
                onChange={(e) => setSleepHours(e.target.value)}
                required
              />
            )}
          </div>
          <button
            className="update-btn"
            onClick={handleUpdateDailyTracking}
            disabled={adding}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
}

export default DailyTracking;

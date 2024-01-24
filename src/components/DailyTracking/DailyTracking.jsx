import React, { useState } from "react";
import { isSameDay } from "../../utils/helpers.js";
import "./DailyTracking.css";
import { useData } from "../../context/DataContext.jsx";

function DailyTracking() {
  const [adding, setAdding] = useState(false);
  const [calories, setCalories] = useState(0);
  const [waterAmount, setWaterAmount] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [dailyTracking, setDailyTracking] = useState(null);
  const { currentClient, addDailyTracking,getCurrentClient } = useData();
  // const [client, setClient] = useState(currentClient);

  //for style use!
  const [addCalories, setAddCalories] = useState(false);

  useState(() => {
    const track = currentClient.dailyTracking.find((track) => {
      return isSameDay(new Date(track.date), new Date());
    });
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
      // console.log(typeof calories);
      // console.log(newTrack);
      // console.log(updatednewTrack);
      // console.log(currentClient);
      await addDailyTracking(currentClient._id, updatednewTrack);
      const resTrack=await getCurrentClient(currentClient._id);
      const track = resTrack.dailyTracking.find((track) => {
        return isSameDay(new Date(track.date), new Date());
      });
      setDailyTracking(track);
      // console.log(resTrack);
    } catch (error) {
      console.log(error);
      console.log("error in handleDailyTracking");
    }
    setAdding(false);
    // console.log(currentClient);
    // setClient(currentClient);

  };

  return (
    <div className="daily-tracking-container">
      <h3>add here!</h3>
      {dailyTracking && (
        <div className="change-container">
          <div className="change-box">
            <p>{`Calories: ${dailyTracking.calories}`}</p>
            <button onClick={() => setAddCalories(true)}>+</button>
            {addCalories && (
              <input
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
            <button>+</button>
            <input
              type="number"
              id="water-input"
              value={waterAmount}
              onChange={(e) => setWaterAmount(e.target.value)}
              required
            />
          </div>

          <div className="change-box">
            <p>{`Sleep Hours: ${dailyTracking.sleepHours}`}</p>
            <button>+</button>
            <input
              type="number"
              id="sleep-hours"
              value={sleepHours}
              onChange={(e) => setSleepHours(e.target.value)}
              required
            />
          </div>
          <button onClick={handleUpdateDailyTracking} disabled={adding}>
            Update
          </button>
        </div>
      )}

      {/* <div>
        <label htmlFor="calories">{`Calories: `}</label>
        <input
          type="number"
          id="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="water-amount">{`Water Amount: `}</label>
        <input
          type="number"
          id="water-amount"
          onChange={(e) => setWaterAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="sleep-hours">{`Sleep Hours: `}</label>
        <input
          type="number"
          id="sleep-hours"
          onChange={(e) => setSleepHours(e.target.value)}
          required
        />
      </div>

      <div>
        {/* disabled={adding} TODO implement the change*/}
    </div>
  );
}

export default DailyTracking;

// {
//   "date":"2024-01-23",
//   "calories":15,
//   "waterAmount":2.5,
//   "sleepHours":7
//   }

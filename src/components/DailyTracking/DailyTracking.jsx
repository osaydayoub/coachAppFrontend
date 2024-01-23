import React, { useState } from "react";


function DailyTracking({client}) {
  const [adding, setAdding] = useState(false);
  const [calories, setCalories] = useState(0);
  const [waterAmount,setWaterAmount]=useState(0);
  const [sleepHours,setSleepHours]=useState(0);


  const handleDailyTracking = async (e) => {
    e.preventDefault();
    console.log("handleDailyTracking");
    try {
      setAdding(true);

    } catch (error) {
      console.log("error in handleDailyTracking");
    }
    setAdding(false);
  };

  return <div className="daily-tracking-container">
    <h1>addd here!</h1>
    <form onSubmit={(e) => handleDailyTracking(e)}>

        <div>
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
          <button type="submit" disabled={adding}>
            +
          </button>
        </div>
      </form>
  </div>;
}

export default DailyTracking;

// {
//   "date":"2024-01-23",
//   "calories":15,
//   "waterAmount":2.5,
//   "sleepHours":7
//   }


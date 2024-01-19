import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function TimetablePage() {
  const [value, onchange] = useState(new Date());
  console.log(value);
  return (
    <div className="page">
      <h1>TimetablePage</h1>
      <Calendar 
      value={value} onChange={onchange}/>
      <h3>{value.getDate()}</h3>
    </div>
  );
}

export default TimetablePage;

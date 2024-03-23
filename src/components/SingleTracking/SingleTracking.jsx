import React, { useEffect, useRef, useState } from "react";
import "./SingleTracking.css";
function SingleTracking({
  trackingType,
  dailyTracking,
  trackingState,
  trackingStateHandler,
}) {
  const [adding, setAdding] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (adding) {
      inputRef.current.focus();
    }
  }, [adding]);
  return (
    <div className="tracking-box">
      <p>{`${trackingType}: ${dailyTracking}`}</p>
      <button onClick={() => setAdding(true)}>+</button>
      {adding && (
        <input
          ref={inputRef}
          type="number"
          id={trackingType}
          value={trackingState}
          onChange={(e) => trackingStateHandler(e.target.value)}
          required
        />
      )}
    </div>
  );
}

export default SingleTracking;

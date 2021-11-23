/* eslint-disable no-restricted-globals */
import Countdown from "react-countdown";
import React, { useState, useEffect } from "react";

export const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    return <span className="text-secondary font-400">0:00</span>;
  }
  if (seconds < 10) {
    return `0:0${seconds}`;
  }
  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
};

const getLocalStorageValue = (s) => localStorage.getItem(s);

const countdown = () => {
  const [data, setData] = useState({ date: Date.now(), delay: 45000 });
  const wantedDelay = 45000;

  useEffect(() => {
    const savedDate = getLocalStorageValue("end_date");
    if (savedDate != null && !isNaN(savedDate)) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      if (delta > wantedDelay) {
        if (localStorage.getItem("end_date").length > 0)
          localStorage.removeItem("end_date");
      } else {
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);

  return (
    <div>
      <Countdown
        date={data.date + data.delay}
        renderer={renderer}
        onStart={(delta) => {
          if (localStorage.getItem("end_date") == null)
            localStorage.setItem(
              "end_date",
              JSON.stringify(data.date + data.delay)
            );
        }}
        onComplete={() => {
          if (localStorage.getItem("end_date") != null)
            localStorage.removeItem("end_date");
        }}
      />
    </div>
  );
};

export default countdown;

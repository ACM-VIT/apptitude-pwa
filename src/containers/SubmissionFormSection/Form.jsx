import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CountDown from "../../components/CountDown/CountDown";

// Styles
import "./Form.css";

const submissionForm = () => {
  const [timer, setTimer] = useState("green");
  useEffect(() => {
    const today = new Date();
    const date = `${today.getDate()}-${
      today.getMonth() + 1
    } ${today.getHours()}:${today.getMinutes()}`;
    if (date === "23-11 19:5") {
      setTimer("red");
    } else if (date === "25-11 10:30") {
      setTimer("yellow");
    }
  });

  return (
    <div className="container p-5 h-screen flex flex-col items-center justify-center xs:flex xs:flex-col xs:items-center xs:justify-center">
      <div>
        <span className="text-white text-4xl">Submission</span>
        <span
          className={`mt-2 text-${timer}-500 text-sm float-right align-bottom`}
        >
          <CountDown date="2021-11-25T12:00:00" />
        </span>
      </div>
      <div className="h-4/6">
        <div>
          <div className="py-5">
            <div className="text-white">Google Drive Link</div>
            <input
              id="driveLink"
              className="outline-none text-white bg-main w-96 xs:w-90 xxs:w-65 h-10 px-2 rounded-md border border-yellow-400"
              type="text"
            />
          </div>
          <div className="submission-form__body__form__input-group py-5">
            <div className="text-white">Github Repo Link</div>
            <input
              id="repoLink"
              className="outline-none text-white bg-main w-96 xs:w-90 xxs:w-65 h-10 px-2 rounded-md border border-yellow-400"
            />
          </div>
        </div>
      </div>
      <div className="submission-form__footer">
        <div className="submission-form__footer__button">
          <button
            type="submit"
            className="bg-yellow-400 font-700 text-lg w-96 h-10 xxs:w-full rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default submissionForm;

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CountDown from "../../components/CountDown/CountDown";

// Styles
import "./Form.css";

const secret = sessionStorage.getItem("AM");
const submissionForm = () => {
  const [timer, setTimer] = useState("green");

  // store github URL in state
  const [githubURL, setGithubURL] = useState("");

  // store google drive URL
  const [googleDriveURL, setGoogleDriveURL] = useState("");

  // to see if form is submitted or not
  const [isSubmitted, setIsSubmitted] = useState(false);

  // regex to check if URL is of github.com
  const checkGithubURL = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?github\.com\/.+/;
    return regex.test(url);
  };

  useEffect(() => {
    // color code the timer
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

  const submitForm = () => {
    /**
     * make the request to backend to submit the github and video
     */
    axios
      .post(
        "https://apptitude2021.herokuapp.com/submit/",
        {
          github: githubURL,
          video: googleDriveURL,
        },
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secret}`,
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

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
              value={googleDriveURL}
              onChange={(e) => setGoogleDriveURL(e.target.value)}
              className="outline-none text-white bg-main w-96 xs:w-90 xxs:w-65 h-10 px-2 rounded-md border border-yellow-400"
              type="text"
            />
          </div>
          <div className="submission-form__body__form__input-group py-5">
            <div className="text-white">Github Repo Link</div>
            <input
              value={githubURL}
              onChange={(e) => setGithubURL(e.target.value)}
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
            onClick={() => submitForm()}
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

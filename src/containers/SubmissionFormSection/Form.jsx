import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CountDown from "../../components/CountDown/CountDown";

// Styles
import "./Form.css";
import Navbar from "../../components/Navbar/Navbar";
import { set } from "@firebase/database";

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

  // regex to check if URL is of gitlab.com
  const checkGitlabURL = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?gitlab\.com\/.+/;
    return regex.test(url);
  };

  // regex to check if URL is of google drive
  const checkGoogleDriveURL = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?drive\.google\.com\/.+/;
    return regex.test(url);
  };

  const [errorMessageG, setErrorMessageG] = useState("");
  const [errorMessageD, setErrorMessageD] = useState("");

  const validate = (value, link) => {
    if (link === "github") {
      if (checkGithubURL(value) || checkGitlabURL(value)) {
        setGithubURL(value);
        setErrorMessageG("");
      } else {
        setErrorMessageG("Is Invalid URL");
      }
    } else if (checkGoogleDriveURL(value)) {
      setGoogleDriveURL(value);
      setErrorMessageD("");
    } else {
      setErrorMessageD("Is Invalid URL");
    }
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
    // check if both URLs are valid
    if (githubURL && googleDriveURL) {
      /**
       * make the request to backend to submit the github and video
       */
      axios
        .put(
          "https://apptitude2021.herokuapp.com/submit",
          {
            github: githubURL,
            video: googleDriveURL,
          },
          {
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${secret}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
      setIsSubmitted(true);
    } else {
      setErrorMessageG("Please enter a valid URL");
      setErrorMessageD("Please enter a valid URL");
    }
  };

  return (
    <div className=" pt-28 mx-5 h-screen flex flex-col items-center justify-start">
      <div className="flex justify-between w-full max-w-96">
        <span className="text-white font-700 text-3xl">Submission</span>
        <span
          className={`mt-2 text-${timer}-500 text-sm flex justify-center items-center float-right align-bottom`}
        >
          <CountDown date="2021-11-28T17:00:00" />
        </span>
      </div>
      <div className="mt-5 flex w-full flex-col justify-between h-full">
        <div>
          <div className="py-5">
            <div className="text-white mb-2">Google Drive Link</div>
            <input
              type="text"
              onChange={(e) => validate(e.target.value, "googledrive")}
              id="driveLink"
              className="outline-none text-white bg-main w-full
              max-w-96 h-10 px-8 rounded-md border border-yellow-400 flex
              justify-center items-center center align-top "
            />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {errorMessageD}
            </span>
          </div>
          <div className="submission-form__body__form__input-group py-5">
            <div className="text-white mb-2">Github Repo Link</div>
            <input
              type="text"
              onChange={(e) => validate(e.target.value, "github")}
              id="repoLink"
              className="outline-none text-white bg-main w-full
              max-w-96 h-10 px-8 rounded-md border border-yellow-400 flex
              justify-center items-center center align-top "
            />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {errorMessageG}
            </span>
          </div>
        </div>
        <div
          onClick={() => submitForm()}
          className="bg-yellow-400 font-700 text-lg w-full h-14 flex justify-center items-center rounded-md mb-32"
        >
          Submit
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default submissionForm;

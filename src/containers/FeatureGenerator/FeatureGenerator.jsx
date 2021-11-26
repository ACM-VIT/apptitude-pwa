/* eslint-disable react/function-component-definition */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import { useSnackbar } from "notistack";
import Navbar from "../../components/Navbar/Navbar";
import Tab from "../../components/Tab/Tab";
import "./Feature.css";

const secret = sessionStorage.getItem("AM");

const FeatureGenerator = () => {
  // check if generate fixtures are called
  const [generateFixtures, setGenerateFixtures] = useState(false);
  // const [show, setShow] = useState(false);
  // save easy, medium and hard feature in state
  const [easy, setEasy] = useState("");
  const [medium, setMedium] = useState("");
  const [hard, setHard] = useState("");
  const [loading, setloading] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // store number of times generate fixtures is called
  const [generateFixturesCount, setGenerateFixturesCount] = useState(0);

  const [disable, setDisable] = useState(false);

  const [errors, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://provider.acmvit.in/team/features`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${secret}`,
        },
      })
      .then((res) => {
        if (res.data.data.features) {
          setEasy(res.data.data.features.easy);
          setMedium(res.data.data.features.medium);
          setHard(res.data.data.features.hard);
          setGenerateFixtures(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const showErrorSnack = (message) => {
    enqueueSnackbar(message, {
      variant: "error",
      preventDuplicate: true,
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  const loadProblemStatements = () => {
    setloading(true);
    axios
      .put(
        `https://provider.acmvit.in/feats/generate`,
        {},
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${secret}`,
          },
        }
      )

      .then((res) => {
        /**
         * "status": "Success",
         * "data": {
         *   "features": {
         *     "easy": "string",
         *     "medium": "string",
         *     "hard": "string"
         *   },
         *   "featGenCnt": 0
         * }
         */
        if (res.data.status === "Success") {
          const { data } = res.data;
          console.log(res.data);
          setEasy(data.features.easy);
          setMedium(data.features.medium);
          setHard(data.features.hard);
          setGenerateFixturesCount(data.featGenCnt);
          setGenerateFixtures(generateFixtures + 1);
          // setShow(true);
          /**
           * use easy, medium, hard to display the problem statements
           */

          if (generateFixtures === 3) {
            // chances exhausted
            // @frontend come here
          }
        }
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.detail);
        showErrorSnack(error.response.data.detail);
        setDisable(true);
        // show error / warning
        // @frontend

        setloading(false);
      });
  };
  return (
    <LoadingOverlay active={loading} spinner text="Generating feature!">
      <div className="pt-24 h-screen">
        <div className="flex flex-col w-full px-2 h-full pb-28">
          <div className="flex flex-row justify-between text-sm se:text-base px-4">
            <Link to="/problems">
              <div className="text-white font-700 opacity-50 hover:opacity-100">
                Problem statements
              </div>
            </Link>
            <Link to="/features">
              <div className="text-white font-700 border-b border-yellow-400">
                Feature generator
              </div>
            </Link>
          </div>

          <div className="flex flex-col justify-between items-center w-full h-full">
            {generateFixtures === false ? (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xs xs:text-base sm:text-lg text-white opacity-50 px-5 w-full">
                Click on generate features to generate features, solving this
                will be added as bonus points
              </div>
            ) : (
              <article id="problems" className="flex flex-col w-full pt-8 pb-4">
                <div className="tabscontainer">
                  <Tab title={easy} />
                  <Tab title={medium} />
                  <Tab title={hard} />
                </div>
              </article>
            )}

            <button
              type="submit"
              onClick={() => {
                loadProblemStatements();
              }}
              style={{ width: "92vw" }}
              className="fixed bottom-28 flex items-center justify-center h-14 rounded-md bg-primary cursor-pointer text-black font-400 text-center "
            >
              Generate features
            </button>
          </div>
        </div>
        <Navbar />
      </div>
    </LoadingOverlay>
  );
};

export default FeatureGenerator;

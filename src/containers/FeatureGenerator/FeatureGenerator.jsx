import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Tab from "../../components/Tab/Tab";
import "./Feature.css";
const secret = sessionStorage.getItem("AM");
const FeatureGenerator = function () {
  // check if generate fixtures are called
  const [generateFixtures, setGenerateFixtures] = useState(true);
  // const [show, setShow] = useState(false);
  // save easy, medium and hard feature in state
  const [easy, setEasy] = useState("");
  const [medium, setMedium] = useState("");
  const [hard, setHard] = useState("");

  // store number of times generate fixtures is called
  const [generateFixturesCount, setGenerateFixturesCount] = useState(0);

  const [disable, setDisable] = useState(false);

  const [errors, setError] = useState("");

  const loadProblemStatements = () => {
    axios
      .put(
        `https://apptitude2021.herokuapp.com/feats/generate`,
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
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.detail);
        setDisable(true);
        // show error / warning
        // @frontend
      });
  };
  return (
    <div className="pt-24 h-screen">
      <div className="flex flex-col w-full px-2">
        <div className="flex flex-row justify-between text-base xs:text-lg sm:text-xl px-4">
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

        {generateFixtures === false ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xs xs:text-base sm:text-lg text-white opacity-50 px-5 w-full">
            Click on generate features to generate features, solving this will
            be added as bonus points
          </div>
        ) : (
          <article id="problems" className="flex flex-col w-full pt-8 pb-4">
            <div className="tabscontainer">
              <Tab title="Esay hello hei asashd as asdsd sdjs asdnsds defefef" />
              <Tab title="Esay hello hei asashd as asdsd sdjs asdnsds defefef" />
              <Tab title="Esay hello hei asashd as asdsd sdjs asdnsds defefef" />
            </div>
          </article>
        )}
        {disable ? (
          <div className="flex align-middle items-center justify-center text-red-400 font-400 mt-2  text-xs xs:text-base sm:text-lg">
            {errors}
          </div>
        ) : (
          <button
            type="submit"
            onClick={() => {
              loadProblemStatements();
            }}
            className=" flex items-center w-full justify-center h-14 rounded-md bg-primary cursor-pointer text-black font-400 text-center "
          >
            Generate features
          </button>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default FeatureGenerator;

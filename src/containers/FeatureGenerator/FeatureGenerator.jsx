import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
const secret = sessionStorage.getItem("AM");

const FeatureGenerator = function () {
  // check if generate fixtures are called
  const [generateFixtures, setGenerateFixtures] = useState(false);

  // save easy, medium and hard feature in state
  const [easy, setEasy] = useState([]);
  const [medium, setMedium] = useState([]);
  const [hard, setHard] = useState([]);

  // store number of times generate fixtures is called
  const [generateFixturesCount, setGenerateFixturesCount] = useState(0);

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
        if (res.status === "success") {
          const { data } = res;
          setEasy(data.features.easy);
          setMedium(data.features.medium);
          setHard(data.features.hard);
          setGenerateFixturesCount(data.featGenCnt);
          setGenerateFixtures(generateFixtures + 1);

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
        console.error(error.response.data.detail);
        // show error / warning
        // @frontend
      });
  };
  return (
    <div className="mt-24">
      <div className="flex flex-col w-full px-7">
        <div className="flex flex-row justify-between text-base xs:text-lg sm:text-xl">
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
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xs xs:text-base sm:text-lg text-white opacity-50 px-5 w-full">
        Click on generate features to generate features, solving this will be
        added as bonus points
      </div>
      <button
        type="submit"
        onClick={() => {
          loadProblemStatements();
        }}
        className="absolute flex items-center justify-center bottom-32 h-14 px-2 rounded-md bg-primary cursor-pointer text-black font-400 left-2.5 right-2.5"
      >
        Generate features
      </button>
      <Navbar />
    </div>
  );
};

export default FeatureGenerator;

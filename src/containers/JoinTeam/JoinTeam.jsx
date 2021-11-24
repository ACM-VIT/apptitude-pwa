/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";

const JoinTeam = function () {
  const [join, getName] = useState("");
  const [error, setError] = useState("");
  const code = [
    {
      code: 827984324,
    },
    {
      code: 243243242,
    },
    {
      code: 324324,
    },
  ];
  function joinCode() {
    if (join.length > 0) {
      for (const i in code) {
        if (join === code[i].code.toString()) {
          setError("");
          return;
        }
      }
      setError("Team code does not exist");
    } else {
      setError("Please enter a code");
    }
  }
  return (
    <>
      <Link to="/createteam">
        <img
          src={arrow}
          alt="arrow"
          className="absolute w-6 h-8 top-10 left-4"
        />
      </Link>
      <div className="mt-28 mx-3 sm:mx-0">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between ">
            <div className="text-white font-700 text-2xl">Join Team</div>
            <div className=" text-white font-400 text-1xl pt-1.5 border-b border-yellow-400">
              <Link to="/createteam">Create Team</Link>
            </div>
          </div>
          <div className="text-white font-400 text-sm mt-3 mb-1">
            Enter Team code
          </div>
          <div>
            <input
              value={join}
              className="text-white bg-transparent w-full h-14 px-2 rounded-md border border-yellow-400 focus:outline-none focus:border-yellow-400  "
              onChange={(e) => getName(e.target.value)}
              placeholder="ex. Webtitude"
            />
          </div>
          <div>
            <div className="text-red-400 text-sm font-400 mt-2">{error}</div>
          </div>
        </div>
        <div
          onClick={() => joinCode()}
          className="absolute bottom-20 flex  h-14 px-2 rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center left-2.5 right-2.5"
        >
          Join Team
        </div>
      </div>
    </>
  );
};

export default JoinTeam;

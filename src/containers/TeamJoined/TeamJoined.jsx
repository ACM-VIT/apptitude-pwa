import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";
import ellipse from "../../assets/images/Ellipse1.svg";
import team from "../../assets/images/team.svg";
import "./TeamJoined.css";
import teammember from "../../assets/images/teammember.svg";

const TeamJoined = function () {
  return (
    <div className="mt-24 mx-3 sm:mx-0">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="text-white font-400 text-base">Team</div>
        <div className="text-white font-700 text-4xl mb-px mt-0.5">
          Websneef
        </div>
        <div>
          <div className="text-white font-400 text-sm">Created</div>
        </div>
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute w-96 h-96 top-44 zindexminus"
        />
        <img
          src={teammember}
          alt="team"
          className="absolute w-44 h-32 img top-64 zindexguy"
        />
        <img
          src={team}
          alt="team"
          className="absolute w-64 h-44 img top-72 zindex"
        />
      </div>
      {/* <img
          src={ellipse}
          alt="ellipse"
          className="absolute w-96 h-96 top-48 -left-6"
        /> */}

      <div className="absolute bottom-20 flex  h-14 px-2 rounded-md bg-primary cursor-pointer text-black font-400 items-center justify-center left-2.5 right-2.5">
        Next
      </div>
    </div>
  );
};

export default TeamJoined;

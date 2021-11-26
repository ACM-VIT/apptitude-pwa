import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import arrow from "../../assets/images/arrow.svg";
import ellipse from "../../assets/images/Ellipse1.svg";
import team from "../../assets/images/team.svg";
import "./TeamJoined.css";
import teammember from "../../assets/images/teammember.svg";

const secret = sessionStorage.getItem("AM");
const TeamJoined = function () {
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get("https://provider.acmvit.in/team/", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${secret}`,
        },
      })
      .then((response) => {
        console.log(response.data.data.name);
        setName(response.data.data.name);
      })
      .catch((error) => console.error(error.response.data));
  }, []);
  return (
    <div className="mt-24 mx-3 sm:mx-0">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="text-white font-400 text-base">Team</div>
        <div className="text-white font-700 text-4xl my-1">{name}</div>
        <div>
          <div className="text-white font-400 text-sm">Joined</div>
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
      <Link to="/timeline">
        <div className="absolute bottom-10 flex  h-14 px-2 rounded-md bg-primary cursor-pointer text-black font-400 items-center justify-center left-2.5 right-2.5">
          Next
        </div>
      </Link>
    </div>
  );
};

export default TeamJoined;

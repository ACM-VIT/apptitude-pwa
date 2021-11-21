/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ellipse from "../../assets/images/Ellipse1.svg";
import team from "../../assets/images/team.svg";
import "./TeamCreated.css";
import teammember from "../../assets/images/teammember.svg";
import copy from "../../assets/images/copy.svg";

const TeamCreated = function () {
  const [copySuccess, setCopySuccess] = useState(false);
  // const copyToClipBoard = async (copyMe) => {
  //   try {
  //     await navigator.clipboard.writeText(copyMe);
  //     setCopySuccess("Copied!");
  //     console.log(copyMe);
  //   } catch (err) {
  //     setCopySuccess("Failed to copy!");
  //   }
  // };
  const teamCode = 54353;
  const onCopyText = () => {
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);
  };
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
          className="absolute w-96 h-96 top-32 zindexminus"
        />
        <img
          src={teammember}
          alt="team"
          className="absolute w-44 h-32 img top-56 zindexguy"
        />
        <img
          src={team}
          alt="team"
          className="absolute w-64 h-44 img top-64 zindex"
        />
      </div>
      {/* <img
          src={ellipse}
          alt="ellipse"
          className="absolute w-96 h-96 top-48 -left-6"
        /> */}
      <div className="flex flex-col w-full justify-center items-center">
        <div className="absolute bottom-52 text-white font-400 text-base -mb-1">
          Your Team Code is
        </div>
        <div className="absolute bottom-40 text-white font-700 text-3xl">
          {/* <button
              onClick={() =>
                navigator.clipboard.writeText("Copy this text to clipboard")
              }
            >
              422560
            </button>{" "} */}
          {/* <button onClick={(e) => copyToClipBoard(e.target.innerText)}>
            <div className="flex">
              422560
              <img src={copy} alt="copy" className="ml-2.5" />
            </div>
          </button> */}
          <CopyToClipboard text={teamCode} onCopy={onCopyText}>
            <div className="flex">
              {teamCode}
              <img src={copy} alt="copy" className="ml-2.5" />
            </div>
          </CopyToClipboard>
        </div>
      </div>

      <div className="absolute bottom-20 flex  h-14 px-2 rounded-md bg-primary cursor-pointer text-black font-400 items-center justify-center left-2.5 right-2.5">
        Next
      </div>
    </div>
  );
};

export default TeamCreated;

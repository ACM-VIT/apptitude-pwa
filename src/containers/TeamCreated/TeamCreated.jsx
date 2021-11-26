/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ellipse from "../../assets/images/Ellipse1.svg";
import team from "../../assets/images/team.svg";
import "./TeamCreated.css";
import teammember from "../../assets/images/teammember.svg";
import copy from "../../assets/images/copy.svg";
import { useSnackbar } from 'notistack';
import { logRoles } from "@testing-library/dom";


const secret = sessionStorage.getItem("AM");

const TeamCreated = function () {
  const [copySuccess, setCopySuccess] = useState(false);
  const [name, setName] = useState("");
  const [teamCode, setCode] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  // const copyToClipBoard = async (copyMe) => {
  //   try {
  //     await navigator.clipboard.writeText(copyMe);
  //     setCopySuccess("Copied!");
  //     console.log(copyMe);
  //   } catch (err) {
  //     setCopySuccess("Failed to copy!");
  //   }
  // };

  const showSuccSnack = (message) => {
    enqueueSnackbar(message, {
      variant: 'success',
      preventDuplicate: true,
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
    });
  }

  const showErrorSnack = (message) => {
    enqueueSnackbar(message, {
      variant: 'error',
      preventDuplicate: true,
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
    });
  }

  useEffect(() => {
    axios
      .get("https://apptitude2021.herokuapp.com/team/", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${secret}`,
        },
      })
      .then((response) => {
        localStorage.setItem("tixt", "true");
        const something = response.data;
        console.log(something.data);
        setName(something.data.name);
        setCode(`${something.data.code}`);
      })
      .catch((_) => {
        showErrorSnack("Something went wrong!");
        sessionStorage.removeItem("AM");
        window.location.href = "/";
      });
  }, []);
  const onCopyText = () => {
    showSuccSnack("Your Team Code has been copied!")
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);
  };
  return (
    <div className="xxs:mt-16 xs:mt-24 mx-3 sm:mx-0">

      <div className="flex flex-col w-full justify-center items-center">
        <div className="text-white font-400 text-base">Team</div>
        <div className="text-white font-700 text-4xl my-1">{name}</div>
        <div>
          <div className="text-white font-400 text-sm">Created</div>
        </div>
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute w-96 h-96 top-20 vertical-break-ellipse xs:top-32 zindexminus"
        />
        <img
          src={teammember}
          alt="team"
          className="absolute w-44 h-32 vertical-break-teammember img top-48 xs:top-60 zindexguy"
        />
        <img
          src={team}
          alt="team"
          className="absolute w-64 h-40 vertical-break-team xs:h-60 img top-56 xs:top-64 zindex"
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
        <div className="absolute bottom-40 text-white font-700 text-2xl ml-1">
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
      <Link to="/timeline">
        <div className="absolute bottom-20 flex  h-14 px-2 rounded-md bg-primary cursor-pointer text-black font-400 items-center justify-center left-2.5 right-2.5">
          Next
        </div>
      </Link>
    </div>
  );
};

export default TeamCreated;

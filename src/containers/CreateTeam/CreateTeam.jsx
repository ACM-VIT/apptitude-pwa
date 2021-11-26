/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import arrow from "../../assets/images/arrow.svg";
import { useSnackbar } from 'notistack';

const secret = sessionStorage.getItem("AM");
const CreateTeam = function () {
  const [create, setName] = useState("");
  const [errors, setError] = useState("");
  const { enqueueSnackbar } = useSnackbar();


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

  // const [data, setData] = useState([]);

  function generateCode() {
    // if (create.length > 0) {
    //   for (const i in data) {
    //     if (create === data[i].name) {
    //       setError("Team already exists");
    //       return;
    //     }
    //   }
    //   setError("");
    // } else {
    //   setError("Please enter a team name");
    // }
    axios
      .post(
        "https://apptitude2021.herokuapp.com/team",
        {
          name: create,
        },
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${secret}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.location.href = "/teamcreated";
      })
      .catch((error) => {
        showErrorSnack("Something went wrong in creating your team! Please contact us on discord!")
        console.log(error.response.data.detail[0].msg);
        setError(`${error.response.data.detail[0].msg}`);
      });
  }
  return (
    <>
      <Link to="/jointeam">
        <img
          src={arrow}
          alt="arrow"
          className="absolute w-6 h-8 top-10 left-4"
        />
      </Link>
      <div className="relative h-screen pt-28 mx-10">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between ">
            <div className="text-white font-700 text-2xl">Create Team</div>
            <div className=" text-white font-400 text-1xl pt-1.5 border-b border-yellow-400">
              <Link to="/jointeam">Join Team</Link>
            </div>
          </div>
          <div className="text-white font-400 text-sm mt-3 mb-1">
            Enter Team name
          </div>
          <div>
            <input
              value={create}
              className="text-white bg-transparent w-full h-14 px-2 rounded-md border border-yellow-400 focus:outline-none focus:border-yellow-400 "
              onChange={(e) => setName(e.target.value)}
              placeholder="ex. Webtitude"
            />
          </div>
          <div>
            <div className="text-red-400 text-sm font-400 mt-2">{errors}</div>
          </div>
        </div>

        <div className="xs:flex xs:justify-center xs:items-center sm:flex sm:justify-center sm:items-center">
          <div className="absolute bottom-10 right-0 left-0">
            <div className="xs:flex xs:justify-center xs:items-center sm:flex sm:justify-center sm:items-center">
              <div
                onClick={() => generateCode()}
                className="flex w-96 h-14 xxs:w-full xs:w-80 rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center"
              >
                Create Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTeam;

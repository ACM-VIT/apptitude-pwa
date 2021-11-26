/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import arrow from "../../assets/images/arrow.svg";
import { useSnackbar } from "notistack";
import LoadingOverlay from "react-loading-overlay";

const secret = sessionStorage.getItem("AM");

const JoinTeam = function () {
  const [join, setName] = useState("");
  const [error, setError] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setloading] = useState(false);

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

  // const code = [
  //   {
  //     code: 827984324,
  //   },
  //   {
  //     code: 243243242,
  //   },
  //   {
  //     code: 324324,
  //   },
  // ];
  // useEffect(() => {
  //   axios
  //     .get("https://provider.acmvit.in/team/", {
  //       headers: {
  //         "content-type": "application/json",
  //         // Authorization: `Bearer ${TK}`,
  //       },
  //     })
  //     .then((response) => {
  //       const something = response.data;
  //       setData(something.arr);
  //     })
  //     .catch((error) => console.error(error.response.data));
  // }, []);
  const joinCode = () => {
    // if (join.length > 0) {
    //   for (const i in code) {
    //     if (join === code[i].code.toString()) {
    //       setError("");
    //       return;
    //     }
    //   }
    //   setError("Team code does not exist");
    // } else {
    //   setError("Please enter a code");
    // }

    setloading(true);
    axios
      .put(
        `https://provider.acmvit.in/team/${join}`,
        {},
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${secret}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setloading(false);
        window.location.href = "/teamjoined";
      })
      .catch((err) => {
        showErrorSnack("Something went wrong! Please contact us on discord");
        const message = Array.isArray(err.response.data.detail)
          ? err.response.data.detail[0].msg
          : err.response.data.detail;

        setError(`${message}`);
        setloading(false);
      });
  };
  return (
    <>
      <Link to="/createteam">
        <img
          src={arrow}
          alt="arrow"
          className="absolute w-6 h-8 top-10 left-4"
        />
      </Link>
      <LoadingOverlay active={loading} spinner text="Joining team!">
        <div className="relative h-screen pt-28 mx-10">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between ">
              <div className="text-white font-700 text-2xl">Join Team</div>
              <div className=" text-white font-400 text-1xl pt-1.5 border-b border-yellow-400">
                <Link to="/createteam">Create Team</Link>
              </div>
            </div>
            <div className="text-white font-400 text-sm mt-3 mb-1">
              Enter team code
            </div>
            <div>
              <input
                value={join}
                className="text-white bg-transparent w-full h-14 px-2 rounded-md border border-yellow-400 focus:outline-none focus:border-yellow-400  "
                onChange={(e) => setName(e.target.value)}
                placeholder="ex. 71183111207"
              />
            </div>
            <div>
              <div className="text-red-400 text-sm font-400 mt-2">{error}</div>
            </div>
          </div>
          <div className="xs:flex xs:justify-center xs:items-center sm:flex sm:justify-center sm:items-center">
            <div className="absolute bottom-10 right-0 left-0">
              <div className="xs:flex xs:justify-center xs:items-center sm:flex sm:justify-center sm:items-center">
                <div
                  onClick={() => joinCode()}
                  className="flex w-96 h-14 xxs:w-full xs:w-80 rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center"
                >
                  Join Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default JoinTeam;

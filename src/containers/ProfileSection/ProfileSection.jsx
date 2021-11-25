/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import copyYellow from "../../assets/images/copy-yellow.svg";

const ProfileSection = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const token = sessionStorage.getItem("AM");
  const [data, setData] = useState([]);
  console.log(data);
  const teamCode = 54353;
  const onCopyText = () => {
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);
  };
  useEffect(() => {
    axios
      .get("https://apptitude2021.herokuapp.com/team/", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const something = response.data;
        setData(something.arr);
      })
      .catch((error) => console.error(error.response.data));
  }, []);
  return (
    <div>
      <div className="relative h-screen pt-28 mx-5">
        <div className="xs:flex xs:flex-col sm:flex sm:flex-col">
          <div className="text-white font-700 text-3xl">Profile Section</div>
          <div className="text-secondary font-400 text-base mt-9 mb-1">
            Team name
          </div>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="text-white font-700 text-2xl">Webtitude</div>
          <div className=" text-yellow-400 font-700 text-2xl">
            <CopyToClipboard text={teamCode} onCopy={onCopyText}>
              <div className="flex">
                {teamCode}
                <img src={copyYellow} alt="copy" className="ml-2.5" />
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="flex flex-col mt-20 ">
          <div className="text-secondary font-400 text-base mb-1">
            Team name
          </div>
          <div className="text-white font-700 text-2xl mb-1">
            Robert sdjkbjsad
          </div>
          <div className="text-white font-700 text-2xl mb-1">Andy Robert</div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ProfileSection;

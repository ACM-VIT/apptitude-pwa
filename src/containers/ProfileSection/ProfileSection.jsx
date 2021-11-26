/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import { useSnackbar } from "notistack";
import Navbar from "../../components/Navbar/Navbar";
import copyYellow from "../../assets/images/copy-yellow.svg";

// Assets
import Logout from "../../assets/images/logout.svg";

const ProfileSection = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [data, setData] = useState({});
  const [members, setMembers] = useState([]);
  const [loading, setloading] = useState(true);

  const secret = sessionStorage.getItem("AM");
  const { enqueueSnackbar } = useSnackbar();

  const showSuccSnack = (message) => {
    enqueueSnackbar(message, {
      variant: "success",
      preventDuplicate: true,
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${secret}`,
  };

  useEffect(() => {
    axios
      .get("https://provider.acmvit.in/team/", {
        headers,
      })
      .then((response) => {
        setloading(false);
        console.log(response.data);
        setData(response.data.data);
        setMembers(response.data.data.members);
      });
  }, []);
  const onCopyText = () => {
    setCopySuccess(true);
    showSuccSnack("Your Team Code has been copied!");
    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);
  };
  return (
    <div>
      <LoadingOverlay
        active={loading}
        spinner
        text="Holup! Looking up who you are"
      >
        <div className="relative h-screen pt-28 mx-5">
          <div className="xs:flex xs:flex-col sm:flex sm:flex-col">
            <div className="flex justify-between items-center">
              <div className="text-white font-700 text-3xl">
                Profile Section
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  sessionStorage.removeItem("AM");
                  sessionStorage.removeItem("UID");
                  sessionStorage.removeItem("NM");
                  localStorage.removeItem("nixt");
                  localStorage.removeItem("tixt");
                  localStorage.removeItem("_grecaptcha");
                  window.location.href = "/";
                }}
              >
                <img className="h-8" src={Logout} alt="logout" />
              </div>
            </div>
            <div className="text-secondary font-400 text-base mt-9 mb-1">
              Team name
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="text-white font-700 text-2xl">{data.name}</div>
            <div className="text-yellow-400 font-700 text-2xl mt-2">
              <CopyToClipboard text={data.code} onCopy={onCopyText}>
                <div className="flex">
                  {data.code}
                  <img src={copyYellow} alt="copy" className="ml-2.5" />
                </div>
              </CopyToClipboard>
            </div>
          </div>
          <div className="flex flex-col mt-20 ">
            <div className="text-secondary font-400 text-base mb-1">
              Member {members.length ? "" : "s"}
            </div>
            {members.map((member) => (
              <div
                key={member.emailId}
                className="text-white font-700 text-2xl mb-1"
              >
                {member.name}
              </div>
            ))}
          </div>
        </div>

        <Navbar />
      </LoadingOverlay>
    </div>
  );
};

export default ProfileSection;

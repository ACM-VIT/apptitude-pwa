/* eslint-disable react/function-component-definition */
import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./Navbar.css";
// Assets
import clock from "../../assets/images/clock.svg";
import category from "../../assets/images/category.svg";
import doc from "../../assets/images/doc.svg";
import profile from "../../assets/images/profile.svg";
import upload from "../../assets/images/upload.svg";
import clockfill from "../../assets/images/clockfill.svg";
import categoryfill from "../../assets/images/categoryfill.svg";
import docfill from "../../assets/images/docfill.svg";
import profilefill from "../../assets/images/profilefill.svg";
import uploadfill from "../../assets/images/uploadfill.svg";

const Navbar = () => {
  const { pathname } = window.location;
  console.log(pathname);
  const path = pathname === "/" ? "dashboard" : pathname.substr(1);
  const pagePath = path.split("/")[0];
  console.log(pagePath);
  return (
    <div className="fixed bottom-0 navbg h-24 w-full">
      <div className="flex justify-between xxs:mx-5 xs:mx-5 sm:mx-20 items-center h-20">
        <Link to="/timeline">
          <img
            className={pagePath === "timeline" ? "" : "hidden"}
            src={clockfill}
            alt="timeline"
          />
          <img
            className={pagePath === "timeline" ? "hidden" : ""}
            src={clock}
            alt="timeline"
          />
        </Link>
        <Link to="/problems">
          <img
            className={
              pagePath === "problems" ||
              pagePath === "features" ||
              pagePath === "countdown"
                ? ""
                : "hidden"
            }
            src={categoryfill}
            alt="category"
          />
          <img
            className={
              pagePath === "problems" ||
              pagePath === "features" ||
              pagePath === "countdown"
                ? "hidden"
                : ""
            }
            src={category}
            alt="category"
          />
        </Link>
        <Link to="/submission">
          <img
            className={pagePath === "submission" ? "" : "hidden"}
            src={uploadfill}
            alt="upload"
          />
          <img
            className={pagePath === "submission" ? "hidden" : ""}
            src={upload}
            alt="upload"
          />
        </Link>
        <Link to="/sponsers">
          <img
            className={
              pagePath === "sponsers" ||
              pagePath === "aboutus" ||
              pagePath === "prizes"
                ? ""
                : "hidden"
            }
            src={docfill}
            alt="doc"
          />
          <img
            className={
              pagePath === "sponsers" ||
              pagePath === "aboutus" ||
              pagePath === "prizes"
                ? "hidden"
                : ""
            }
            src={doc}
            alt="doc"
          />
        </Link>
        <Link to="/profile">
          <img
            className={pagePath === "profile" ? "" : "hidden"}
            src={profilefill}
            alt="profile"
          />
          <img
            className={pagePath === "profile" ? "hidden" : ""}
            src={profile}
            alt="profile"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

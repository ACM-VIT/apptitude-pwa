import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";
import Navbar from "../../components/Navbar/Navbar";

const Sponsers = function () {
  return (
    <div className="scrollbar">
      <Link to="/problems">
        <img
          src={arrow}
          alt="arrow"
          className="absolute w-6 h-8 top-10 left-4"
        />
      </Link>
      <div className="mt-24 mx-3 mb-40">
        <div className="flex flex-row justify-between px-10">
          <div className="text-secondary font-400 text-1xl pt-1.5 ">
            <Link to="/sponsers">Sponsors</Link>
          </div>
          <div className="text-secondary font-400 text-1xl pt-1.5 ">
            <Link to="/prizes">Prizes</Link>
          </div>
          <div className="text-white font-700 text-1xl pt-1.5 border-b border-yellow-400">
            <Link to="/aboutus">About Us</Link>
          </div>
        </div>
        <div className="text-secondary font-400 pt-10 ">
          <span className="text-white font-700">ACM-VIT</span>, one of the most
          reputed and distinguished technical chapter in VIT, Vellore has been
          working with vision and determination since it’s inception in 2009,
          with the aspirations of advancement of computer science as a science
          and a profession. We are not just an organization, we are a family,
          united by one cause, working towards making technology more accessible
          much like our parent organization, ACM. ACM-VIT has been working on
          projects related to graphic designing, web development, machine
          learning and app development and has been organizing events and
          workshop for the same. Apart from this, ACM-VIT also boasts of its own
          research wing, the only chapter in VIT to have that.ACM-VIT has been
          the creator of websites that have garnered applaud and awe, like
          &quot;Pravega-Racing&quot;, &quot;Team Ojas, VIT&quot;,
          &quot;Code-2-create&quot; and many more. ACM-VIT has also made
          websites with the aim of using technology to make life simpler like
          &quot;All About VIT&quot; and &quot;VIT Cabshare&quot;. ACM-VIT
          continues to pursue projects with diligence and ambition. Technology
          is their cause, objective, vision and mission. Ask why? Look at our
          motto, &quot;Because Technology Matters&quot;.
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Sponsers;

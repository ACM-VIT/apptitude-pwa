import React from "react";
import { Link } from "react-router-dom";
import Data from "./Data";
import "./ProbStatements.css";
import Navbar from "../../components/Navbar/Navbar";
import Tab from "../../components/Tab/Tab";

const ProbStatements = function () {
  return (
    <div className="pt-24 h-screen no-scrollbar">
      <div className="flex flex-col w-full px-2 h-full">
        <div className="flex flex-row justify-between text-sm se:text-base px-4 pb-8">
          <Link to="/problems">
            <div className="text-white font-700 border-b border-yellow-400">
              Problem statements
            </div>
          </Link>
          <Link to="/features">
            <div className="text-white font-700 opacity-50 hover:opacity-100">
              Feature generator
            </div>
          </Link>
        </div>

        <article
          id="problems"
          className="flex flex-col w-full overflow-scroll mb-24 no-scrollbar"
        >
          <div className="tabscontainer">
            {Data.map((ques) => (
              <Tab
                key={ques.id}
                id={ques.id}
                title={ques.question}
                content={ques.content}
              />
            ))}
          </div>
        </article>
      </div>
      <Navbar />
    </div>
  );
};

export default ProbStatements;

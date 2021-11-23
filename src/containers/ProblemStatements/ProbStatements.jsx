import React from "react";
import { Link } from "react-router-dom";
import Data from "./Data";
import "./ProbStatements.css";

const ProbStatements = function () {
  return (
    <div className="mt-24">
      <div className="flex flex-col w-full px-8">
        <div className="flex flex-row justify-between text-base xs:text-lg sm:text-xl">
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

        <article id="problems" className="container">
          <div className="tabscontainer">
            {Data.map((ques) => (
              <li className="tabs" key={ques.id}>
                question={ques.question}
              </li>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProbStatements;

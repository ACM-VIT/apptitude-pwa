import React from "react";
import { Link } from "react-router-dom";

const FeatureGenerator = function () {
  function generateFeature() {}
  return (
    <div className="mt-24">
      <div className="flex flex-col w-full px-8">
        <div className="flex flex-row justify-between text-base xs:text-lg sm:text-xl">
          <Link to="/problems">
            <div className="text-white font-700 opacity-50 hover:opacity-100">
              Problem statements
            </div>
          </Link>
          <Link to="/features">
            <div className="text-white font-700 border-b border-yellow-400">
              Feature generator
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xs xs:text-base sm:text-lg text-white opacity-50 px-5 w-full">
        Click on generate features to generate features, solving this will be
        added as bonus points
      </div>
      <div
        onClick={generateFeature}
        className="absolute bottom-20 flex h-14 px-2 rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center left-2.5 right-2.5"
      >
        Generate features
      </div>
    </div>
  );
};

export default FeatureGenerator;

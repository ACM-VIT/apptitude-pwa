/* eslint-disable arrow-body-style */
import React from "react";

import "../../App.css";

const largeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center largescreen">
      <div className="text-white text-5xl mb-4">Apptitude 2021</div>
      <div className="text-white text-xl">Please move to smaller screen</div>
    </div>
  );
};

export default largeScreen;

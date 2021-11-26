import React, { useState, useRef } from "react";
import "./Tab.css";

const tab = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setDisplay, setDisplayState] = useState("displayBorder");

  const content = useRef(null);

  return (
    <div className="flex flex-col w-full tab__section z-0">
      <button type="button" className={`flex flex-col tab w-full ${setActive}`}>
        <div className={`flex justify-center tab__title w-full ${setActive}`}>
          {props.title}
        </div>
        <div
          className="tab__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`${setDisplay}`}
      ></div>
    </div>
  );
};

export default tab;

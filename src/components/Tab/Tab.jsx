import React, { useState, useRef } from "react";
import "./Tab.css";

const tab = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setDisplay, setDisplayState] = useState("displayBorder");

  const content = useRef(null);

  return (
    <div className="tab__section z-0">
      <button type="button" className={`tab ${setActive}`}>
        <div className={`tab__title ${setActive}`}>{props.title}</div>
      <div
        className="tab__text"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`${setDisplay}`}
      >
      </div>
    </div>
  );
};

export default tab;

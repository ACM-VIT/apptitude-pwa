import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// eslint-disable-next-line react/function-component-definition
function Day1({ name, starttime, endtime }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{
        background: "rgba(219,171,72)",
        color: "#000000",
        marginRight: "10px",
        marginLeft: "40px",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px rgb(0,0,0)" }}
      iconStyle={{
        marginLeft: "15px",
        flexShrink: "10px",
        background: "rgba(219, 171, 72, 1)",
        color: "#000000",
      }}
    >
      <div className="flex flex-row">
        <div className="w-4/12 flex flex-col justify-center">
          <div className="font-500 text-xl ml-1.5">FRI</div>
          <div className="font-700 text-2xl">26th</div>
        </div>

        <div className="flex flex-col">
          <div className="font-700 text-xl">Speaker Session</div>
          <div className="font-400 text-xs">{name}</div>
          <div className="font-400 text-xs mt-6 -mb-5">
            ${starttime}-${endtime}
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}
export default Day1;

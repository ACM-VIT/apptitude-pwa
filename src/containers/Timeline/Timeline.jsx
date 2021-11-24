import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Navbar from "../../components/Navbar/Navbar";

import "./Timeline.css";

const Timeline = function () {
  return (
    <div className="pt-16">
      <div className="text-white text-3xl font-700 text-3xl pl-8 pb-7">
        Timeline
      </div>
      <VerticalTimeline className="vertical-timeline-custom-line">
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
              <div className="font-500 text-xl ml-1.5">THU</div>
              <div className="font-700 text-2xl">25th</div>
            </div>
            <div className="flex flex-col">
              <div className="font-700 text-xl">Speaker Session</div>
              <div className="font-400 text-xs">
                How to grow your social network by SS-Roy
              </div>
              <div className="font-400 text-xs mt-6 -mb-5">8am-10pm</div>
            </div>
          </div>
        </VerticalTimelineElement>
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
              <div className="font-500 text-xl ml-1.5">THU</div>
              <div className="font-700 text-2xl">25th</div>
            </div>
            <div className="flex flex-col">
              <div className="font-700 text-xl">Speaker Session</div>
              <div className="font-400 text-xs">
                How to grow your social network by SS-Roy
              </div>
              <div className="font-400 text-xs mt-6 -mb-5">8am-10pm</div>
            </div>
          </div>
        </VerticalTimelineElement>
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
              <div className="font-500 text-xl ml-1.5">THU</div>
              <div className="font-700 text-2xl">25th</div>
            </div>
            <div className="flex flex-col">
              <div className="font-700 text-xl">Speaker Session</div>
              <div className="font-400 text-xs">
                How to grow your social network by SS-Roy
              </div>
              <div className="font-400 text-xs mt-6 -mb-5">8am-10pm</div>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Navbar />
    </div>
  );
};

export default Timeline;

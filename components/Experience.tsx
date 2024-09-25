"use client";

import { experience } from "@/static/constants/experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section id="experience">
      <VerticalTimeline animate={false} lineColor="white">
        {experience.items.map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#1B3247",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0/5)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: "0.4rem soid #9ca3af" }}
              date={item.duration}
            >
              <h3 className="h3 font-semibold text-accent">{item.org}</h3>
              <p className="!mt-1 !font-normal text-white/60">
                {item.position}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

import clsx from "clsx";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "../../../model/experience";

const EXPERIENCE_DUMMY: Experience[] = [
  {
    position: "Senior Full Stack Developer",
    date: "Oct 2021 - present",
    company: "Aertec Solutions",
    description:
      "Working in internal applications and solutions for airports. Maintenance and new features using React, NextJS, .Net Core and SQL Server",
  },
  {
    position: "Front-End Developer",
    date: "Aug 2020 - Oct 2021",
    company: "Freepik Company",
    description:
      "Working in internal applications and solutions for airports. Maintenance and new features using React, NextJS, .Net Core and SQL Server",
  },
  {
    position: "Middle Full Stack Developer",
    date: "Feb 2020 - Aug 2020",
    company: "Ciklum",
    description:
      "Working in internal applications and solutions for airports. Maintenance and new features using React, NextJS, .Net Core and SQL Server",
  },
];

export const ExperienceTimeline = () => {
  return (
    <VerticalTimeline animate={true} layout="2-columns">
      {EXPERIENCE_DUMMY.map((exp, idx) => (
        <VerticalTimelineElement
          key={idx}
          position={idx % 2 === 0 ? "right" : "left"}
          className={clsx(
            "vertical-timeline-element--work",
            idx === 0 ? " text-white" : ""
          )}
          contentArrowStyle={{
            borderRight: "7px solid #0284c7",
          }}
          date={exp.date}
          iconStyle={{
            background: idx === 0 ? "#b45309" : "#0284c7",
            color: "#fff",
          }}
          contentStyle={{ background: idx === 0 ? "#0284c7" : "" }}
        >
          <h3 className="vertical-timeline-element-title">{exp.position}</h3>
          <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
          <p>{exp.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

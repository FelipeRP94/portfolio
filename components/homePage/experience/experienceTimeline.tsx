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
      "Maintenance and develop of new features in the company's main product using PHP, Typescript, SASS and HTML",
  },
  {
    position: "Middle Full Stack Developer",
    date: "Feb 2020 - Aug 2020",
    company: "Ciklum",
    description:
      "Working with React, .Net Core and SQL Server for car leasing company.",
  },
  {
    position: "Full Stack Developer",
    date: "Jun 2018 - Feb 2020",
    company: "Aertec Solutions",
    description:
      "Working in internal applications and solutions for airports. Maintenance and new features using React, NextJS, .Net Core and SQL Server",
  },
  {
    position: "Junior CRM Developer",
    date: "Mar 2018 - Jun 2018",
    company: "Avanade",
    description: "Microsoft Dynamics CRM",
  },
  {
    position: "Java Developer",
    date: "Sep 2017 - Mar 2018",
    company: "Viewnext",
    description: "Working for Spanish goverment aplications with Java",
  },
  {
    position: "Junior Full Stack Developer",
    date: "Jun 2016 - Sep 2017",
    company: "Ticsur Consultoría Estratégica",
    description:
      "Develop of web applications for customers using PHP, HTML, Javascript, JQuery, SQL Server",
  },
  {
    position: "Trainee web developer",
    date: "Sep 2015 - Mar 2016",
    company: "CLAROFLEX",
    description: "Working with JavaEE, HTML, CSS, Javascript and MySQL",
  },
];

export const ExperienceTimeline = () => {
  return (
    <VerticalTimeline animate={false}>
      {EXPERIENCE_DUMMY.map((exp, idx) => (
        <VerticalTimelineElement
          key={idx}
          position={idx % 2 === 0 ? "right" : "left"}
          className={"vertical-timeline-element--work"}
          contentArrowStyle={{
            borderRight: "7px solid #0284c7",
          }}
          date={exp.date}
          iconStyle={{
            background: idx === 0 ? "#b45309" : "#0284c7",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">
            {exp.position}
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-slate-500">
            {exp.company}
          </h4>
          <p>{exp.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

import { Experience } from "../../../model/experience";
import { DiReact, DiPhp, DiJava } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

export const EXPERIENCE: Experience[] = [
  {
    position: "Senior Full Stack Developer",
    date: "Oct 2021 - present",
    company: "Aertec Solutions",
    icon: <DiReact />,
    description:
      "Working in internal applications and solutions for airports. Maintenance and new features using React, NextJS, .Net Core and SQL Server.",
  },
  {
    position: "Front-End Developer",
    date: "Aug 2020 - Oct 2021",
    company: "Freepik Company",
    icon: <SiTypescript />,
    description:
      "Maintenance and develop of new features in the company's main product using PHP, Typescript, SASS and HTML.",
  },
  {
    position: "Middle Full Stack Developer",
    date: "Feb 2020 - Aug 2020",
    company: "Ciklum",
    description:
      "Working with React, .Net Core and SQL Server for leading company in the sector of car leasing. Also, I had the opportunity for doing minor tasks in a React Native mobile app.",
    icon: <DiReact />,
  },
  {
    position: "Full Stack Developer",
    date: "Jun 2018 - Feb 2020",
    company: "Aertec Solutions",
    icon: <DiReact />,
    description:
      "Working in internal applications and solutions for airports. Maintenance and new features using React, .Net Core and SQL Server.",
  },
  {
    position: "Java Developer",
    date: "Sep 2017 - Mar 2018",
    company: "Viewnext",
    description: "Working for Spanish goverment application with Java.",
    icon: <DiJava />,
  },
  {
    position: "Junior Full Stack Developer",
    date: "Jun 2016 - Sep 2017",
    company: "Ticsur Consultoría Estratégica",
    description:
      "Develop of web applications for customers using PHP, HTML, Javascript, JQuery and SQL Server.",
    icon: <DiPhp />,
  },
  {
    position: "Trainee web developer",
    date: "Sep 2015 - Mar 2016",
    company: "CLAROFLEX",
    description: "Working with JavaEE, HTML, CSS, Javascript and MySQL.",
    icon: <DiJava />,
  },
];

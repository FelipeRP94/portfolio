import { Experience } from "../../../model/experience";
import { DiReact, DiPhp, DiJava, DiWindows } from "react-icons/di";
import { Timeline } from "../../common/timeline/timeline";

const EXPERIENCE: Experience[] = [
  {
    position: "Senior Full Stack Developer",
    date: "Oct 2021 - present",
    company: "Aertec Solutions",
    icon: <DiReact />,
    description:
      "Working in internal applications and solutions for airports. Maintenance and new features using React, NextJS, .Net Core and SQL Server",
  },
  {
    position: "Front-End Developer",
    date: "Aug 2020 - Oct 2021",
    company: "Freepik Company",
    icon: <DiPhp />,
    description:
      "Maintenance and develop of new features in the company's main product using PHP, Typescript, SASS and HTML",
  },
  {
    position: "Middle Full Stack Developer",
    date: "Feb 2020 - Aug 2020",
    company: "Ciklum",
    description:
      "Working with React, .Net Core and SQL Server for car leasing company.",
    icon: <DiReact />,
  },
  {
    position: "Full Stack Developer",
    date: "Jun 2018 - Feb 2020",
    company: "Aertec Solutions",
    icon: <DiReact />,
    description:
      "Working in internal applications and solutions for airports. Maintenance and new features using React, NextJS, .Net Core and SQL Server",
  },
  {
    position: "Junior CRM Developer",
    date: "Mar 2018 - Jun 2018",
    company: "Avanade",
    description: "Microsoft Dynamics CRM",
    icon: <DiWindows />,
  },
  {
    position: "Java Developer",
    date: "Sep 2017 - Mar 2018",
    company: "Viewnext",
    description: "Working for Spanish goverment aplications with Java",
    icon: <DiJava />,
  },
  {
    position: "Junior Full Stack Developer",
    date: "Jun 2016 - Sep 2017",
    company: "Ticsur Consultoría Estratégica",
    description:
      "Develop of web applications for customers using PHP, HTML, Javascript, JQuery, SQL Server",
    icon: <DiPhp />,
  },
  {
    position: "Trainee web developer",
    date: "Sep 2015 - Mar 2016",
    company: "CLAROFLEX",
    description: "Working with JavaEE, HTML, CSS, Javascript and MySQL",
    icon: <DiJava />,
  },
];

export const ExperienceSection = () => {
  const data = EXPERIENCE.map((exp) => ({
    date: exp.date,
    title: exp.position,
    subtitle: exp.company,
    description: exp.description,
    icon: exp.icon,
  }));

  return (
    <section className="p-4 md:p-12 my-12" id="experience">
      <h1 className="text-center text-4xl font-bold text-sky-900 my-12">
        Experience
      </h1>
      <Timeline data={data} />
    </section>
  );
};

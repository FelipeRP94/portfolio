import { Study } from "../../../model/study";
import { Timeline } from "../../common/timeline/timeline";
import { BsBook } from "react-icons/bs";

const STUDIES: Study[] = [
  {
    title: "Front-End development Master's degree",
    center: "Lemoncode Formación",
    date: "Sep 2017 - Mar 2018",
  },
  {
    title: "Computer Science Degree",
    center: "University of Málaga",
    date: "Sep 2012 - Jul 2017",
  },
];

export const StudiesSection = () => {
  const data = STUDIES.map((study) => ({
    date: study.date,
    title: study.title,
    subtitle: study.center,
    icon: <BsBook />,
  }));

  return (
    <section className="p-4 md:p-12 my-12" id="education">
      <h1 className="text-center text-4xl font-bold text-sky-900 my-12">
        Education
      </h1>
      <Timeline data={data} />
    </section>
  );
};

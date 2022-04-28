import { Timeline } from "../../common/timeline/timeline";
import { BsBook } from "react-icons/bs";
import { STUDIES } from "../../common/data/education";

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

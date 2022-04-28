import { EXPERIENCE } from "../../common/data/experience";
import { Timeline } from "../../common/timeline/timeline";

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

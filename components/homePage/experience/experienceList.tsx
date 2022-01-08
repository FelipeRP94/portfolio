import { ExperienceTimeline } from "./experienceTimeline";

export const ExperienceList = () => {
  return (
    <section className="p-4 md:p-12 my-12" id="experience">
      <h1 className="text-center text-3xl font-bold text-sky-900 my-12">
        Experience
      </h1>
      <ExperienceTimeline />
    </section>
  );
};

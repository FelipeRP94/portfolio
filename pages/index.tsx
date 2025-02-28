import { ContactSection } from "../components/homePage/contact/contactSection";
import { Experience } from "../model/experience";
import { experiencesApi } from "../api/experiences.api";
import { ExperienceSection } from "../pods/experienceList/experienceSection";
import { Hero } from "../components/homePage/hero/hero";
import { SkillSection } from "../components/homePage/skills/skillSection";
import { StudiesSection } from "../components/homePage/studies/studiesSection";
import React from "react";
import type { NextPage } from "next";

export async function getServerSideProps() {
  const experiences = await experiencesApi.getExperiences();

  return { props: { experiences: Object.values(experiences) } };
}

interface Props {
  experiences: Experience[];
}

const Portfolio: NextPage<Props> = ({ experiences }) => {
  return (
    <React.Fragment>
      <Hero />
      <ExperienceSection experiences={experiences} />
      <SkillSection />
      <StudiesSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default Portfolio;

import type { NextPage } from "next";
import React from "react";
import { ExperienceSection } from "../components/homePage/experience/experienceSection";
import { Hero } from "../components/homePage/hero/hero";
import { SkillSection } from "../components/homePage/skills/skillSection";
import { StudiesSection } from "../components/homePage/studies/studiesSection";

const Portfolio: NextPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <ExperienceSection />
      <SkillSection />
      <StudiesSection />
    </React.Fragment>
  );
};

export default Portfolio;

import type { NextPage } from "next";
import React from "react";
import { ExperienceList } from "../components/homePage/experience/experienceList";
import { Hero } from "../components/homePage/hero/hero";
import { SkillList } from "../components/homePage/skills/skillList";

const Portfolio: NextPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <ExperienceList />
      <SkillList />
    </React.Fragment>
  );
};

export default Portfolio;

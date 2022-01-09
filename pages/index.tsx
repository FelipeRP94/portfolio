import type { NextPage } from "next";
import React from "react";
import { ExperienceSection } from "../components/homePage/experience/experienceSection";
import { Hero } from "../components/homePage/hero/hero";
import { ContactSection } from "../components/homePage/contact/contactSection";
import { SkillSection } from "../components/homePage/skills/skillSection";
import { StudiesSection } from "../components/homePage/studies/studiesSection";

const Portfolio: NextPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <ExperienceSection />
      <SkillSection />
      <StudiesSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default Portfolio;

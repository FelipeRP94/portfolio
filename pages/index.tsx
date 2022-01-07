import type { NextPage } from "next";
import React from "react";
import { ExperienceList } from "../components/homePage/experience/experienceList";
import { Hero } from "../components/homePage/hero/hero";

const Portfolio: NextPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <ExperienceList />
    </React.Fragment>
  );
};

export default Portfolio;

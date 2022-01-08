import { SkillCategory } from "../../../model/skillCategory";
import {
  AiOutlineDesktop,
  AiOutlineSetting,
  AiOutlineBranches,
} from "react-icons/ai";
import React from "react";
import { SkillCategoryCard } from "./skillCardCategory";

const SKILL_DUMMY: SkillCategory[] = [
  {
    icon: <AiOutlineDesktop />,
    name: "Front-End",
    main: "React, Typescript, Javascript, HTML, CSS, NextJS",
    other: "React-Query, SASS, Tailwind",
  },
  {
    icon: <AiOutlineSetting />,
    name: "Back-End",
    main: ".Net Core, Entity Framework, SQL Server",
    other: "PHP, NodeJS, MySQL",
  },
  {
    icon: <AiOutlineBranches />,
    name: "Methodology",
    main: "Git, Bitbucket, Jira, Scrum",
  },
];

export const SkillList = () => {
  return (
    <section className="bg-sky-900 p-8 md:p-12 my-12" id="skills">
      <h1 className="text-center text-3xl font-bold my-12 text-white">
        Skills
      </h1>
      <div className="flex flex-col md:flex-row">
        {SKILL_DUMMY.map((skill) => (
          <SkillCategoryCard key={skill.name} skillCategory={skill} />
        ))}
      </div>
    </section>
  );
};

import React from "react";
import { SkillCategoryCard } from "./skillCardCategory";
import { SKILL_DUMMY } from "../../common/data/skills";

export const SkillSection = () => (
  <section className="bg-sky-900 p-8 md:p-12 my-12" id="skills">
    <h1 className="text-center text-4xl font-bold my-12 text-white">Skills</h1>
    <div className="flex flex-col md:flex-row">
      {SKILL_DUMMY.map((skill) => (
        <SkillCategoryCard key={skill.name} skillCategory={skill} />
      ))}
    </div>
  </section>
);

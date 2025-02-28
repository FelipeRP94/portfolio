import {
  AiOutlineDesktop,
  AiOutlineSetting,
  AiOutlineBranches,
} from "react-icons/ai";
import { SkillCategory, SkillCV } from "../../../model/skillCategory";

export const SKILL_DUMMY: SkillCategory[] = [
  {
    icon: <AiOutlineDesktop />,
    name: "Front-End",
    main: ["React", "NextJS", "Typescript", "Javascript", "HTML", "CSS"],
    other: ["React-Query", "SASS", "Tailwind"],
  },
  {
    icon: <AiOutlineSetting />,
    name: "Back-End",
    main: [".Net Core", "Entity Framework", "SQL Server"],
    other: ["PHP", "NodeJS", "MySQL"],
  },
  {
    icon: <AiOutlineBranches />,
    name: "Methodology",
    main: ["Git", "Bitbucket", "Jira", "Scrum"],
    other: ["Cypress", "Ghost Inspector"],
  },
];

export const SKILL_CV: SkillCV[] = [
  {
    name: "React",
    level: 4.5,
  },
  { name: "NextJS", level: 3.5 },
  { name: "CSS", level: 3 },
  { name: "Typescript", level: 4 },
  { name: "C#", level: 3 },
  { name: ".Net Core", level: 3 },
  { name: "Microsoft SQL Server", level: 3 },
];

export const LANGUAGES_CV: SkillCV[] = [
  {
    name: "English",
    level: 3,
  },
  { name: "Spanish", level: 5 },
];

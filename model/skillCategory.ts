import { JSX } from "react";

export interface SkillCategory {
  icon: JSX.Element;
  name: string;
  main: string[];
  other?: string[];
}

export interface SkillCV {
  name: string;
  level: number;
}

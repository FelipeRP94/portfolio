import { JSX } from "react";

export interface TimelineData {
  date: string;
  title: string;
  subtitle: string;
  description?: string;
  icon?: JSX.Element;
}

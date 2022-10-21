export interface Experience {
  position: string;
  company: string;
  dateFrom: Date;
  dateTo?: Date;
  description: string;
  icon?: JSX.Element;
}

export interface ExperienceAPIResponse {
  [key: string]: Experience;
}

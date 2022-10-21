import { Experience } from "../../../model/experience";
import {
  ExperienceContainer,
  ExperienceTitle,
  ExperienceCompany,
  ExperienceDescription,
  ExperienceDate,
} from "./experienceList.styles";

interface Props {
  experiences: Experience[];
}

const MONTHS_ARRAY = [
  "January, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dic",
];

const formatExperienceDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

export const ExperienceList = ({ experiences }: Props) => {
  if (!experiences.length) {
    return <p>No experiences found</p>;
  }

  return (
    <>
      {experiences.map((exp, idx) => (
        <ExperienceContainer key={idx}>
          <ExperienceTitle>{exp.position}</ExperienceTitle>
          <ExperienceCompany>{exp.company}</ExperienceCompany>
          <ExperienceDate>
            {`${formatExperienceDate(new Date(exp.dateFrom))} - ${
              exp.dateTo
                ? formatExperienceDate(new Date(exp.dateTo))
                : "present"
            }`}
          </ExperienceDate>
          <ExperienceDescription>{exp.description}</ExperienceDescription>
        </ExperienceContainer>
      ))}
    </>
  );
};

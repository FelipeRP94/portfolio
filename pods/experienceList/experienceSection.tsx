import { formatExperienceDate } from "../../common/utils/date.utils";
import { EXPERIENCE } from "../../components/common/data/experience";
import { Timeline } from "../../components/common/timeline/timeline";
import { Experience } from "../../model/experience";
import { useExperiences } from "../admin/ExperienceList/hooks/useExperiences";
import {
  ExperienceCompany,
  ExperienceContainer,
  ExperienceDate,
  ExperienceDescription,
  ExperienceSectionSubTitle,
  ExperienceSectionTitle,
  ExperienceTitle,
  SectionContainer,
} from "./experienceSection.styles";

interface Props {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: Props) => {
  return (
    <SectionContainer id="experience">
      <ExperienceSectionTitle>Experience</ExperienceSectionTitle>
      <ExperienceSectionSubTitle>
        I have had the opportunity to work with multidisciplinary teams and
        collaborate on challenging and exciting projects, which has enabled me
        to acquire great adaptability to different work environments.
      </ExperienceSectionSubTitle>
      <ExperienceSectionSubTitle>
        My professional experience has allowed me to develop an analytical and
        strategic approach to addressing complex problems and providing
        effective and efficient solutions.
      </ExperienceSectionSubTitle>
      {experiences.map((exp, idx) => (
        <ExperienceContainer key={idx}>
          <ExperienceTitle>{exp.position}</ExperienceTitle>
          <ExperienceCompany>{exp.company}</ExperienceCompany>
          <ExperienceDate>{`${formatExperienceDate(new Date(exp.dateFrom))} - ${
            exp.dateTo ? formatExperienceDate(new Date(exp.dateTo)) : "present"
          }`}</ExperienceDate>
          <ExperienceDescription>{exp.description}</ExperienceDescription>
        </ExperienceContainer>
      ))}
    </SectionContainer>
  );
};

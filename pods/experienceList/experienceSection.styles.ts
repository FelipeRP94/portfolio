import styled from "styled-components";
import { COLORS } from "../../common-app/styles/constants";

export const SectionContainer = styled.section`
  margin: 50px 10%;
  min-width: 320px;
  text-align: justify;

  @media (min-width: 1080px) {
    margin: 50px 20%;
  }
`;

export const ExperienceSectionTitle = styled.p`
  color: ${COLORS.primary};
  font-size: 2.6em;
  font-weight: bold;
  padding: 0;
  margin: 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 3px;
    height: 0;
    width: 7rem;
    border-bottom: 5px solid ${COLORS.alternative};
    bottom: 0;
  }
`;

export const ExperienceSectionSubTitle = styled.p`
  font-size: 1.2em;
  margin: 20px 0;
`;

export const ExperienceContainer = styled.article`
  margin: 20px 0;
  border-bottom: 2px solid ${COLORS.alternative};
  padding-bottom: 10px;
`;

export const ExperienceTitle = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: ${COLORS.primary};
`;

export const ExperienceCompany = styled.p`
  font-size: 1em;
  color: ${COLORS.secondary};
`;

export const ExperienceDate = styled.p`
  font-size: 0.8em;
  color: grey;
`;

export const ExperienceDescription = styled.p`
  margin-top: 10px;
  text-align: justify;
`;

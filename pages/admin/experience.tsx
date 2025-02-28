import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { ExperienceList } from "../../pods/admin/ExperienceList/ExperienceList";
import {
  SectionTitle,
  Separator,
} from "../../pods/admin/ExperienceList/experienceList.styles";
import { useExperiences } from "../../pods/admin/ExperienceList/hooks/useExperiences";

const ExperiencePage: NextPage = () => {
  const { status } = useSession();
  const experiences = useExperiences();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SectionTitle>Experiences</SectionTitle>
      <Separator />
      <ExperienceList experiences={experiences} />
    </>
  );
};

export default ExperiencePage;

import { useQuery } from "react-query";
import { experiencesApi } from "../../../../api/experiences.api";

export const useExperiences = () => {
  const { data } = useQuery(["experiences"], () =>
    experiencesApi.getExperiences()
  );

  return { experiences: data ? Object.values(data) : [] };
};

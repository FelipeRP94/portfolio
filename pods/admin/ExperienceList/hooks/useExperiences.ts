import { useQuery } from "@tanstack/react-query";
import { experiencesApi } from "../../../../api/experiences.api";

export const useExperiences = () => {
  const { data } = useQuery({
    queryKey: ["experiences"],
    queryFn: () => experiencesApi.getExperiences(),
  });

  return data ? Object.values(data) : [];
};

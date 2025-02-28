import { ExperienceAPIResponse } from "../model/experience";
import apiClient from "./http";

const getExperiences = async (): Promise<ExperienceAPIResponse> => {
  const response = await apiClient.get("/experiences.json");

  return response.data;
};

export const experiencesApi = {
  getExperiences,
};

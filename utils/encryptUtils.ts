import { hash, compare } from "bcryptjs";

export const checkHashValue = async (value: string, hashToCompare: string) => {
  const result = await compare(value, hashToCompare);

  return result;
};

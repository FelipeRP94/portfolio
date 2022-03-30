import { NextPage } from "next";
import { useSession } from "next-auth/react";

const ExperiencePage: NextPage = () => {
  const { status, data } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return <p>Welcome {data?.user?.name}</p>;
};

export default ExperiencePage;

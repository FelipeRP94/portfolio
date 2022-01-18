import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useAuth } from "../../hooks/useAuth";

const AdminPage: NextPage = () => {
  useAuth();
  const { data } = useSession();

  return <p>Welcome {data?.user?.name}</p>;
};

export default AdminPage;

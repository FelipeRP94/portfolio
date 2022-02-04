import { Header } from "./header";
import { AiOutlinePoweroff, AiOutlineUser } from "react-icons/ai";
import { useLogin } from "../../hooks/useLogin";
import { useSession } from "next-auth/react";

export const HeaderAdmin = () => {
  const { data } = useSession();
  const { doLogout } = useLogin();

  return data ? (
    <Header>
      <div className="w-full flex items-center justify-end m-3 text-white">
        <AiOutlineUser />
        <span className="mx-2">{data?.user?.name}</span>|
        <span className="mx-2">Logout</span>
        <button onClick={doLogout}>
          <AiOutlinePoweroff />
        </button>
      </div>
    </Header>
  ) : null;
};

import React from "react";
import { HeaderAdmin } from "./headerAdmin";
import { LateralMenu } from "./lateralMenu";
import { useSession } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

export const LayoutAdmin = ({ children }: Props) => {
  const { data } = useSession();

  return (
    <React.Fragment>
      {data && <HeaderAdmin />}
      {data && <LateralMenu />}
      <main className={`${data && "ml-52 p-4"}`}>{children}</main>
    </React.Fragment>
  );
};

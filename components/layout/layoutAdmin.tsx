import React from "react";
import { HeaderAdmin } from "./headerAdmin";
import { LateralMenu } from "./lateralMenu";
import { useSession } from "next-auth/react";
import { LoginForm } from "../adminPage/loginForm";

interface Props {
  children: React.ReactNode;
}

export const LayoutAdmin = ({ children }: Props) => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  console.log(status);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <>
      <HeaderAdmin />
      <LateralMenu />
      <main className={"pt-20 ml-52 p-4"}>{children}</main>
    </>
  );
};

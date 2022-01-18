import { useRouter } from "next/router";
import React from "react";
import { Header } from "./header";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <React.Fragment>
      {!pathname.match(/login/i) && <Header />}
      <main>{children}</main>
    </React.Fragment>
  );
};

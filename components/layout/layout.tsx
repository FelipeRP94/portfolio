import { useRouter } from "next/router";
import React from "react";
import { HeaderAdmin } from "./headerAdmin";
import { HeaderPortfolio } from "./headerPortfolio";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { pathname } = router;

  const header = pathname.match(/admin/i) ? (
    <HeaderAdmin />
  ) : (
    <HeaderPortfolio />
  );
  return (
    <React.Fragment>
      {!pathname.match(/login/i) && header}
      <main>{children}</main>
    </React.Fragment>
  );
};

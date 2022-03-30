import React from "react";
import { HeaderPortfolio } from "./headerPortfolio";

interface Props {
  children: React.ReactNode;
}

export const LayoutPortfolio = ({ children }: Props) => (
  <React.Fragment>
    <HeaderPortfolio />
    <main>{children}</main>
  </React.Fragment>
);

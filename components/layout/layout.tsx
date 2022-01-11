import React from "react";
import { Header } from "./header";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
};

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Header = ({ children }: Props) => (
  <header className="fixed items-center flex py-2 px-4 md:px-8 bg-slate-800 shadow-xl w-full z-10">
    {children}
  </header>
);

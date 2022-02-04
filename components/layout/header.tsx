import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Header = ({ children }: Props) => (
  <header className="items-center flex py-2 px-4 md:px-8 bg-slate-800 shadow-xl relative w-full sticky top-0 z-10">
    {children}
  </header>
);

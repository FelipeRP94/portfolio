import { useRouter } from "next/router";
import { LayoutAdmin } from "./layoutAdmin";
import { LayoutPortfolio } from "./layoutPortfolio";
import dynamic from "next/dynamic";
import { SessionProviderProps } from "next-auth/react";

const SessionProvider = dynamic(() =>
  import("next-auth/react").then((mod) => mod.SessionProvider)
);

interface Props {
  children: React.ReactNode;
  session: SessionProviderProps;
}

export const Layout = ({ children, session }: Props) => {
  const { pathname } = useRouter();

  return /admin/i.test(pathname) ? (
    <SessionProvider session={session.session}>
      <LayoutAdmin>{children}</LayoutAdmin>
    </SessionProvider>
  ) : (
    <LayoutPortfolio>{children}</LayoutPortfolio>
  );
};

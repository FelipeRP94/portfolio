import { useRouter } from "next/router";
import { LayoutAdmin } from "./layoutAdmin";
import { LayoutPortfolio } from "./layoutPortfolio";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();

  return /admin/i.test(pathname) ? (
    <LayoutAdmin>{children}</LayoutAdmin>
  ) : (
    <LayoutPortfolio>{children}</LayoutPortfolio>
  );
};

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (status !== "loading" && !session && pathname.match(/admin/i)) {
      router.push("/admin/login");
    }
  }, [router, session, pathname, status]);
};

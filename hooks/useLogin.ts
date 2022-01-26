import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export const useLogin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const submitLogin = async (event: any) => {
    event.preventDefault();

    if (username === "") {
      setError("Username is required");
      return;
    }

    if (password === "") {
      setError("Password is required");
      return;
    }

    const { error }: any = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    error && setError(error);

    !error && router.push("/admin");
  };

  const doLogout = () => {
    signOut({
      callbackUrl: `${window.location.origin}/admin/login`,
      redirect: false,
    });
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    submitLogin,
    doLogout,
  };
};

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

    const { error: signInError }: any = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    signInError && setError(signInError);
  };

  const doLogout = () => {
    signOut({
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

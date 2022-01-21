import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export const useLoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const submitLogin = async (event: any) => {
    event.preventDefault();

    const { error }: any = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    error && setError(error);

    !error && router.push("/admin");
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    submitLogin,
  };
};

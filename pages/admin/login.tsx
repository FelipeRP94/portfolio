import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

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

  return (
    <Fragment>
      <form
        onSubmit={submitLogin}
        className="flex items-center justify-center h-full"
      >
        <div className="flex flex-col w-96 items-center bg-white rounded-xl p-4 shadow-xl">
          <p className="mb-8 text-2xl">Login</p>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            className="mb-2 p-1 rounded-md border-2 border-black w-64 hover:shadow-lg"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="mb-4 p-1 rounded-md border-2 border-black w-64 hover:shadow-lg"
          />
          <button
            type="submit"
            className="p-2 m-6 w-40 border-2 rounded-md bg-sky-500 text-white border-2 border-white hover:bg-sky-600"
          >
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </Fragment>
  );
};

export default LoginPage;

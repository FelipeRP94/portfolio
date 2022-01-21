import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Button } from "../../components/ui/button";
import { InputText } from "../../components/ui/inputText";
import { useLoginForm } from "../../hooks/useLoginForm";

const LoginPage: NextPage = () => {
  const { username, password, setUsername, setPassword, error, submitLogin } =
    useLoginForm();

  return (
    <Fragment>
      <form
        onSubmit={submitLogin}
        className="flex items-center justify-center h-full"
      >
        <div className="flex flex-col items-center bg-white rounded-xl p-16 shadow-xl">
          <p className="mb-8 text-4xl">Login</p>
          <InputText
            id="username"
            name="username"
            label="Username"
            value={username}
            onChange={setUsername}
          />
          <InputText
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <Button type="submit" text="Login" />
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </Fragment>
  );
};

export default LoginPage;

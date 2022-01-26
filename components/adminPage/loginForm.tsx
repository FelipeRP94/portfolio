import { Fragment } from "react";
import { Button } from "../ui/button";
import { InputText } from "../ui/inputText";
import { useLogin } from "../../hooks/useLogin";

export const LoginForm = () => {
  const { username, password, setUsername, setPassword, error, submitLogin } =
    useLogin();

  return (
    <Fragment>
      <form
        onSubmit={submitLogin}
        className="flex items-center justify-center h-full w-full absolute"
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

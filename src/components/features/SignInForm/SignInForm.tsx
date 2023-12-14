"use client";
import { useState } from "react";
import { Button } from "../Button/Button";
import Style from "./SignInForm.module.scss";
import { InputField } from "../InputField/InputField";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className={Style.container}>
      <InputField
        label="Email"
        type="email"
        placeholder="Enter email"
        id="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        id="password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <Button type="submit">Log in</Button>
    </form>
  );
};

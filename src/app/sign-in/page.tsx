"use client";
import Style from "./page.module.scss";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { InputField } from "@/components/features/InputField/InputField";
import { isValidEmail, isValidPassword } from "../sign-up/form.utils";
import { FormState } from "../sign-up/form.types";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (
    inputType: Partial<keyof FormState>,
    { target: { value } }: ChangeEvent<HTMLInputElement>
  ) => {
    if (inputType === "email") {
      setEmail(value);
      setEmailError("");
    } else if (inputType === "password") {
      setPassword(value);
      setPasswordError("");
    }
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (!isValidPassword(password)) {
      setPasswordError("Invalid password format");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={Style.container}>
      <InputField
        label="Email"
        placeholder="Enter email"
        id="email"
        value={email}
        onChange={(value) => handleInputChange("email", value)}
        error={emailError}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        id="password"
        value={password}
        onChange={(value) => handleInputChange("password", value)}
        error={passwordError}
      />
      <Button type="submit">Log in</Button>
    </form>
  );
}

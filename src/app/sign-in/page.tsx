"use client";
import Style from "./page.module.scss";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { isValidEmail, isValidPassword } from "../sign-up/form.utils";
import { FormState } from "../sign-up/form.types";
import { Button } from "@/components/Button/Button";
import { fetchSign } from "@/api/fetchSign";
import { AxiosError } from "axios";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputField } from "@/components/InputField/InputField";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { handleSignIn } = useAuth();

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

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (!isValidPassword(password)) {
      setPasswordError("Invalid password format");
      return;
    }
    try {
      const loggedUser = {
        email,
        password,
      };

      const { token, user } = await fetchSign(loggedUser);
      handleSignIn(token, user);
      toast.success("You are logged in");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data);
      } else {
        toast.error("An unexpected error occurred");
      }
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

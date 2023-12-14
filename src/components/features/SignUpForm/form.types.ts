import { type InputHTMLAttributes } from "react";

export interface FormField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: keyof FormState;
}

export interface FormState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

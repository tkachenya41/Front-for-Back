import { FormState } from "./form.types";

export function getDefaultFormValues(): FormState {
  return {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  };
}

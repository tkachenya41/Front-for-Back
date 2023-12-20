import { FormErrors, FormState } from "./form.types";

export function getDefaultFormValues(): FormState {
  return {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  };
}

const MIN_NAME_LENGTH = 3;

function isValidName(name: FormState["username"]): boolean {
  return name.trim().length >= MIN_NAME_LENGTH;
}

export function isValidEmail(email: FormState["email"]): boolean {
  return /^[\w-.+]+@(?<domain>[\w-]+\.)+[\w-]{2,4}$/.test(email);
}

export function isValidPassword(password: FormState["password"]): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=(?:.*[@#$%^&*()_+=]){3})[\w\@#$%^&*()_+=]/.test(
    password
  );
}

export function getFormErrors(formValues: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!isValidName(formValues.username)) {
    errors.username = "Name should have more than 3 symbols";
  }

  if (!isValidEmail(formValues.email)) {
    errors.email = "Email should be email";
  }

  if (!isValidPassword(formValues.password)) {
    errors.password = "Password should be longer than 4 symbols";
  }

  if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Password and confirm password should match";
  }

  return errors;
}

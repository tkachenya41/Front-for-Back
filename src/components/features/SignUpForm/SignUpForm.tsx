"use client";
import { useCallback, useState } from "react";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
import Style from "./SignUpForm.module.scss";
import { formSchema } from "./form.schema";
import { FormState } from "./form.types";
import { getDefaultFormValues } from "./form.utils";

export function SignUpForm() {
  const [formState, setFormState] = useState<FormState>(getDefaultFormValues);
  const updateFormValues = useCallback((newFormValue: Partial<FormState>) => {
    setFormState((previousFields) => ({ ...previousFields, ...newFormValue }));
  }, []);

  return (
    <form className={Style.container}>
      {formSchema.map((field) => (
        <InputField
          {...field}
          key={field.name}
          value={formState[field.name]}
          onChange={({ target: { value } }) =>
            updateFormValues({ [field.name]: value })
          }
        />
      ))}
      <Button type="submit">Sign Up</Button>
    </form>
  );
}

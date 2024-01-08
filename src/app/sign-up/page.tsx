"use client";
import { SyntheticEvent, useCallback, useMemo, useState } from "react";
import Style from "./page.module.scss";
import { FormState } from "./form.types";
import { getDefaultFormValues, getFormErrors } from "./form.utils";
import { formSchema } from "./form.schema";
import { InputField } from "@/components/features/InputField/InputField";
import { fetchRegister } from "@/api/fetchRegister";
import { AxiosError } from "axios";
import { Button } from "@/components/Button/Button";

export default function SignUpPage() {
  const [formState, setFormState] = useState<FormState>(getDefaultFormValues);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(
    () => new Set()
  );
  const updateFormValues = useCallback((newFormValue: Partial<FormState>) => {
    setFormState((previousFields) => ({ ...previousFields, ...newFormValue }));
    setTouchedFields(
      (previousFields) =>
        new Set([...previousFields.values(), ...Object.keys(newFormValue)])
    );
  }, []);

  const formErrors = useMemo(() => getFormErrors(formState), [formState]);
  const [response, setResponse] = useState("");

  const handleSubmit = async (event: SyntheticEvent) => {
    try {
      event.preventDefault();
      const { confirmPassword, ...user } = formState;

      const response = await fetchRegister(user);
      setResponse(response);
    } catch (err) {
      if (err instanceof AxiosError) {
        const zodError = err.response?.data.error;
        if (zodError) {
          const errorMessage = zodError.issues
            .map((issue: any) => `${issue.path}: ${issue.message} `)
            .join(", ");
          setResponse(errorMessage);
        } else {
          setResponse(err.response?.data);
        }
      }
    }
  };

  return (
    <form className={Style.container} onSubmit={handleSubmit}>
      {response && <div>{response}</div>}
      {formSchema.map((field) => (
        <InputField
          {...field}
          key={field.name}
          value={formState[field.name]}
          onChange={({ target: { value } }) =>
            updateFormValues({ [field.name]: value })
          }
          error={touchedFields.has(field.name) ? formErrors[field.name] : ""}
        />
      ))}
      <Button type="submit">Sign Up</Button>
    </form>
  );
}

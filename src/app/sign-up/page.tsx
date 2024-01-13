"use client";
import { SyntheticEvent, useCallback, useMemo, useState } from "react";
import Style from "./page.module.scss";
import { FormState } from "./form.types";
import { getDefaultFormValues, getFormErrors } from "./form.utils";
import { formSchema } from "./form.schema";
import { fetchRegister } from "@/api/fetchRegister";
import { AxiosError } from "axios";
import { Button } from "@/components/Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputField } from "@/components/InputField/InputField";

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

  const handleSubmit = async (event: SyntheticEvent) => {
    try {
      event.preventDefault();
      const { confirmPassword, ...user } = formState;

      const response = await fetchRegister(user);
      toast.success(response);
    } catch (err) {
      if (err instanceof AxiosError) {
        const zodError = err.response?.data.error;
        if (zodError) {
          const errorMessage = zodError.issues
            .map((issue: any) => `${issue.path}: ${issue.message} `)
            .join(", ");
          toast.error(errorMessage);
        } else {
          toast.error(err.response?.data);
        }
      }
    }
  };

  return (
    <form className={Style.container} onSubmit={handleSubmit}>
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

"use client";
import { useCallback, useMemo, useState } from "react";
import Style from "./page.module.scss";
import { FormState } from "./form.types";
import { getDefaultFormValues, getFormErrors } from "./form.utils";
import { formSchema } from "./form.schema";
import { InputField } from "@/components/features/InputField/InputField";

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
          error={
            touchedFields.has(field.name) ? formErrors[field.name] : undefined
          }
        />
      ))}
      <Button disabled={touchedFields} type="submit">
        Sign Up
      </Button>
    </form>
  );
}

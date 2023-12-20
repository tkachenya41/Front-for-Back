import { InputHTMLAttributes } from "react";
import Style from "./InputField.module.scss";

export const InputField = ({
  label,
  id,
  error,
  ...inputProperties
}: {
  error?: string;
  label: string;
  shouldFitContainer?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={Style.container}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProperties} />
      {error && <div className={Style["container-error"]}>{error}</div>}
    </div>
  );
};

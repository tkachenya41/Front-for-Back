import { ButtonHTMLAttributes } from "react";

export const ButtonAppearance = {
  Primary: "btn-primary",
  Secondary: "btn-secondary",
} as const;

export type ButtonAppearances =
  (typeof ButtonAppearance)[keyof typeof ButtonAppearance];

export type ButtonProperties = {
  appearance?: ButtonAppearances;
} & ButtonHTMLAttributes<HTMLButtonElement>;

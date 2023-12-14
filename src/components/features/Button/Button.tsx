import { PropsWithChildren } from "react";
import { ButtonAppearance, ButtonProperties } from "./Button.types";
import classNames from "classnames";
import Style from "./Button.module.scss";

export const Button = ({
  appearance = ButtonAppearance.Primary,
  children,
  ...otherProperties
}: PropsWithChildren<ButtonProperties>) => {
  return (
    <button
      {...otherProperties}
      className={`${otherProperties.className || ""} ${classNames({
        [Style.btn]: true,
        [Style[appearance]]: true,
      })}`}
    >
      {children}
    </button>
  );
};

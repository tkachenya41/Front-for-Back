"use client";
import { PropsWithChildren, SyntheticEvent, useState } from "react";
import { ButtonAppearance, ButtonProperties } from "./Button.types";
import classNames from "classnames";
import Style from "./Button.module.scss";
import Loader from "../Loader/Loader";

export const Button = ({
  appearance = ButtonAppearance.Primary,
  children,
  onClick: externalOnClick,
  ...otherProperties
}: PropsWithChildren<ButtonProperties>) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (externalOnClick) {
      externalOnClick(e);
    }
  };
  return (
    <button
      {...otherProperties}
      className={classNames({
        [Style.btn]: true,
        [Style[appearance]]: true,
      })}
      onClick={handleClick}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

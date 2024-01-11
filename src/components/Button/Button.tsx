"use client";
import { PropsWithChildren, useState } from "react";
import { ButtonAppearance, ButtonProperties } from "./Button.types";
import classNames from "classnames";
import Style from "./Button.module.scss";
import Loader from "../Loader/Loader";

export const Button = ({
  appearance = ButtonAppearance.Primary,
  children,
  onClick: externalOnClick,
  className: externalClassName,
  ...otherProperties
}: PropsWithChildren<ButtonProperties>) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  const buttonClasses = {
    [Style.btn]: true,
    [Style[appearance]]: true,
  };
  const combinedClasses = classNames(buttonClasses, externalClassName);
  return (
    <button
      {...otherProperties}
      className={combinedClasses}
      onClick={handleClick}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

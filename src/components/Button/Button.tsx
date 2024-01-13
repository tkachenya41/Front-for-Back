"use client";
import { PropsWithChildren, useState } from "react";
import { ButtonAppearance, ButtonProperties } from "./Button.types";
import classNames from "classnames";
import Style from "./Button.module.scss";
import Loader from "../Loader/Loader";
import Image from "next/image";

export function Button({
  appearance = ButtonAppearance.Primary,
  children,
  iconLeft,
  onClick: externalOnClick,
  className: externalClassName,
  ...otherProperties
}: PropsWithChildren<ButtonProperties>) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);

    if (externalOnClick) {
      externalOnClick(e);
    }

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
      {iconLeft && (
        <Image
          className={Style.icon}
          alt="icon"
          width={25}
          height={25}
          src={iconLeft}
        />
      )}
      {isLoading ? <Loader /> : children}
    </button>
  );
}

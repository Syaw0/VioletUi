import React from "react";
import style from "./fabButton.module.css";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "warning"
    | "success";
  children: React.ReactElement;
}

const Button = ({
  color = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        {...props}
        className={`${style.fab} ${className != null ? className : ""}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

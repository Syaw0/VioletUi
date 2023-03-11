import React from "react";
import style from "./fabButton.module.css";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: "small" | "large";
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
  size = "small",
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        {...props}
        className={`${style.fab} ${className != null ? className : ""} ${
          style[size]
        } ${style[color]}`}
      >
        <div className={style.container}></div>
        <span className={style.content}>{children}</span>
      </button>
    </>
  );
};

export default Button;

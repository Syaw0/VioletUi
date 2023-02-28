import React from "react";
import style from "./button.module.css";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "contained" | "outlined" | "shadow";
  color: "primary" | "secondary" | "tertiary" | "error";
  StartIcon?: (params: any) => JSX.Element;
  EndIcon?: (params: any) => JSX.Element;
}

const Button = ({
  children,
  variant = "contained",
  color = "primary",
  id,
  onClick,
  StartIcon,
  EndIcon,
  disabled = false,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      id={id}
      onClick={onClick}
      className={`${style.button} ${style[color]} ${style[variant]} ${className} `}
      {...props}
    >
      {StartIcon != null && (
        <StartIcon className={style.leftIcon} height="20" width="20" />
      )}
      {children}
      {EndIcon != null && (
        <EndIcon className={style.rightIcon} height="20" width="20" />
      )}
    </button>
  );
};

export default Button;

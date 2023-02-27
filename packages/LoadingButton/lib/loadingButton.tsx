import React from "react";
import style from "./button.module.css";

export interface LoadingButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "contained" | "outlined" | "shadow";
  color: "primary" | "secondary" | "tertiary" | "error";
}

const LoadingButton = ({
  variant = "contained",
  color = "primary",
  className = "",
  ...props
}: LoadingButtonProps) => {
  return (
    <button
      className={`${style.button} ${style[color]} ${style[variant]} ${className} `}
      {...props}
    >
      {props.children}
    </button>
  );
};

export { LoadingButton };

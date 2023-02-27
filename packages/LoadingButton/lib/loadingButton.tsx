import React from "react";
import Loader from "./loader";
import style from "./loadingButton.module.css";

export interface LoadingButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "contained" | "outlined" | "shadow";
  color?: "primary" | "secondary" | "tertiary" | "error";
  loading?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

const LoadingButton = ({
  variant = "contained",
  color = "primary",
  className = "",
  loading = false,
  ...props
}: LoadingButtonProps) => {
  return (
    <button
      className={`${style.button} ${style[color]} ${style[variant]} ${
        loading ? style[variant] : ""
      } ${className} `}
      {...props}
    >
      {props.startIcon != null ? loading ? <Loader /> : props.startIcon : ""}
      {props.children}

      {props.endIcon != null ? loading ? <Loader /> : props.endIcon : ""}
    </button>
  );
};

export { LoadingButton };

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
  loaderText?: string;
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
      {!loading ? (
        props.children
      ) : props.startIcon || props.endIcon ? (
        props.loaderText ? (
          props.loaderText
        ) : (
          props.children
        )
      ) : props.loaderText ? (
        props.loaderText
      ) : (
        <Loader />
      )}

      {props.endIcon != null ? loading ? <Loader /> : props.endIcon : ""}
    </button>
  );
};

export default LoadingButton;

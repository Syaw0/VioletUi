import React from "react";
import ElevatedButton from "./elevated";
import FilledButton from "./filled";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "contained" | "outlined" | "shadow" | "elevated" | "filled";
  color: "primary" | "secondary" | "tertiary" | "error";
  StartIcon?: React.ReactElement;
  EndIcon?: React.ReactElement;
}

const Button = ({ variant = "contained", ...props }: ButtonProps) => {
  return (
    <>
      {variant == "elevated" && <ElevatedButton {...props} />}
      {variant == "filled" && <FilledButton {...props} />}
    </>
    // <button
    //   id={id}
    //   onClick={onClick}
    //   className={`${style.button} ${style[color]} ${style[variant]} ${className} `}
    //   {...props}
    // >
    //   <div className={style.container}></div>
    //   <p className={style.label}>{children}</p>
    //   {/* {StartIcon != null && (
    //     <StartIcon className={style.leftIcon} height="20" width="20" />
    //   )}

    //   {EndIcon != null && (
    //     <EndIcon className={style.rightIcon} height="20" width="20" />
    //   )} */}
    //   <span className={style.stateLayer}></span>
    // </button>
  );
};

export default Button;

import React from "react";
import ElevatedButton from "./elevated";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "contained" | "outlined" | "shadow" | "elevated";
  color: "primary" | "secondary" | "tertiary" | "error";
  StartIcon?: (params: any) => JSX.Element;
  EndIcon?: (params: any) => JSX.Element;
}

const Button = ({ variant = "contained", ...props }: ButtonProps) => {
  return (
    <>{variant == "elevated" && <ElevatedButton {...props} />}</>
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

import React from "react";
import ElevatedButton from "./elevated";
import FilledButton from "./filled";
import FilledTonalButton from "./filledTonal";
import OutlinedButton from "./outlined";
import TextButton from "./text";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "outlined" | "elevated" | "filled" | "filledTonal" | "text";
  color: "primary" | "secondary" | "tertiary" | "error";
  StartIcon?: React.ReactElement;
  EndIcon?: React.ReactElement;
}

const Button = ({ variant = "filled", ...props }: ButtonProps) => {
  return (
    <>
      {variant == "elevated" && <ElevatedButton {...props} />}
      {variant == "filled" && <FilledButton {...props} />}
      {variant == "filledTonal" && <FilledTonalButton {...props} />}
      {variant == "outlined" && <OutlinedButton {...props} />}
      {variant == "text" && <TextButton {...props} />}
    </>
  );
};

export default Button;

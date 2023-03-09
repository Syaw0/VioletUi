import React from "react";
import ElevatedButton from "./elevated/elevated";
import FilledButton from "./filled/filled";
import FilledTonalButton from "./filledTonal/filledTonal";
import OutlinedButton from "./outlined/outlined";
import TextButton from "./text/text";

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

import React from "react";
import ElevatedButton from "./elevated/elevated";
import FilledButton from "./filled/filled";
import FilledTonalButton from "./filledTonal/filledTonal";
import OutlinedButton from "./outlined/outlined";
import TextButton from "./text/text";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "outlined" | "elevated" | "filled" | "filledTonal" | "text";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "warning"
    | "success";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

const Button = ({
  variant = "filled",
  color = "primary",
  ...props
}: ButtonProps) => {
  return (
    <>
      {variant == "elevated" && <ElevatedButton {...props} color={color} />}
      {variant == "filled" && <FilledButton {...props} color={color} />}
      {variant == "filledTonal" && (
        <FilledTonalButton {...props} color={color} />
      )}
      {variant == "outlined" && <OutlinedButton {...props} color={color} />}
      {variant == "text" && <TextButton {...props} color={color} />}
    </>
  );
};

export default Button;

import React from "react";
import FilledIconButton from "./filled/filled";
import FilledTonalIconButton from "./filledTonal/filledTonal";

export interface IconButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color: "primary" | "secondary" | "tertiary" | "error" | "warning" | "success";
  variant: "filled" | "filledTonal" | "outlined" | "standard";
  selected?: boolean;
  children: React.ReactElement;
}

const IconButton = ({
  color = "primary",
  className = "",
  variant = "filled",
  ...props
}: IconButtonProps) => {
  return (
    <>
      {variant === "filled" && <FilledIconButton {...props} color={color} />}{" "}
      {variant === "filledTonal" && (
        <FilledTonalIconButton {...props} color={color} />
      )}
    </>
  );
};

export default IconButton;

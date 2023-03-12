import React from "react";
import FilledIconButton from "./filled/filled";

export interface IconButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color: "primary" | "secondary" | "tertiary" | "error";
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
    <>{variant === "filled" && <FilledIconButton {...props} color={color} />}</>
  );
};

export default IconButton;

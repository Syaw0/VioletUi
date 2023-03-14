import React from "react";

export interface CardProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "outlined" | "elevated" | "filled";
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

const Card = ({
  variant = "filled",
  color = "primary",
  ...props
}: CardProps) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export default Card;

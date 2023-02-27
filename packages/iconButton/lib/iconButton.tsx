import React from "react";
import style from "./iconButton.module.css";

export interface IconButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color: "primary" | "secondary" | "tertiary" | "error";
}

const IconButton = ({
  color = "primary",
  className = "",
  ...props
}: IconButtonProps) => {
  return (
    <button
      {...props}
      className={`${style.button} ${style[color]} ${className} `}
    >
      {props.children}
    </button>
  );
};

export { IconButton };

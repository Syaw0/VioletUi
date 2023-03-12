import React, { useRef, useState } from "react";
import style from "./iconButton.module.css";
import useIconButtonEvents from "./useIconButtonEvents";

export interface IconButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color: "primary" | "secondary" | "tertiary" | "error";
  children: React.ReactElement;
}

const IconButton = ({
  color = "primary",
  className = "",
  disabled = false,
  ...props
}: IconButtonProps) => {
  const btn: any = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { handleFocus, handleHover, handleMouseDown } = useIconButtonEvents(
    disabled,
    setIsClicked,
    isClicked,
    btn,
    isHover,
    setIsHover
  );

  return (
    <button
      {...props}
      className={`${style.iconButton} ${style[color]} ${className} `}
      onMouseDown={(e) => {
        handleMouseDown(e);
        props.onMouseDown && props.onMouseDown(e);
      }}
      onFocus={(e) => {
        handleFocus();
        props.onFocus && props.onFocus(e);
      }}
      onMouseOver={(e) => {
        handleHover();
        props.onMouseOver && props.onMouseOver(e);
      }}
      ref={btn}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};

export default IconButton;

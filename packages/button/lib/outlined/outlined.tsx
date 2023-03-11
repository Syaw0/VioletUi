import React, { useRef, useState } from "react";
import useOutlinedEvents from "./useOutlinedEvents";
import style from "./outlined.module.css";

export interface OutlinedButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color: "primary" | "secondary" | "tertiary" | "error" | "warning" | "success";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

const OutlinedButton = ({
  children,
  color = "primary",
  startIcon,
  endIcon,
  className = "",
  disabled = false,
  ...props
}: OutlinedButtonProps) => {
  const btn: any = useRef(null);

  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { handleMouseDown, handleFocus, handleHover } = useOutlinedEvents(
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
      className={`${style.outlined} ${style[color]} ${
        startIcon != null ? style.withLeftIcon : ""
      } ${endIcon != null ? style.withRightIcon : ""} ${className} `}
      disabled={disabled}
    >
      {startIcon != null && (
        <span className={style.startIcon}>{startIcon}</span>
      )}
      <p className={style.label}>{children}</p>
      {endIcon != null && <span className={style.endIcon}>{endIcon}</span>}
      <div className={style.container}></div>
    </button>
  );
};

export default OutlinedButton;

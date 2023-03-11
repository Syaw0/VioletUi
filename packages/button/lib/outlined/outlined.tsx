import React, { useRef, useState } from "react";
import useElevatedEvents from "./hooks";
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
  const hoverStateSpan: any = useRef(null);
  const btn: any = useRef(null);

  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const {
    handleMouseDown,

    handleFocus,
    handleHover,
    handleUnHover,
  } = useElevatedEvents(
    disabled,
    setIsClicked,
    isClicked,
    btn,
    isHover,
    setIsHover,
    hoverStateSpan
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
      onMouseLeave={(e) => {
        handleUnHover();
        props.onMouseLeave && props.onMouseLeave(e);
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

      <span ref={hoverStateSpan} className={style.stateLayer}></span>
    </button>
  );
};

export default OutlinedButton;

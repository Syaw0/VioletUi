import React, { useRef, useState } from "react";
import useElevatedEvents from "./hooks";
import style from "./text.module.css";

export interface TextButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color: "primary" | "secondary" | "tertiary" | "error";
  StartIcon?: React.ReactElement;
  EndIcon?: React.ReactElement;
}

const TextButton = ({
  children,
  color = "primary",
  StartIcon,
  EndIcon,
  className = "",
  disabled = false,
  ...props
}: TextButtonProps) => {
  const hoverStateSpan: any = useRef(null);
  const pressStateSpan: any = useRef(null);
  const btn: any = useRef(null);

  const [isClicked, setIsClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const {
    handleMouseDown,
    handleMouseUp,
    handleBlur,
    handleFocus,
    handleHover,
    handleUnHover,
  } = useElevatedEvents(
    disabled,
    setIsClicked,
    isClicked,
    pressStateSpan,
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
      onMouseUp={(e) => {
        handleMouseUp();
        props.onMouseUp && props.onMouseUp(e);
      }}
      onFocus={(e) => {
        handleFocus();
        props.onFocus && props.onFocus(e);
      }}
      onBlur={(e) => {
        handleBlur();
        props.onBlur && props.onBlur(e);
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
      className={`${style.text} ${style[color]} ${
        StartIcon != null ? style.withLeftIcon : ""
      } ${EndIcon != null ? style.withRightIcon : ""} ${className} `}
      disabled={disabled}
    >
      {StartIcon != null && (
        <span className={style.startIcon}>{StartIcon}</span>
      )}
      <p className={style.label}>{children}</p>
      {EndIcon != null && <span className={style.endIcon}>{EndIcon}</span>}
      <div className={style.container}></div>

      <span ref={hoverStateSpan} className={style.stateLayer}></span>
      <span ref={pressStateSpan} className={style.stateLayer}></span>
    </button>
  );
};

export default TextButton;

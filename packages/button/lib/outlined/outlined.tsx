import React, { useRef, useState } from "react";
import {
  fadeHoverSpan,
  fadeHoverTiming,
  fadePressSpan,
  fadePressTiming,
  growHoverSpan,
  growHoverTiming,
  growPressSpan,
  growPressTiming,
} from "../animations";
import style from "./outlined.module.css";

export interface OutlinedButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color: "primary" | "secondary" | "tertiary" | "error";
  StartIcon?: React.ReactElement;
  EndIcon?: React.ReactElement;
}

const OutlinedButton = ({
  children,
  color = "primary",
  StartIcon,
  EndIcon,
  className = "",
  ...props
}: OutlinedButtonProps) => {
  const hoverStateSpan: any = useRef(null);
  const pressStateSpan: any = useRef(null);
  const btn: any = useRef(null);

  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (props.disabled) {
      return;
    }
    setIsClicked(true);

    const span = pressStateSpan.current as HTMLSpanElement;
    const { top, left } = e.currentTarget.getBoundingClientRect();
    span.style.left = e.clientX - left + "px";
    span.style.top = e.clientY - top + "px";
    span.style.borderRadius = "50%";
    span.style.width = "100%";
    span.style.height = "100%";
    span.animate(growPressSpan, growPressTiming);
    btn.current.style.boxShadow = "none";
  };
  const handleMouseUp = () => {
    if (props.disabled) {
      return;
    }
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.animate(fadePressSpan, fadePressTiming);
    btn.current.style.boxShadow = "none";
    btn.current.blur();
    setIsClicked(false);
  };
  const handleFocus = () => {
    if (props.disabled) {
      return;
    }
    if (isClicked) {
      return;
    }
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.style.width = "100%";
    span.style.height = "100%";
    span.animate(growPressSpan, growPressTiming);
    btn.current.style.boxShadow = "none";
  };
  const handleBlur = () => {
    if (props.disabled) {
      return;
    }
    if (isClicked) {
      return;
    }
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.animate(fadePressSpan, fadePressTiming);
  };
  const handleHover = () => {
    if (props.disabled) {
      return;
    }
    if (isClicked || isHover) {
      return;
    }
    const span = hoverStateSpan.current as HTMLSpanElement;
    span.style.width = "200%";
    span.style.height = "200%";
    span.style.borderRadius = "0";
    span.animate(growHoverSpan, growHoverTiming);
    btn.current.style.boxShadow = "none";
    setIsHover(true);
  };
  const handleUnHover = () => {
    if (props.disabled) {
      return;
    }
    const span = hoverStateSpan.current as HTMLSpanElement;
    span.animate(fadeHoverSpan, fadeHoverTiming);
    btn.current.style.boxShadow = "none";
    setIsHover(false);
  };

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
      className={`${style.outlined} ${style[color]} ${
        StartIcon != null ? style.withLeftIcon : ""
      } ${EndIcon != null ? style.withRightIcon : ""} ${className} `}
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

export default OutlinedButton;

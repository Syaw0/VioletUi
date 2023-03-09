import React, { useRef, useState } from "react";
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
  const [isClicked, setIsClicked] = useState(false);
  const keyframe = [
    { width: "0px", height: "0px", opacity: "12%" },
    { transform: "scale(3)", opacity: "12%" },
  ];
  const keyframe2 = [{ opacity: "12%" }, { opacity: 0 }];
  const timing: KeyframeAnimationOptions = {
    duration: 900,
    fill: "both",
    easing: "ease",
  };
  const keyframe3 = [{ opacity: "0" }, { opacity: "8%" }];

  const keyframe4 = [{ opacity: "8%" }, { opacity: "0" }];
  const timing3: KeyframeAnimationOptions = {
    duration: 500,
    fill: "both",
    easing: "ease",
  };

  const timing2: KeyframeAnimationOptions = {
    duration: 800,
    fill: "both",
    easing: "ease",
  };

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
    span.animate(keyframe, timing);
    btn.current.style.boxShadow = "none";
  };
  const handleMouseUp = () => {
    if (props.disabled) {
      return;
    }
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.animate(keyframe2, timing2);
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
    span.animate(keyframe, timing);
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
    span.animate(keyframe2, timing2);
  };
  const handleHover = () => {
    if (props.disabled) {
      return;
    }
    if (isClicked) {
      return;
    }
    const span = hoverStateSpan.current as HTMLSpanElement;
    span.style.width = "200%";
    span.style.height = "200%";
    span.style.borderRadius = "0";
    span.animate(keyframe3, timing2);
    btn.current.style.boxShadow = "none";
  };
  const handleUnHover = () => {
    if (props.disabled) {
      return;
    }
    const span = hoverStateSpan.current as HTMLSpanElement;
    span.animate(keyframe4, timing3);
    btn.current.style.boxShadow = "none";
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

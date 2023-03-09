import React, { useRef, useState } from "react";
import style from "./filled.module.css";

export interface ElevatedButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color: "primary" | "secondary" | "tertiary" | "error";
  StartIcon?: React.ReactElement;
  EndIcon?: React.ReactElement;
}

const FilledButton = ({
  children,
  color = "primary",
  StartIcon,
  EndIcon,
  className = "",
  ...props
}: ElevatedButtonProps) => {
  const hoverStateSpan: any = useRef(null);
  const pressStateSpan: any = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const btn: any = useRef(null);
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
    span.style.left = e.pageX - left + "px";
    span.style.top = e.pageY - top + "px";
    span.style.borderRadius = "50%";
    span.style.width = "100%";
    span.style.height = "100%";
    span.style.transition = "width 1s ,height 1s";
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
    span.style.transition = "width 1s ,height 1s";
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
    btn.current.style.boxShadow = "var(--shadow1dp)";
  };
  const handleHover = () => {
    if (props.disabled) {
      return;
    }

    btn.current.style.boxShadow = "var(--shadow1dp)";
  };
  const handleUnHover = () => {
    if (props.disabled) {
      return;
    }

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
      className={`${style.filled} ${style[color]} ${
        StartIcon != null ? style.withLeftIcon : ""
      } ${EndIcon != null ? style.withRightIcon : ""} ${className} `}
    >
      <div className={style.container}></div>

      {StartIcon != null && (
        <span className={style.startIcon}>{StartIcon}</span>
      )}
      <p className={style.label}>{children}</p>
      {EndIcon != null && <span className={style.endIcon}>{EndIcon}</span>}
      <span ref={hoverStateSpan} className={style.stateLayer}></span>
      <span ref={pressStateSpan} className={style.stateLayer}></span>
    </button>
  );
};

export default FilledButton;

import React, { useRef, useState } from "react";
import style from "./elevated.module.css";

export interface ElevatedButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color: "primary" | "secondary" | "tertiary" | "error";
  StartIcon?: React.ReactElement;
  EndIcon?: React.ReactElement;
}

const ElevatedButton = ({
  children,
  color = "primary",
  id,
  onClick,
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
  const timing = {
    duration: 900,
    fill: "both",
    easing: "ease",
  };
  const keyframe3 = [{ opacity: "0" }, { opacity: "8%" }];

  const keyframe4 = [{ opacity: "8%" }, { opacity: "0" }];
  const timing3 = {
    duration: 500,
    fill: "both",
    easing: "ease",
  };

  const timing2 = {
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
    btn.current.style.boxShadow = "var(--shadow1dp)";
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (props.disabled) {
      return;
    }
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.animate(keyframe2, timing2);
    btn.current.style.boxShadow = "var(--shadow1dp)";
    btn.current.blur();
    setIsClicked(false);
  };
  const handleFocus = (e: any) => {
    if (props.disabled) {
      return;
    }
    if (isClicked) {
      return;
    }
    console.log(e);
    const span = pressStateSpan.current as HTMLSpanElement;
    span.style.borderRadius = "50%";
    span.style.width = "100%";
    span.style.height = "100%";
    span.style.transition = "width 1s ,height 1s";
    span.animate(keyframe, timing);
    btn.current.style.boxShadow = "var(--shadow1dp)";
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
  const handleHover = (e: React.MouseEvent) => {
    if (props.disabled) {
      return;
    }
    const span = hoverStateSpan.current as HTMLSpanElement;
    const { top, left } = e.currentTarget.getBoundingClientRect();
    console.log(e.pageX, e.pageY, e.pageY - top, e.pageX - left);
    span.style.width = "200%";
    span.style.height = "200%";
    span.style.borderRadius = "0";
    span.animate(keyframe3, timing2);
    console.log("hover");
    btn.current.style.boxShadow = "var(--shadow2dp)";
  };
  const handleUnHover = (e: React.MouseEvent) => {
    if (props.disabled) {
      return;
    }
    const span = hoverStateSpan.current as HTMLSpanElement;
    span.animate(keyframe4, timing3);
    console.log("no hover");
  };

  return (
    <button
      {...props}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseOver={handleHover}
      onMouseLeave={handleUnHover}
      ref={btn}
      className={`${style.elevated} ${style[color]} ${
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

export default ElevatedButton;

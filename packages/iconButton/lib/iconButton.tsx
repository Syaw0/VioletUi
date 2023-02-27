import React, { useRef } from "react";
import { keyframe, keyframe2, timing, timing2 } from "./animation";
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
  const ref: any = useRef(null);
  const clickHandle = () => {
    const span = ref.current as HTMLSpanElement;
    span.animate(keyframe, timing);
  };

  const mouseDownHandler = () => {
    const span = ref.current as HTMLSpanElement;
    span.animate(keyframe2, timing2);
  };

  return (
    <button
      {...props}
      className={`${style.button} ${style[color]} ${className} `}
      onClick={(e) => {
        clickHandle();
        props && props.onClick && props.onClick(e);
      }}
      onMouseDown={(e) => {
        mouseDownHandler();
        props && props.onMouseDown && props.onMouseDown(e);
      }}
    >
      {props.children}
      <span ref={ref} className={style.span}></span>
    </button>
  );
};

export { IconButton };

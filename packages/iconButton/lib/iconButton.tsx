import React, { useRef } from "react";
import {
  keyframe,
  keyframe2,
  keyframe3,
  timing,
  timing2,
  timing3,
} from "./animation";
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
    const mouseupHandler = () => {
      const span = ref.current as HTMLSpanElement;
      span.animate(keyframe3, timing3);
      document.removeEventListener("mouseup", mouseupHandler);
    };
    document.addEventListener("mouseup", mouseupHandler);
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

export default IconButton;

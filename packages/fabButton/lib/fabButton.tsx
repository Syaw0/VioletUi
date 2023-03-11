import React, { useRef, useState } from "react";
import style from "./fabButton.module.css";
import useFabButtonEvents from "./useFabButtonEvents";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: "small" | "large" | "medium";
  elevationLevel?: "default" | "small";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "warning"
    | "success";
  children: React.ReactElement;
}

const Button = ({
  color = "primary",
  children,
  disabled = false,
  className,
  elevationLevel = "default",
  size = "small",
  ...props
}: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const btn: any = useRef(null);
  const { handleFocus, handleHover, handleMouseDown } = useFabButtonEvents(
    disabled,
    setIsClick,
    isClick,
    btn,
    isHover,
    setIsHover,
    elevationLevel
  );
  return (
    <>
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
        disabled={disabled}
        className={`${style.fab} ${className != null ? className : ""} ${
          style[size]
        } ${style[color]} ${
          elevationLevel == "default" ? style.defaultShadow : style.smallShadow
        }`}
      >
        <div className={style.container}></div>
        <span className={style.content}>{children}</span>
      </button>
    </>
  );
};

export default Button;

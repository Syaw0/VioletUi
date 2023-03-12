import React, { useRef, useState } from "react";
import style from "./outlined.module.css";
import useOutlinedIconButtonEvents from "./useOutlinedIconButtonEvents";

export interface IconButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "warning"
    | "success"
    | "neutral";
  children: React.ReactElement;
  selected?: boolean;
}

const OutlinedIconButton = ({
  color = "primary",
  className = "",
  disabled = false,
  selected,
  ...props
}: IconButtonProps) => {
  const btn: any = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { handleFocus, handleHover, handleMouseDown } =
    useOutlinedIconButtonEvents(
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
      className={`${style.outlined} ${style[color]} ${
        selected != null
          ? selected
            ? style.selected
            : style.notSelected
          : style.notToggle
      }  ${className} `}
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
    >
      <div className={style.container}></div>
      <span className={style.icon}>{props.children}</span>
    </button>
  );
};

export default OutlinedIconButton;

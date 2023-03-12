import React, { useRef, useState } from "react";
import style from "./filled.module.css";
import useFilledIconButtonEvents from "./useFilledIconButtonEvents";

export interface IconButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  color: "primary" | "secondary" | "tertiary" | "error";
  children: React.ReactElement;
  selected?: boolean;
}

const FilledIconButton = ({
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
    useFilledIconButtonEvents(
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
      className={`${style.filled} ${style[color]} ${
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

export default FilledIconButton;

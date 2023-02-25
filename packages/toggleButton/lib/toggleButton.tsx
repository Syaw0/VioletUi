import style from "./toggleButton.module.css";
import React from "react";
import "../../../t.css";

interface ToggleButton extends React.ComponentPropsWithoutRef<"div"> {
  selected?: boolean;
  value: string;
  changeHandler?: (e: React.MouseEvent, newValue: string | string[]) => void;
  groupValue?: string | string[];
}

const ToggleButton = ({
  selected = false,
  changeHandler,
  value,
  groupValue,
  ...props
}: ToggleButton) => {
  const handleClick = (e: React.MouseEvent) => {
    if (changeHandler != null) {
      if (selected) {
        changeHandler(e, "");
      } else {
        changeHandler(e, value);
      }
    }
  };
  return (
    <div
      {...props}
      className={`${style.holder} ${selected ? style.selected : ""}`}
      onClick={(e) => {
        handleClick(e);
        props && props.onClick && props.onClick(e);
      }}
    >
      {props.children}
    </div>
  );
};
export { ToggleButton };

import style from "./toggleButton.module.css";
import React from "react";
import "../../../t.css";

interface ToggleButton extends React.ComponentPropsWithoutRef<"div"> {
  selected?: boolean;
  value: string;
  disabled?: boolean;
  changeHandler?: (e: React.MouseEvent, newValue: string | string[]) => void;
  groupValue?: string | string[];
}

const ToggleButton = ({
  selected = false,
  changeHandler,
  value,
  groupValue,
  disabled,
  ...props
}: ToggleButton) => {
  const handleClick = (e: React.MouseEvent) => {
    if (changeHandler != null && groupValue != null) {
      changeHandler(e, getNewValues());
    }
  };

  const getNewValues = () => {
    if (typeof groupValue != "string" && groupValue != null) {
      return selected
        ? groupValue.filter((v) => v != value)
        : [...groupValue, value];
    } else {
      return selected ? "" : value;
    }
  };

  return (
    <div
      {...props}
      className={`${style.holder} ${selected ? style.selected : ""} ${
        disabled ? style.disabled : ""
      } `}
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

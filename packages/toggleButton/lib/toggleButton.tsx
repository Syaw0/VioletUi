import style from "./toggleButton.module.css";
import React from "react";
import "../../../t.css";

interface ToggleButton extends React.ComponentPropsWithoutRef<"div"> {
  selected: boolean;
  value: string;
}

const ToggleButton = ({ selected = false, ...props }: ToggleButton) => {
  return (
    <div
      {...props}
      className={`${style.holder} ${selected ? style.selected : ""}`}
    >
      {props.children}
    </div>
  );
};
export { ToggleButton };

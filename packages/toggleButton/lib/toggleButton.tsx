import style from "./toggleButton.module.css";
import React from "react";
import "../../../t.css";

interface ToggleButton extends React.ComponentPropsWithoutRef<"div"> {}

const ToggleButton = ({ color = "primary", ...props }: ToggleButton) => {
  return <div className={style.holder}></div>;
};
export { ToggleButton };

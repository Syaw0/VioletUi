import style from "./toggleButtonGroup.module.css";
import React from "react";
import "../../../t.css";

interface toggleButtonGroupTypes
  extends React.ComponentPropsWithoutRef<"div"> {}

const ToggleButtonGroup = ({ ...props }: toggleButtonGroupTypes) => {
  return <div {...props} className={`${style.holder} `}></div>;
};
export { ToggleButtonGroup };

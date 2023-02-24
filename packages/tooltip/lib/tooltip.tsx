import style from "./tooltip.module.css";
import React from "react";
import "../../../t.css";

interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
  text: string;
}

const Tooltip = ({ text, ...props }: AlertProps) => {
  return (
    <div className={style.holder}>
      <div className={style.tooltipHolder} {...props}>
        <p>{text}</p>
      </div>
      {props.children}
    </div>
  );
};
export { Tooltip };

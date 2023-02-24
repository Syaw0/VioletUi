import style from "./badge.module.css";
import React from "react";
import "../../../t.css";

interface BadgeProps extends React.ComponentPropsWithoutRef<"div"> {
  text: string;
}

const Badge = ({ text, ...props }: BadgeProps) => {
  return <div className={style.holder}></div>;
};
export { Badge };

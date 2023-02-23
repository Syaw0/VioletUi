import style from "./alert.module.css";
import React from "react";

interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
  type: "warning" | "error" | "success" | "info";
}

const Alert = ({}: AlertProps) => {
  return <div className={style.holder}></div>;
};
export { Alert };

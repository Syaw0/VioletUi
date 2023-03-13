import style from "./snackbar.module.css";
import React from "react";
import "../../../t.css";

interface SnackbarProps extends React.ComponentPropsWithoutRef<"div"> {}

const Snackbar = ({ className }: SnackbarProps) => {
  return <div className={`${style.holder} ${className}`}></div>;
};
export default Snackbar;

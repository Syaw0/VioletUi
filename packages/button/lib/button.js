import React from "react";
import style from "./button.module.css";

const Button = ({ children }) => (
  <button className={style.button}>{children}</button>
);
export { Button };

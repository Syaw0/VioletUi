import style from "./text.module.css";
import React from "react";

const Text = ({ children }: any) => <p className={style.text}>{children}</p>;
export { Text };

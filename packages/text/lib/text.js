import style from "./text.module.css";

import React from "react";
const Text = ({ children }) => <p className={style.text}>{children}</p>;
export { Text };

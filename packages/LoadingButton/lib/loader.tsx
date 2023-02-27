import style from "./loadingButton.module.css";
import React from "react";

const Loader = () => {
  return (
    <div className={style.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;

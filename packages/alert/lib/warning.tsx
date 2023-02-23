import React from "react";
import style from "./alert.module.css";

const Warning = ({ props, title, variant }: Alert) => {
  return (
    <div
      {...props}
      className={`${style.alertHolder} ${style.warning} ${
        props.className != null ? props.className : ""
      }`}
    >
      {title !== "" && <p className={style.title}>{title}</p>}
      <p className={style.subText}>{props.children}</p>
    </div>
  );
};

export default Warning;

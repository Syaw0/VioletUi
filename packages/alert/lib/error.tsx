import React from "react";
import style from "./alert.module.css";
import IconError from "./icons/errorIcon";

const Error = ({ props, title, hideIcon, variant = "default" }: Alert) => {
  return (
    <div
      {...props}
      className={`${style.alertHolder} ${style.error} ${style[variant]} ${
        props.className != null ? props.className : ""
      }`}
    >
      {!hideIcon && (
        <div className={style.iconHolder}>
          <IconError className={style.icon} />
        </div>
      )}
      <div className={style.textHolder}>
        {title !== "" && <p className={style.title}>{title}</p>}
        <p className={style.subText}>{props.children}</p>
      </div>
    </div>
  );
};

export default Error;

import React from "react";
import style from "./alert.module.css";
import IconInfo from "./icons/infoIcon";

const Info = ({ props, title, hideIcon, variant = "default" }: Alert) => {
  return (
    <div
      {...props}
      className={`${style.alertHolder} ${style.info} ${style[variant]} ${
        props.className != null ? props.className : ""
      }`}
    >
      {!hideIcon && (
        <div className={style.iconHolder}>
          <IconInfo className={style.icon} />
        </div>
      )}
      <div className={style.textHolder}>
        {title !== "" && <p className={style.title}>{title}</p>}
        <p className={style.subText}>{props.children}</p>
      </div>
    </div>
  );
};

export default Info;

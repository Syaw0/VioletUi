import React from "react";
import style from "./alert.module.css";
import IconWarning from "./icons/warning";

const Warning = ({ props, title, hideIcon, variant }: Alert) => {
  return (
    <div
      {...props}
      className={`${style.alertHolder} ${style.warning} ${
        props.className != null ? props.className : ""
      }`}
    >
      {!hideIcon && (
        <div className={style.iconHolder}>
          <IconWarning className={style.icon} />
        </div>
      )}
      <div className={style.textHolder}>
        {title !== "" && <p className={style.title}>{title}</p>}
        <p className={style.subText}>{props.children}</p>
      </div>
    </div>
  );
};

export default Warning;

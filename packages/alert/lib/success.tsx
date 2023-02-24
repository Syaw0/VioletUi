import React from "react";
import style from "./alert.module.css";
import IconClose from "./icons/closeIcon";
import IconSuccess from "./icons/successIcon";

const Success = ({ props, title, hideIcon, variant = "default" }: Alert) => {
  return (
    <div
      {...props}
      className={`${style.alertHolder} ${style.success} ${style[variant]} ${
        props.className != null ? props.className : ""
      }`}
    >
      {!hideIcon && (
        <div className={style.iconHolder}>
          <IconSuccess className={style.icon} />
        </div>
      )}
      <div className={style.textHolder}>
        <div>
          {title !== "" && <p className={style.title}>{title}</p>}
          <p className={style.subText}>{props.children}</p>
        </div>
        <div className={style.closeIconHolder}>
          {props.onClose != null && (
            <IconClose onClick={props.onClose} className={style.icon} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Success;

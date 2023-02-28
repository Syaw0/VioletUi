import style from "./avatar.module.css";
import React from "react";
import "../../../t.css";
import FallBackIcon from "./fallBackIcon";

interface AvatarProps extends React.ComponentPropsWithoutRef<"div"> {
  alt?: string;
  src?: string;
  size?: "small" | "medium" | "large";
}

const Avatar = ({ size = "medium", src, alt = "", ...props }: AvatarProps) => {
  console.log(src == null, props.children == null);
  return (
    <div
      {...props}
      className={`${style.holder} ${style[size]} ${
        props.className != null ? props.className : ""
      }`}
    >
      {src != null && (
        <img className={style.imgHolder} src={src} alt={alt}></img>
      )}
      {src == null && props.children != null && props.children}
      {src == null && props.children == null && (
        <FallBackIcon className={style.fallbackIcon} />
      )}
    </div>
  );
};
export { Avatar };

import style from "./avatar.module.css";
import React from "react";
import "../../../t.css";
import FallBackIcon from "./fallBackIcon";

interface AvatarProps extends React.ComponentPropsWithoutRef<"div"> {
  alt?: string;
  src?: string;
  size?: "small" | "medium" | "large";
  variant?: "round" | "square" | "circle";
}

const Avatar = ({
  size = "medium",
  variant = "circle",
  src,
  alt = "",
  ...props
}: AvatarProps) => {
  return (
    <div
      {...props}
      className={`${style.holder} ${style[size]} ${style[variant]} ${
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

export default Avatar;

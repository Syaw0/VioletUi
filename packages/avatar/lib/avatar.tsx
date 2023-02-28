import style from "./avatar.module.css";
import React from "react";
import "../../../t.css";

interface AvatarProps extends React.ComponentPropsWithoutRef<"div"> {
  alt?: string;
  src?: string;
  size?: "small" | "medium" | "large";
}

const Avatar = ({
  size = "medium",
  src = "",
  alt = "",
  ...props
}: AvatarProps) => {
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
    </div>
  );
};
export { Avatar };

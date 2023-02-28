import style from "./avatar.module.css";
import React from "react";
import "../../../t.css";

interface AvatarGroupProps extends React.ComponentPropsWithoutRef<"div"> {}

const AvatarGroup = ({ ...props }: AvatarGroupProps) => {
  return (
    <div
      {...props}
      className={`${style.holder} ${
        props.className != null ? props.className : ""
      }`}
    ></div>
  );
};
export { AvatarGroup };

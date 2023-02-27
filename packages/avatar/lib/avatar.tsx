import style from "./avatar.module.css";
import React from "react";
import "../../../t.css";

interface AvatarProps extends React.ComponentPropsWithoutRef<"div"> {}

const Avatar = ({ ...props }: AvatarProps) => {
  return <div className={style.holder} {...props}></div>;
};
export { Avatar as Alert };

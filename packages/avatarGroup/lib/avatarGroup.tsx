import style from "./avatarGroup.module.css";
import React, { Children } from "react";
import "../../../t.css";
import { Avatar } from "@violetui/avatar";
interface AvatarGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  max?: number;
  total?: number;
}

const AvatarGroup = ({ total, max = 4, ...props }: AvatarGroupProps) => {
  const avatars = Children.toArray(props.children);
  return (
    <div
      {...props}
      className={`${style.holder} ${
        props.className != null ? props.className : ""
      }`}
    >
      {avatars.map((child, index) => {
        return index < max && child;
      })}
      <Avatar>
        +{total != null ? total + max - avatars.length : avatars.length - max}
      </Avatar>
    </div>
  );
};
export { AvatarGroup };

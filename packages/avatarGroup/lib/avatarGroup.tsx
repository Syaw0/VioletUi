import style from "./avatarGroup.module.css";
import React, { Children } from "react";
import "../../../t.css";
import { Avatar } from "@violetui/avatar";
interface AvatarGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  max?: number;
  total?: number;
}

const AvatarGroup = ({ total, max = 4, ...props }: AvatarGroupProps) => {
  return (
    <div
      {...props}
      className={`${style.holder} ${
        props.className != null ? props.className : ""
      }`}
    >
      {Children.map(props.children, (child, index) => {
        return index < max && child;
      })}
      <Avatar>
        +
        {total != null
          ? total + max - Children.count(props.children)
          : Children.count(props.children) - max}
      </Avatar>
    </div>
  );
};
export { AvatarGroup };

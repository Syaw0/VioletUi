import style from "./badge.module.css";
import React from "react";
import "../../../t.css";

interface BadgeProps extends React.ComponentPropsWithoutRef<"div"> {
  content: number;
  color?: "primary" | "secondary" | "tertiary";
  hideBadge?: boolean;
  max?: number;
}

const Badge = ({
  color = "primary",
  hideBadge = false,
  content,
  max = 99,
  ...props
}: BadgeProps) => {
  return (
    <div className={style.holder}>
      {!hideBadge && (
        <div className={style.badgeHolder} {...props}>
          <p>{content > max ? `${max}+` : content}</p>
        </div>
      )}
      {props.children}
    </div>
  );
};
export { Badge };

import style from "./badge.module.css";
import React from "react";
import "../../../t.css";

interface BadgeProps extends React.ComponentPropsWithoutRef<"div"> {
  content?: number;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "warning"
    | "success";
  hideBadge?: boolean;

  variant?: "small" | "large";
}

const Badge = ({
  color = "error",
  hideBadge = false,
  content,
  variant = "large",
  ...props
}: BadgeProps) => {
  return (
    <div className={`${style.badge} ${style[color]}`}>
      {!hideBadge && (
        <div className={`${style.badgeHolder} ${style[variant]}`} {...props}>
          {variant == "large" && content != null && (
            <p>{content > 999 ? `${999}+` : content}</p>
          )}
        </div>
      )}
      {props.children}
    </div>
  );
};
export default Badge;

import style from "./snackbar.module.css";
import React from "react";
import "../../../t.css";
import Button from "@violetui/button";
import IconButton from "@violetui/icon_button";

interface SnackbarProps extends React.ComponentPropsWithoutRef<"div"> {
  action?: {
    name: string;
    onClick: (e: React.MouseEvent, ...args: any) => void;
  };
  endIcon?: {
    icon: React.ReactElement;
    onClick?: (e: React.MouseEvent, ...args: any) => void;
  };
  startIcon?: React.ReactElement;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "warning"
    | "success"
    | "default";
}

const Snackbar = ({
  className,
  children,
  action,
  endIcon,
  startIcon,
  color = "default",
  ...props
}: SnackbarProps) => {
  return (
    <div
      {...props}
      className={`${style.snackbar} ${style[color]} ${className}`}
    >
      {startIcon != null && (
        <span className={style.startIcon}>{startIcon}</span>
      )}

      <p className={style.text}>{children}</p>

      {action != null && (
        <span className={style.action}>
          {
            <Button
              variant="text"
              onClick={action.onClick}
              className={style.actionButton}
            >
              {action.name}
            </Button>
          }
        </span>
      )}
      {endIcon != null && (
        <span className={style.endIcon}>
          <IconButton
            variant="standard"
            onClick={endIcon.onClick != null ? endIcon.onClick : undefined}
            className={style.endIconButton}
          >
            {endIcon.icon}
          </IconButton>
        </span>
      )}
    </div>
  );
};
export default Snackbar;

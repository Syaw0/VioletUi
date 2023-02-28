import style from "./alert.module.css";
import React from "react";
import Warning from "./warning";
import "../../../t.css";
import Success from "./success";
import Error from "./error";
import Info from "./info";

interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
  type: "warning" | "error" | "success" | "info";
  title?: string;
  variant?: "filled" | "outlined" | "default";
  hideIcon?: boolean;
  onClose?: (e: React.MouseEvent) => any;
}

const Alert = ({
  type,
  title,
  hideIcon = false,
  variant = "default",
  ...props
}: AlertProps) => {
  return (
    <div className={style.holder}>
      {type === "warning" && (
        <Warning
          hideIcon={hideIcon}
          title={title}
          variant={variant}
          props={props}
        />
      )}
      {type === "success" && (
        <Success
          hideIcon={hideIcon}
          title={title}
          variant={variant}
          props={props}
        />
      )}
      {type === "error" && (
        <Error
          hideIcon={hideIcon}
          title={title}
          variant={variant}
          props={props}
        />
      )}
      {type === "info" && (
        <Info
          hideIcon={hideIcon}
          title={title}
          variant={variant}
          props={props}
        />
      )}
    </div>
  );
};
export default Alert;

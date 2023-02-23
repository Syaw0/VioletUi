import style from "./alert.module.css";
import React from "react";
import Warning from "./warning";
import "../../../t.css";

interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
  type: "warning" | "error" | "success" | "info";
  title?: string;
  variant?: "filled" | "outlined" | "default";
  hideIcon?: boolean;
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
    </div>
  );
};
export { Alert };

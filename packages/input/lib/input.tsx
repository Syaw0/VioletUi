import style from "./input.module.css";
import React, { ReactNode } from "react";

interface TextInputType extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  className?: string;
  StartIcon?: ReactNode;
  EndIcon?: ReactNode;
}

const TextInput = ({
  label = "",
  className = "",
  StartIcon,
  EndIcon,
  id = "",
  ...props
}: TextInputType) => {
  return (
    <div className={`${style.holder} ${className}`}>
      {label !== "" && <label htmlFor={id}>{label}</label>}
      <span className={style.inputHolder}>
        {StartIcon != null && StartIcon}
        <input {...props} />
      </span>
      {EndIcon != null && EndIcon}
    </div>
  );
};

export { TextInput };

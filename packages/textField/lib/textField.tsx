import React from "react";
import style from "./textField.module.css";

interface TextFieldType extends React.ComponentPropsWithoutRef<"input"> {
  variant?: "outlined" | "filled" | "standard";
  label?: string;
}

const TextField = ({
  className = "",
  variant = "filled",
  label,
  ...props
}: TextFieldType) => {
  return (
    <div className={`${style.holder} `}>
      <input
        {...props}
        className={`${style.input} ${style[variant]} ${className}`}
      />
      {label != null && <span className={style.label}>{label}</span>}
    </div>
  );
};

export default TextField;

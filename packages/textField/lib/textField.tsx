import React from "react";
import style from "./textField.module.css";

interface TextFieldType extends React.ComponentPropsWithoutRef<"input"> {}

const TextField = ({ className = "", ...props }: TextFieldType) => {
  return <div {...props} className={`${style.holder} ${className}`}></div>;
};

export default TextField;

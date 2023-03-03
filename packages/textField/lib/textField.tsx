import React, { useEffect, useRef, useState } from "react";
import style from "./textField.module.css";

interface TextFieldType extends React.ComponentPropsWithoutRef<"input"> {
  variant?: "outlined" | "filled" | "standard";
  label?: string;
  color?: "primary" | "secondary" | "tertiary";
  helperText?: string;
  error?: boolean;
}

const TextField = ({
  className = "",
  variant = "filled",
  label,
  color = "primary",
  helperText,
  error = false,
  ...props
}: TextFieldType) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isLabelInTheTop, setIsLabelInTheTop] = useState(false);
  const ref: any = useRef(null);
  useEffect(() => {
    const input = ref.current as HTMLInputElement;
    if (document.activeElement == input || isInputFocused) {
      return;
    }
    if (input.value != "") {
      setIsLabelInTheTop(true);
    } else {
      setIsLabelInTheTop(false);
    }
  });
  const focusHandler = () => {
    setIsInputFocused(true);
    setIsLabelInTheTop(true);
  };
  const blurHandler = () => {
    setIsInputFocused(false);
  };

  const labelClickHandler = () => {
    if (!isInputFocused && !props.disabled) {
      setIsInputFocused(true);
      ref.current.focus();
    }
  };
  return (
    <div className={`${style.holder}  ${style[color]}`}>
      {label != null && (
        <label
          onClick={labelClickHandler}
          className={`
          ${
            isInputFocused
              ? style[variant + "_input_focused"]
              : style[variant + "_input"]
          } ${
            isLabelInTheTop
              ? style[variant + "_label_top"]
              : style[variant + "_label"]
          } ${style.label} ${error ? style.errorLabel : ""}  `}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        onFocus={(e) => {
          props.onFocus && props.onFocus(e);
          focusHandler();
        }}
        onBlur={(e) => {
          props.onBlur && props.onBlur(e);
          blurHandler();
        }}
        ref={ref}
        className={`${style.input} ${style[variant]} ${className} ${
          error ? style[variant + "_error"] : ""
        } `}
      />
      {helperText != null && (
        <span
          className={`${style.helperText} ${
            error ? style.errorHelperText : ""
          }`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextField;

import React, { useEffect, useRef, useState } from "react";
import style from "./textField.module.css";

interface TextFieldType extends React.ComponentPropsWithoutRef<"input"> {
  variant?: "outlined" | "filled" | "standard";
  label?: string;
  color?: "primary" | "secondary" | "tertiary";
}

const TextField = ({
  className = "",
  variant = "filled",
  label,
  color = "primary",
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
    console.log("focus");
    setIsInputFocused(true);
    setIsLabelInTheTop(true);
  };
  const blurHandler = () => {
    console.log("blur");
    setIsInputFocused(false);
  };

  const labelClickHandler = () => {
    if (!isInputFocused) {
      setIsInputFocused(true);
      // setIsLabelInTheTop(true);
      ref.current.focus();
    }
  };

  console.log(isInputFocused ? variant + "_input_focused" : variant + "_input");
  console.log(isInputFocused ? variant + "_label_top" : variant + "_label");
  return (
    <div className={`${style.holder}  ${style[color]}`}>
      {label != null && (
        <label
          onClick={labelClickHandler}
          className={`${style.label}
          ${
            isInputFocused
              ? style[variant + "_input_focused"]
              : style[variant + "_input"]
          } ${
            isLabelInTheTop
              ? style[variant + "_label_top"]
              : style[variant + "_label"]
          }  `}
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
        className={`${style.input} ${style[variant]} ${className}`}
      />
    </div>
  );
};

export default TextField;

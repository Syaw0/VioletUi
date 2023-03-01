import React, { useEffect, useRef, useState } from "react";
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
  const [isLabelFocused, setIsLabelFocused] = useState(false);
  const ref: any = useRef(null);
  useEffect(() => {
    const input = ref.current as HTMLInputElement;
    if (document.activeElement == input || isLabelFocused) {
      return;
    }
    if (input.value != "") {
      setIsLabelFocused(true);
    } else {
      setIsLabelFocused(false);
    }
  });
  const focusHandler = () => {
    console.log("focus");
    setIsLabelFocused(true);
  };
  const blurHandler = () => {
    console.log("blur");
    setIsLabelFocused(false);
  };

  const labelClickHandler = () => {
    if (!isLabelFocused) {
      setIsLabelFocused(true);
      ref.current.focus();
    }
  };
  return (
    <div className={`${style.holder} `}>
      {label != null && (
        <label
          onClick={labelClickHandler}
          className={`${
            isLabelFocused
              ? style[variant + "_label_focused"]
              : style[variant + "_label"]
          } `}
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

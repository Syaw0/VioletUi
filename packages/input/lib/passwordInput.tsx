import IconEyeClose from "../assets/iconEyeClose";
import IconEyeOpen from "../assets/iconEyeOpen";
import React, { ReactNode, useState } from "react";
import style from "./passwordInput.module.css";

interface PasswordInputType extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  StartIcon?: ReactNode;
}

const PasswordInput = ({
  label = "",
  className = "",
  id = "",
  StartIcon,
  ...props
}: PasswordInputType) => {
  const [showPassword, setShowPassword] = useState(false);
  const changePasswordVisibility = () => {
    setShowPassword(showPassword ? false : true);
  };
  return (
    <div className={`${style.holder} ${className}`}>
      <label htmlFor={id}>{label}</label>
      <div>
        <div className={style.inputHolder}>
          {StartIcon != null ? StartIcon : ""}
          <input
            {...props}
            className={style.input}
            type={showPassword ? "text" : "password"}
          />
        </div>
        {showPassword ? (
          <IconEyeClose
            className={style.eyeIcon}
            onClick={changePasswordVisibility}
            width="20"
            height="20"
          />
        ) : (
          <IconEyeOpen
            className={style.eyeIcon}
            onClick={changePasswordVisibility}
            width="20"
            height="20"
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;

import style from "./toggleButtonGroup.module.css";
import React from "react";
import "../../../t.css";

interface toggleButtonGroupTypes
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  value: string | string[];
  onChange: (e: React.MouseEvent, newValues: string | string[]) => void;
}

const ToggleButtonGroup = ({
  onChange,
  value,
  ...props
}: toggleButtonGroupTypes) => {
  return (
    <div {...props} onChange={() => {}} className={`${style.holder} `}>
      {React.Children.map(props.children, (child) => {
        let c = child as React.ReactElement;
        return React.cloneElement(c, {
          selected: c.props.value == value,
          value: c.props.value,
          changeHandler: onChange,
          groupValue: value,
        });
      })}
    </div>
  );
};
export { ToggleButtonGroup };

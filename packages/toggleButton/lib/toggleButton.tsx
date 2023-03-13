import style from "./toggleButton.module.css";
import React from "react";
import "../../../t.css";
import Button from "./button";

export interface ToggleButtonItems {
  selected: boolean;
  icon?: React.ReactElement;
  text?: string;
  disable?: boolean;
}

interface ToggleButton
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  items: ToggleButtonItems[];
  multiple?: boolean;
  corner?: "circle" | "rounded" | "square";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "warning"
    | "success";
  onChange?: (newItems: ToggleButtonItems[]) => void;
}

const ToggleButton = ({
  items,
  multiple = false,
  onChange,
  corner = "circle",
  color = "secondary",
  ...props
}: ToggleButton) => {
  return (
    <div
      {...props}
      className={`${style.holder} ${style[corner]} ${style[color]}`}
    >
      {items.map((item, index) => {
        return (
          <Button
            index={index}
            item={item}
            items={items}
            key={index}
            onChange={onChange}
            multiple={multiple}
          />
        );
      })}
    </div>
  );
};
export default ToggleButton;

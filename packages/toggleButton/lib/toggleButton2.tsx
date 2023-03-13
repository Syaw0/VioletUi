import style from "./toggleButton2.module.css";
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
  onChange?: (newItems: ToggleButtonItems[]) => void;
  multiple?: boolean;
}

const ToggleButton = ({
  items,
  multiple = false,
  onChange,
  ...props
}: ToggleButton) => {
  return (
    <div {...props} className={`${style.holder}`}>
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

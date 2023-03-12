import style from "./toggleButton2.module.css";
import React from "react";
import "../../../t.css";

interface ToggleButtonItems {
  selected: boolean;
  icon?: React.ReactElement;
  text?: string;
  disable?: boolean;
}

interface ToggleButton
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  items: ToggleButtonItems[];
  onChange?: (newItems: ToggleButtonItems[]) => void;
}

const ToggleButton = ({ items, onChange, ...props }: ToggleButton) => {
  const handleClick = (e: React.MouseEvent, item: ToggleButtonItems) => {
    if (onChange == null) {
      return;
    }
    onChange(
      items.map((i) => {
        if (i === item) {
          i.selected = !i.selected;
        }
        return i;
      })
    );
  };
  return (
    <div {...props} className={`${style.holder}`}>
      {items.map((item, index) => {
        return (
          <button
            onClick={(e) => {
              handleClick(e, item);
            }}
            disabled={item.disable != null ? item.disable : false}
            key={index}
            className={`${style.button} ${
              item.selected ? style.selected : style.notSelected
            } `}
          >
            <div
              className={`${style.container} ${
                index != items.length - 1 ? style.withBorder : ""
              }  ${index == 0 ? style.startBtn : ""} ${
                index == items.length - 1 ? style.endBtn : ""
              }`}
            ></div>
            {item.icon != null && (
              <span className={style.icon}>{item.icon}</span>
            )}
            {item.text != null && (
              <span className={style.text}>{item.text}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};
export default ToggleButton;

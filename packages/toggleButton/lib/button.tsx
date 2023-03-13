import React, { useRef, useState } from "react";
import { ToggleButtonItems } from "./toggleButton2";
import style from "./toggleButton2.module.css";
import useToggleButtonEvents from "./useToggleButtonEvents";

interface ButtonProps {
  onChange?: (newItems: ToggleButtonItems[]) => void;
  item: ToggleButtonItems;
  items: ToggleButtonItems[];
  index: number;
}

const Button = ({ item, index, items, onChange }: ButtonProps) => {
  const btn: any = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { handleFocus, handleHover, handleMouseDown } = useToggleButtonEvents(
    item.disable != null ? item.disable : false,
    setIsClicked,
    isClicked,
    btn,
    isHover,
    setIsHover
  );
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
    <button
      onMouseDown={handleMouseDown}
      onFocus={handleFocus}
      onMouseOver={handleHover}
      ref={btn}
      onClick={(e) => {
        handleClick(e, item);
      }}
      disabled={item.disable != null ? item.disable : false}
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
        <span
          className={`${style.icon} ${
            item.text == null ? style.iconWithNoPadding : ""
          }`}
        >
          {item.icon}
        </span>
      )}
      {item.text != null && <span className={style.text}>{item.text}</span>}
    </button>
  );
};

export default Button;

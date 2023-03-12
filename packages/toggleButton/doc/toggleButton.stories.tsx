import React, { useState } from "react";
import ToggleButton from "../lib/toggleButton2";
import AlignCenter from "./alignCenter";
import AlignLeft from "./alignLeft";
import AlignRight from "./alignRight";
import FingerPrintIcon from "./fingerPrintIcon";

export default { title: "ToggleButton" };

export const ToggleBtn = () => {
  const [state, setState] = useState([
    { selected: false, text: "Button", icon: <FingerPrintIcon /> },
    {
      selected: false,
      text: "Button Wit",
      icon: <FingerPrintIcon />,
    },
    {
      selected: true,
      text: "Button",
      icon: <FingerPrintIcon />,
      disable: true,
    },
  ]);

  const handle = (e: any, type: string) => {
    setState((s) => ({ ...s, [type]: !s[type] }));
  };

  return (
    <ToggleButton
      onChange={(newItems) => {
        setState(newItems);
      }}
      items={state}
    />
  );
};

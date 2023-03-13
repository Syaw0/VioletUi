import React, { useState } from "react";
import ToggleButton from "../lib/toggleButton2";
import AlignCenter from "./alignCenter";
import AlignLeft from "./alignLeft";
import AlignRight from "./alignRight";
import FingerPrintIcon from "./fingerPrintIcon";

export default { title: "ToggleButton" };

export const ToggleBtn = () => {
  const [state, setState] = useState<any>([
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
  const [state2, setState2] = useState<any>([
    { selected: false, icon: <AlignLeft /> },
    {
      selected: false,
      icon: <AlignCenter />,
    },
    {
      selected: false,
      icon: <AlignRight />,
    },
  ]);

  const handle = (e: any, type: string) => {
    setState((s) => ({ ...s, [type]: !s[type] }));
  };

  return (
    <>
      <ToggleButton
        multiple
        onChange={(newItems) => {
          setState(newItems);
        }}
        items={state}
      />
      <br />
      <ToggleButton
        onChange={(newItems) => {
          setState2(newItems);
        }}
        items={state2}
      />
    </>
  );
};

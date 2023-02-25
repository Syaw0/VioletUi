import React, { useState } from "react";
import { ToggleButton } from "../lib/toggleButton";
import AlignCenter from "./alignCenter";
import AlignLeft from "./alignLeft";
import AlignRight from "./alignRight";

export default { title: "ToggleButton" };

export const toggleBtn = () => {
  const [state, setState] = useState({
    center: false,
    left: false,
    right: false,
  });

  const handle = (e: any, type: string) => {
    setState((s) => ({ ...s, [type]: !s[type] }));
  };

  return (
    <div style={{ display: "flex" }}>
      <ToggleButton
        onClick={(e) => handle(e, "center")}
        selected={state.center}
        value="center"
      >
        <AlignCenter />
      </ToggleButton>

      <ToggleButton
        onClick={(e) => handle(e, "left")}
        selected={state.left}
        value="left"
      >
        <AlignLeft />
      </ToggleButton>

      <ToggleButton
        onClick={(e) => handle(e, "right")}
        selected={state.right}
        value="right"
        disabled
      >
        <AlignRight />
      </ToggleButton>
    </div>
  );
};

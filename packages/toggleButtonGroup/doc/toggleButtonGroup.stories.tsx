import React, { useState } from "react";
import { ToggleButton } from "@violetui/toggle_button";
import { ToggleButtonGroup } from "../lib/toggleButtonGroup";
import AlignCenter from "./alignCenter";
import AlignLeft from "./alignLeft";
import AlignRight from "./alignRight";

export default { title: "ToggleButtonGroup" };

export const toggleButtonGroup = () => {
  const [values, setValues] = useState<string | string[]>("");
  return (
    <ToggleButtonGroup
      value={values}
      onChange={(e, w) => {
        setValues(w);
      }}
    >
      <ToggleButton value="s">
        <AlignCenter />
      </ToggleButton>

      <ToggleButton value="w">
        <AlignLeft />
      </ToggleButton>

      <ToggleButton value="z">
        <AlignRight />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export const toggleButtonGroup2 = () => {
  const [values, setValues] = useState<string | string[]>([]);
  return (
    <ToggleButtonGroup
      value={values}
      onChange={(e, w) => {
        setValues(w);
      }}
    >
      <ToggleButton value="s">
        <AlignCenter />
      </ToggleButton>

      <ToggleButton value="w">
        <AlignLeft />
      </ToggleButton>

      <ToggleButton value="z">
        <AlignRight />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

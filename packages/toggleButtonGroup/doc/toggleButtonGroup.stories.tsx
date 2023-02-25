import React, { useState } from "react";
import { ToggleButton } from "@violetui/toggle_button";
import { ToggleButtonGroup } from "../lib/toggleButtonGroup";
import AlignCenter from "./alignCenter";
import AlignLeft from "./alignLeft";
import AlignRight from "./alignRight";

export default { title: "ToggleButtonGroup" };

export const toggleButtonGroup = () => (
  <ToggleButtonGroup>
    <ToggleButton value="" />
  </ToggleButtonGroup>
);

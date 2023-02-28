import React from "react";
import Tooltip from "../lib/tooltip";
export default { title: "Tooltip" };

export const Tooltip1 = () => (
  <Tooltip text="Hello dear">
    <button>Click</button>
  </Tooltip>
);

export const Tooltip2 = () => (
  <Tooltip text="By clicking on this you agree with our terms.">
    <button>Signup</button>
  </Tooltip>
);

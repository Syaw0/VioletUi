import React, { useState } from "react";
import { Badge } from "../lib/badge";
import TestIcon from "./testIcon";
export default { title: "Badge" };

export const Badge1 = () => (
  <Badge content={0}>
    <TestIcon />
  </Badge>
);

export const Badge2 = () => (
  <Badge content={100}>
    <TestIcon />
  </Badge>
);

export const Badge3 = () => (
  <Badge content={1000}>
    <TestIcon />
  </Badge>
);

export const Badge4 = () => {
  const [toggleBadgeVis, setToggleBadgeVis] = useState(false);
  const [num, setNum] = useState(0);
  return (
    <>
      <div>
        <Badge content={num} hideBadge={toggleBadgeVis}>
          <TestIcon />
        </Badge>
      </div>
      <div>
        <button
          onClick={() => {
            setToggleBadgeVis((s) => !s);
          }}
        >
          Toggle Badge
        </button>
        <button onClick={() => setNum((s) => s + 1)}>increase</button>
        <button onClick={() => setNum((s) => s - 1)}>decrease</button>
      </div>
    </>
  );
};

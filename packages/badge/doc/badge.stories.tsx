import React, { useState } from "react";
import Badge from "../lib/badge";
import TestIcon from "./testIcon";
import IconButton from "@violetui/icon_button";

export default { title: "Badge" };

export const Badge1 = () => (
  <>
    <Badge content={0}>
      <IconButton variant="standard">
        <TestIcon />
      </IconButton>
    </Badge>

    <br />

    <Badge content={0} variant="small">
      <IconButton variant="standard" color="secondary">
        <TestIcon />
      </IconButton>
    </Badge>
    <br />

    <Badge content={1000} variant="large">
      <IconButton variant="standard" color="tertiary">
        <TestIcon />
      </IconButton>
    </Badge>
  </>
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

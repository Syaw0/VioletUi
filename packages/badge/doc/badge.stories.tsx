import React from "react";
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

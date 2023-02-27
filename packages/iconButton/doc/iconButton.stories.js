import React from "react";
import { IconButton } from "../lib/iconButton";
import "../../../t.css";
import FingerPrintIcon from "./fingerPrintIcon";

export default { title: "Icon Button" };

export const iconButton1 = () => (
  <>
    <IconButton color="primary">
      <FingerPrintIcon />
    </IconButton>

    <IconButton color="secondary">
      <FingerPrintIcon />
    </IconButton>

    <IconButton color="tertiary">
      <FingerPrintIcon />
    </IconButton>

    <IconButton color="error">
      <FingerPrintIcon />
    </IconButton>

    <IconButton disabled color="error">
      <FingerPrintIcon />
    </IconButton>
  </>
);

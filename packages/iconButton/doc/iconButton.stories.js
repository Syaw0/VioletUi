import React, { useState } from "react";
import IconButton from "../lib/iconButton";
import "../../../t.css";
import FingerPrintIcon from "./fingerPrintIcon";

export default { title: "Icon Button" };

export const iconButton1 = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <IconButton color="primary">
        <FingerPrintIcon />
      </IconButton>
      <br />
      <IconButton
        color="primary"
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
      >
        <FingerPrintIcon />
      </IconButton>
      <br />
      <IconButton disabled color="primary">
        <FingerPrintIcon />
      </IconButton>
      <br />
    </>
  );
};

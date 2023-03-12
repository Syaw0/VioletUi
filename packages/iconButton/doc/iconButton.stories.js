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
      <IconButton
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
        color="secondary"
      >
        <FingerPrintIcon />
      </IconButton>

      <br />
      <IconButton
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
        color="tertiary"
      >
        <FingerPrintIcon />
      </IconButton>

      <br />
      <IconButton
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
        color="warning"
      >
        <FingerPrintIcon />
      </IconButton>
      <br />
      <IconButton
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
        color="error"
      >
        <FingerPrintIcon />
      </IconButton>
      <br />
      <IconButton
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
        color="success"
      >
        <FingerPrintIcon />
      </IconButton>
      <br />
    </>
  );
};

export const iconButton2 = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <IconButton variant="filledTonal" color="primary">
        <FingerPrintIcon />
      </IconButton>
      <br />
      <IconButton
        variant="filledTonal"
        color="primary"
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
      >
        <FingerPrintIcon />
      </IconButton>
      <br />
      <IconButton disabled color="primary" variant="filledTonal">
        <FingerPrintIcon />
      </IconButton>
      <br />
      <IconButton
        variant="filledTonal"
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
        color="secondary"
      >
        <FingerPrintIcon />
      </IconButton>

      <br />
      <IconButton
        variant="filledTonal"
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
        color="tertiary"
      >
        <FingerPrintIcon />
      </IconButton>

      <br />
      <IconButton
        variant="filledTonal"
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
        color="warning"
      >
        <FingerPrintIcon />
      </IconButton>
      <br />
      <IconButton
        variant="filledTonal"
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
        color="error"
      >
        <FingerPrintIcon />
      </IconButton>
      <br />
      <IconButton
        variant="filledTonal"
        selected={isSelected}
        onClick={() => {
          setIsSelected((e) => !e);
        }}
        color="success"
      >
        <FingerPrintIcon />
      </IconButton>
      <br />
    </>
  );
};

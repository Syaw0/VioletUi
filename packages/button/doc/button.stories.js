import React from "react";
import Button from "../lib/button";
import "../../../t.css";
import FingerPrintIcon from "./fingerPrintIcon";
import CloseIcon from "./close";

export default { title: "Button" };

export const primary = () => <Button color="primary">Hello Button</Button>;
export const primary2 = () => (
  <div>
    <Button variant="elevated">Hello Button</Button>
    <br />
    <Button StartIcon={<CloseIcon />} variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button EndIcon={<CloseIcon />} variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button variant="elevated" disabled>
      Hello Button
    </Button>
  </div>
);
export const secondary = () => <Button color="secondary">Hello Button</Button>;
export const tertiary = () => <Button color="tertiary">Hello Button</Button>;
export const error = () => <Button color="error">Hello Button</Button>;

export const contained = () => (
  <Button variant="contained">Hello Button</Button>
);
export const outlined = () => <Button variant="outlined">Hello Button</Button>;
export const shadow = () => <Button variant="shadow">Hello Button</Button>;

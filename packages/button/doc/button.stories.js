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
    <Button EndIcon={<CloseIcon />} variant="elevated" disabled>
      Hello Button
    </Button>
    <br />
    <Button variant="filled">Hello Button</Button>
    <br />
    <Button StartIcon={<CloseIcon />} variant="filled">
      Hello Button
    </Button>
    <br />
    <Button EndIcon={<CloseIcon />} variant="filled">
      Hello Button
    </Button>
    <br />
    <Button EndIcon={<CloseIcon />} variant="filled" disabled>
      Hello Button
    </Button>
    <br />
    <Button variant="filledTonal">Hello Button</Button>
    <br />
    <Button StartIcon={<CloseIcon />} variant="filledTonal">
      Hello Button
    </Button>
    <br />
    <Button EndIcon={<CloseIcon />} variant="filledTonal">
      Hello Button
    </Button>
    <br />
    <Button EndIcon={<CloseIcon />} variant="filledTonal" disabled>
      Hello Button
    </Button>
    <br />
    <Button variant="outlined">Hello Button</Button>
    <br />
    <Button StartIcon={<CloseIcon />} variant="outlined">
      Hello Button
    </Button>
    <br />
    <Button EndIcon={<CloseIcon />} variant="outlined">
      Hello Button
    </Button>
    <br />
    <Button EndIcon={<CloseIcon />} variant="outlined" disabled>
      Hello Button
    </Button>{" "}
    <br />
    <Button variant="text">Hello Button</Button>
    <br />
    <Button StartIcon={<CloseIcon />} variant="text">
      Hello Button
    </Button>
    <br />
    <Button EndIcon={<CloseIcon />} variant="text">
      Hello Button
    </Button>
    <br />
    <Button EndIcon={<CloseIcon />} variant="text" disabled>
      Hello Button
    </Button>
  </div>
);
export const primary3 = () => (
  <div>
    <Button color="secondary" variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button color="secondary" StartIcon={<CloseIcon />} variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button color="secondary" EndIcon={<CloseIcon />} variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button
      color="secondary"
      EndIcon={<CloseIcon />}
      variant="elevated"
      disabled
    >
      Hello Button
    </Button>
    <br />
    <Button color="tertiary" variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button color="tertiary" StartIcon={<CloseIcon />} variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button color="tertiary" EndIcon={<CloseIcon />} variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button
      color="tertiary"
      EndIcon={<CloseIcon />}
      variant="elevated"
      disabled
    >
      Hello Button
    </Button>
    <br />{" "}
    <Button color="error" variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button color="error" StartIcon={<CloseIcon />} variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button color="error" EndIcon={<CloseIcon />} variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button color="error" EndIcon={<CloseIcon />} variant="elevated" disabled>
      Hello Button
    </Button>
    <br />{" "}
    <Button color="warning" variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button color="warning" StartIcon={<CloseIcon />} variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button color="warning" EndIcon={<CloseIcon />} variant="elevated">
      Hello Button
    </Button>
    <br />
    <Button color="warning" EndIcon={<CloseIcon />} variant="elevated" disabled>
      Hello Button
    </Button>
    <br />
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

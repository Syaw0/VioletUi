import React from "react";
import TextField from "../lib/textField";
import "../../../t.css";

export default { title: "Text Field" };

export const textField = () => (
  <div>
    <TextField label="username" />
    <TextField color="secondary" label="username" />
    <TextField color="tertiary" label="username" />
  </div>
);

export const textField2 = () => (
  <div>
    <TextField variant="outlined" label="username" />
    <TextField color="secondary" variant="outlined" label="username" />
    <TextField color="tertiary" variant="outlined" label="username" />
  </div>
);

export const textField3 = () => (
  <div>
    <TextField variant="standard" label="username" />

    <TextField color="secondary" variant="standard" label="username" />

    <TextField color="tertiary" variant="standard" label="username" />
  </div>
);

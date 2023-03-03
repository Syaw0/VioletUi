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

export const textField4 = () => (
  <div>
    <TextField
      variant="standard"
      label="username"
      defaultValue={"this is default value"}
    />

    <TextField
      defaultValue={"hello"}
      disabled
      color="secondary"
      variant="standard"
      label="disabled"
    />
    <TextField
      disabled
      color="secondary"
      defaultValue={"hello"}
      label="disabled"
    />

    <TextField
      disabled
      color="secondary"
      variant="outlined"
      defaultValue={"hello"}
      label="disabled"
    />

    <TextField
      type={"password"}
      color="tertiary"
      variant="standard"
      label="username"
    />
  </div>
);

export const textField5 = () => (
  <div>
    <TextField
      variant="standard"
      label="username"
      // defaultValue={"this is default value"}
      helperText="enter Your name"
      placeholder="some placeholder"
    />

    <TextField
      variant="outlined"
      label="username"
      // defaultValue={"this is default value"}
      helperText="enter Your name"
      placeholder="some placeholder"
    />

    <TextField
      variant="filled"
      label="username"
      // defaultValue={"this is default value"}
      helperText="enter Your name"
      placeholder="some placeholder"
    />
  </div>
);

export const textField6 = () => (
  <div>
    <TextField
      variant="standard"
      label="username"
      error
      // defaultValue={"this is default value"}
      helperText="enter Your name"
      placeholder="some placeholder"
    />

    <TextField
      variant="outlined"
      label="username"
      error
      // defaultValue={"this is default value"}
      helperText="enter Your name"
      placeholder="some placeholder"
    />

    <TextField
      variant="filled"
      label="username"
      error
      // defaultValue={"this is default value"}
      helperText="enter Your name"
      placeholder="some placeholder"
    />
  </div>
);

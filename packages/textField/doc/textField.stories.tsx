import React from "react";
import TextField from "../lib/textField";
import "../../../t.css";

export default { title: "Text Field" };

export const textField = () => <TextField label="username" />;

export const textField2 = () => (
  <TextField variant="outlined" label="username" />
);

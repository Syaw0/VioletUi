import React from "react";
import PasswordInput from "../lib/passwordInput";
import "../../../t.css";

export default { title: "PasswordInputs" };

export const passwordInput = () => (
  <PasswordInput placeholder="Hello Friend!" />
);

export const passwordInputWithLabel = () => (
  <PasswordInput placeholder="Hello Friend!" label="Password" />
);

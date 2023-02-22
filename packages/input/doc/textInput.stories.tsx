import React from "react";
import { TextInput } from "../lib/input";
import "../../../t.css";

export default { title: "TextInput" };

export const textInput = () => <TextInput placeholder="Hello Friend!" />;

export const textInputWithLabel = () => (
  <TextInput placeholder="Hello Friend!" label="UserName" id="textinput" />
);

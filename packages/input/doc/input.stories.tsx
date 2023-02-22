import React from "react";
import { TextInput } from "../lib/input";

export default { title: "Input" };

export const textInput = () => <TextInput placeholder="Hello Friend!" />;

export const textInputWithLabel = () => (
  <TextInput placeholder="Hello Friend!" label="UserName" id="textinput" />
);

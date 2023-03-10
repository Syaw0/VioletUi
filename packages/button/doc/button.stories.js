import Button from "../lib/button";
import React from "react";
import CloseIcon from "./close";
export default {
  title: "Button",
  component: Button,
  // parameters: {
  //   docs: {
  //     page: () => {
  //       return <h1>Button</h1>;
  //     },
  //   },
  // },
  argTypes: {
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      defaultValue: "filled",
      description: "specific the variant of button",
      table: {
        type: { summary: "string", detail: "" },
        defaultValue: { summary: "filled" },
      },
      control: "select",
      options: ["elevated", "filled", "filledTonal", "outlined", "text"],
    },
    color: {
      name: "color",
      type: { name: "string", required: false },
      defaultValue: "primary",
      description: "specific the color of button",
      table: {
        type: { summary: "string", detail: "" },
        defaultValue: { summary: "primary" },
      },
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "error",
        "warning",
        "success",
      ],
    },

    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "specific the disability of button",
      table: {
        type: { summary: "string", detail: "" },
        defaultValue: { summary: false },
      },
      control: "radio",
      options: [true, false],
    },
    startIcon: {
      name: "startIcon",
      type: { name: "ReactElement", required: false },
      defaultValue: null,
      description: "specific the startIcon of button",
      table: {
        type: { summary: "ReactElement", detail: "" },
        defaultValue: { summary: "null" },
      },
      control: "radio",
      options: [true, false],
      mapping: {
        true: <CloseIcon />,
        false: null,
      },
    },
    endIcon: {
      name: "endIcon",
      type: { name: "ReactElement", required: false },
      defaultValue: null,
      description: "specific the endIcon of button",
      table: {
        type: { summary: "ReactElement", detail: "" },
        defaultValue: { summary: "null" },
      },
      control: "radio",
      options: [true, false],
      mapping: {
        true: <CloseIcon />,
        false: null,
      },
    },
  },
};
const Template = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  children: "Button",
};

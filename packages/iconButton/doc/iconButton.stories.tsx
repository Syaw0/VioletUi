import React from "react";
import IconButton from "../lib/iconButton";
import "../../../t.css";
import FingerPrintIcon from "./fingerPrintIcon";

const colors = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "warning",
  "success",
  "neutral",
];

export default {
  title: "Icon Button",
  component: IconButton,
  // parameters: {
  //   docs: {
  //     page: () => {
  //       return <h1>Icon Button</h1>;
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
      options: ["filled", "filledTonal", "outlined", "standard"],
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
      options: colors,
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
    children: {
      name: "children",
      type: { name: "React.ReactElement", required: true },
      defaultValue: "null",
      description: "specific the icon of button",
      table: {
        type: { summary: "React.ReactElement", detail: "" },
        defaultValue: { summary: "null" },
      },
      control: "radio",
    },
    selected: {
      name: "selected",
      type: { name: "boolean", required: false },
      defaultValue: "null",
      description: "specific the icon of button",
      table: {
        type: { summary: "boolean", detail: "" },
        defaultValue: { summary: "null" },
      },
      control: "radio",
      options: [null, true, false],
    },
  },
};
const Template = (args) => {
  const com: any = [];
  colors.forEach((c) => {
    com.push(
      <div>
        <IconButton {...args} color={c}>
          <FingerPrintIcon />
        </IconButton>
      </div>
    );
  });
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {com}
    </div>
  );
};

export const Filled = Template.bind({});
Filled.args = {
  children: <FingerPrintIcon />,
  variant: "filled",
};

export const FilledTonal = Template.bind({});
FilledTonal.args = {
  children: <FingerPrintIcon />,
  variant: "filledTonal",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: <FingerPrintIcon />,
  variant: "outlined",
  selected: null,
};

export const Standard = Template.bind({});
Standard.args = {
  children: <FingerPrintIcon />,
  variant: "standard",
};

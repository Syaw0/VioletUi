import FabButton from "../lib/fabButton";
import React from "react";
import WriteIcon from "./writeIcon";

const colors = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "warning",
  "success",
];

export default {
  title: "Fab Button",
  component: FabButton,
  // parameters: {
  //   docs: {
  //     page: () => {
  //       return <h1>Button</h1>;
  //     },
  //   },
  // },
  argTypes: {
    size: {
      name: "size",
      type: { name: "string", required: false },
      defaultValue: "medium",
      description: "specific the size of fab button",
      table: {
        type: { summary: "string", detail: "" },
        defaultValue: { summary: "medium" },
      },
      control: "select",
      options: ["small", "medium", "large"],
    },
    elevationLevel: {
      name: "elevationLevel",
      type: { name: "string", required: false },
      defaultValue: "default",
      description: "specific the elevation of fab button",
      table: {
        type: { summary: "string", detail: "" },
        defaultValue: { summary: "default" },
      },
      control: "select",
      options: ["default", "small"],
    },
    text: {
      name: "text",
      type: { name: "string", required: false },
      defaultValue: "Compose",
      description: "specific the text of fab button",
      table: {
        type: { summary: "string", detail: "" },
        defaultValue: { summary: "null" },
      },
      control: "text",
    },
    color: {
      name: "color",
      type: { name: "string", required: false },
      defaultValue: "primary",
      description: "specific the color of fab button",
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
      description: "specific the disability of fab button",
      table: {
        type: { summary: "string", detail: "" },
        defaultValue: { summary: false },
      },
      control: "radio",
      options: [true, false],
    },
    children: {
      name: "children",
      type: { name: "ReactElement", required: false },
      defaultValue: <WriteIcon />,
      description: "specific the icon of fab button",
      table: {
        type: { summary: "ReactElement", detail: "" },
        defaultValue: { summary: "null" },
      },
      control: "radio",
      options: [true, false],
      mapping: {
        true: <WriteIcon />,
        false: null,
      },
    },
  },
};
const Template = (args) => {
  const com: any = [];
  colors.forEach((c) => {
    com.push(
      <div>
        <FabButton {...args} color={c}>
          {/* <WriteIcon /> */}
        </FabButton>
      </div>
    );
  });
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {com}
    </div>
  );
};

export const Fab = Template.bind({});
Fab.args = {};

export const Fab2 = Template.bind({});
Fab2.args = {
  text: "Compose",
};

export const Fab3 = Template.bind({});
Fab3.args = {
  text: "Compose",
  children: null,
  elevationLevel: "small",
};

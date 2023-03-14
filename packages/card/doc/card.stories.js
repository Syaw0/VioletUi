import Card from "../lib/card";
import React from "react";

const colors = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "warning",
  "success",
];

export default {
  title: "Card",
  component: Card,
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
      description: "specific the variant of Card",
      table: {
        type: { summary: "string", detail: "" },
        defaultValue: { summary: "filled" },
      },
      control: "select",
      options: ["elevated", "filled", "outlined"],
    },
    color: {
      name: "color",
      type: { name: "string", required: false },
      defaultValue: "primary",
      description: "specific the color of Card",
      table: {
        type: { summary: "string", detail: "" },
        defaultValue: { summary: "primary" },
      },
      control: "select",
      options: colors,
    },
  },
};
const Template = (args) => {
  const com = [];
  colors.forEach((c) => {
    com.push(
      <div>
        <Card {...args} color={c}>
          <h4>hello</h4>
          <p>some text</p>
        </Card>
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
  children: "Button",
  variant: "filled",
};

export const Elevated = Template.bind({});
Elevated.args = {
  children: "Button",
  variant: "elevated",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Button",
  variant: "outlined",
};

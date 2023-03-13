import React from "react";
import Badge from "../lib/badge";
import TestIcon from "./testIcon";
import IconButton from "@violetui/icon_button";

const colors = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "warning",
  "success",
];

export default {
  title: "Badge",
  component: Badge,
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
      defaultValue: "large",
      description: "specify that badge is just a dot or has number.",
      table: {
        type: {
          summary: "string",
          detail: `
        <Badge variant={"large"|"small"}>
        <Icon/>
        </Badge>`,
        },
        defaultValue: { summary: "large" },
      },
      control: "select",
      options: ["large", "small"],
    },
    color: {
      name: "color",
      type: { name: "string", required: false },
      defaultValue: "error",
      description: "specific the color of Badge",
      table: {
        type: {
          summary: "string",
          detail: `
        <Badge color={"error",...}>
        <Icon/>
        </Badge>`,
        },
        defaultValue: { summary: "error" },
      },
      control: "select",
      options: colors,
    },
    hideBadge: {
      name: "hideBadge",
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "specify that badge is render or not.",
      table: {
        type: {
          summary: "boolean",
          detail: `
        <Badge hideBadge={false}>
        <Icon/>
        </Badge>`,
        },
        defaultValue: { summary: false },
      },
      control: "radio",
      options: [true, false],
    },
    content: {
      name: "content",
      type: { name: "number", required: false },
      defaultValue: "10",
      description: "specify the content of badge",
      table: {
        type: {
          summary: "number",
          detail: `
        <Badge content={10}>
        <Icon/>
        </Badge>`,
        },
        defaultValue: { summary: "null" },
      },
      control: "text",
    },
  },
};
const Template = (args) => {
  const com: any = [];
  colors.forEach((c) => {
    com.push(
      <div>
        <Badge {...args} color={c}>
          <IconButton variant="standard" color="neutral">
            <TestIcon />
          </IconButton>
        </Badge>
      </div>
    );
  });
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {com}
    </div>
  );
};

export const MyBadge = Template.bind({});
MyBadge.args = {};

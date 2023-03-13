import React from "react";
import Snackbar from "../lib/snackbar";
import IconSuccess from "./icons/successIcon";
import IconClose from "./icons/closeIcon";

const colors = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "warning",
  "success",
  "default",
];

export default {
  title: "Snackbar",
  component: Snackbar,
  // parameters: {
  //   docs: {
  //     page: () => {
  //       return <h1>Snackbar</h1>;
  //     },
  //   },
  // },
  argTypes: {
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
    children: {
      name: "children",
      type: { name: "React.ReactElement", required: false },
      defaultValue: "Snacks Are Hots.",
      description: "specific the icon of button",
      table: {
        type: { summary: "React.ReactElement", detail: "" },
        defaultValue: { summary: "null" },
      },
      control: "text",
    },
    startIcon: {
      name: "startIcon",
      type: { name: "React.ReactElement", required: false },
      defaultValue: <IconSuccess />,
      description: "specific first place in the snackbar with icon.",
      table: {
        type: { summary: "React.ReactElement", detail: "" },
        defaultValue: { summary: "null" },
      },
      control: "radio",
      options: [true, false],
      mapping: {
        true: <IconSuccess />,
        false: null,
      },
    },
    endIcon: {
      name: "endIcon",
      type: { name: "Object", required: false },
      defaultValue: { icon: <IconClose />, onclick() {} },
      description:
        "specific first place in the snackbar with icon and some handler.",
      table: {
        type: {
          summary: "Object",
          detail: `
        <Snackbar endIcon={
          {
            icon:<Icon/>,
            onClick:()=>{}
          }
        }>
        
</Snackbar>
        `,
        },
        defaultValue: { summary: "null" },
      },
      control: "radio",
      options: [true, false],
      mapping: {
        true: { icon: <IconClose />, onClick: () => {} },
        false: null,
      },
    },
    action: {
      name: "action",
      type: { name: "Object", required: false },
      defaultValue: { name: "Undo", onclick() {} },
      description: "specify a action button to handle something.",
      table: {
        type: {
          summary: "Object",
          detail: `
        <Snackbar action={
          {
            name:"Undo",
            onClick:()=>{}
          }
        }>
        
</Snackbar>
        `,
        },
        defaultValue: { summary: "null" },
      },
      control: "radio",
      options: [true, false],
      mapping: {
        true: { name: "Undo", onClick: () => {} },
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
        <Snackbar {...args} color={c}></Snackbar> <br />
      </div>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {com}
    </div>
  );
};

export const Snack = Template.bind({});
Snack.args = {};

import React, { useState } from "react";
import ToggleButton from "../lib/toggleButton";
import AlignCenter from "./alignCenter";
import AlignLeft from "./alignLeft";
import AlignRight from "./alignRight";

const colors = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "warning",
  "success",
];

export default {
  title: "Toggle Button",
  component: ToggleButton,
  // parameters: {
  //   docs: {
  //     page: () => {
  //       return <h1>Toggle Button</h1>;
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

    multiple: {
      name: "multiple",
      type: { name: "boolean", required: false },
      defaultValue: "false",
      description: "specific that choose multiple item or not",
      table: {
        type: { summary: "boolean", detail: "" },
        defaultValue: { summary: "false" },
      },
      control: "radio",
      options: [true, false],
    },
    onChange: {
      name: "onChange",
      type: { name: "function", required: false },
      defaultValue: "null",
      description:
        "when an change happen in the toggle state this function receive new items to set in states.",
      table: {
        type: {
          summary: "function",
          detail: "<ToggleButton onChange={(e:newItems)=>{setItems(e)}} />",
        },
        defaultValue: { summary: "null" },
      },
      control: "radio",
    },
    corner: {
      name: "corner",
      type: { name: "string", required: false },
      defaultValue: "circle",
      description: "specify the corner radius of toggle button",
      table: {
        type: {
          summary: "string",
          detail: "<ToggleButton corner={'square'|'rounded'|'circle'} />",
        },
        defaultValue: { summary: "circle" },
      },
      control: "select",
      options: ["circle", "square", "rounded"],
    },
    items: {
      name: "items",
      type: { name: "array", required: false },
      defaultValue: "null",
      description:
        "the list of elements you want to control in the toggle button.",
      table: {
        type: {
          summary: "array",
          detail: `<ToggleButton items={
            [
              {selected:true,
                text?:'button',
                icon?:<Icon/>,
                disable?:false},              

              {selected:false,
                text?:'button2',
                icon?:<Icon2/>,
              disable?:false}
            ]
            } />`,
        },
        defaultValue: { summary: "null" },
      },
      control: "radio",
    },
  },
};

const Com = (...args: any) => {
  const [state, setState] = useState([
    { text: "Button1", icon: <AlignLeft />, selected: false },
    { text: "Button1", icon: <AlignCenter />, selected: false },
    { text: "Button1", icon: <AlignRight />, selected: false },
  ]);
  const handle = (e: any) => {
    setState(e);
  };
  return (
    <div>
      <ToggleButton {...args[0]} onChange={handle} items={state}></ToggleButton>
      <br />
    </div>
  );
};

const Template = (args) => {
  const com: any = [];
  colors.forEach((c) => {
    com.push(<Com {...args} color={c} />);
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {com}
    </div>
  );
};

export const Toggle = Template.bind({});
Toggle.args = {};
